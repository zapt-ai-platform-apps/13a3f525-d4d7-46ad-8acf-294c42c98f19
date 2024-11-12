import Header from '../components/Header';
import { createSignal, For, onMount } from 'solid-js';
import { createEvent } from '../supabaseClient';

function CloseMySkillGaps(props) {
  const { user, handleSignOut } = props;
  const [competencies, setCompetencies] = createSignal([]);
  const [loading, setLoading] = createSignal(false);

  const fetchCompetencies = async () => {
    setLoading(true);
    // Fetch competencies from previous modules or user profile
    // Here we use placeholders
    const userCompetencies = ['Communication Skills', 'Problem-Solving', 'Teamwork'];
    const courses = {};

    for (const competency of userCompetencies) {
      try {
        const response = await createEvent('chatgpt_request', {
          prompt: `Find 2 online courses from Udemy and Coursera to improve ${competency}. Provide the course title, platform, and a link.`,
          response_type: 'json',
        });
        courses[competency] = response;
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    const competenciesData = userCompetencies.map((comp) => ({
      name: comp,
      courses: courses[comp] || [],
    }));

    setCompetencies(competenciesData);
    setLoading(false);
  };

  onMount(fetchCompetencies);

  return (
    <div class="h-full flex flex-col">
      <Header user={user} handleSignOut={handleSignOut} />
      <main class="flex-grow container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-6 text-purple-600">Close My Skill Gaps</h2>
        <Show when={loading()}>
          <p class="text-gray-700">Loading competencies and courses...</p>
        </Show>
        <For each={competencies()}>
          {(competency) => (
            <div class="mb-6">
              <h3 class="text-2xl font-semibold mb-2 text-purple-600">{competency.name}</h3>
              <ul class="list-disc list-inside">
                <For each={competency.courses}>
                  {(course) => (
                    <li>
                      <a href={course.link} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline cursor-pointer">
                        {course.title} - {course.platform}
                      </a>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          )}
        </For>
      </main>
    </div>
  );
}

export default CloseMySkillGaps;