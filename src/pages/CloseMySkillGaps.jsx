import Header from '../components/Header';
import { createSignal, For, onMount, Show } from 'solid-js';

function CloseMySkillGaps(props) {
  const { user, handleSignOut } = props;
  const [competencies, setCompetencies] = createSignal([]);
  const [loading, setLoading] = createSignal(false);

  const fetchCompetencies = async () => {
    setLoading(true);
    // Placeholder data without backend calls
    const userCompetencies = ['Communication Skills', 'Problem-Solving', 'Teamwork'];

    const placeholderCourses = [
      {
        title: 'Effective Communication: Mastering the Art',
        platform: 'Udemy',
        link: '#',
      },
      {
        title: 'Communication Skills for the Workplace',
        platform: 'Coursera',
        link: '#',
      },
    ];

    const competenciesData = userCompetencies.map((comp) => ({
      name: comp,
      courses: placeholderCourses,
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