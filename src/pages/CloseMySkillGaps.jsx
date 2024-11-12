import Header from '../components/Header';
import { createSignal, onMount, Show, For } from 'solid-js';
import { createEvent } from '../supabaseClient';

function CloseMySkillGaps(props) {
  const { user } = props;
  const [competencies, setCompetencies] = createSignal([]);
  const [loading, setLoading] = createSignal(false);

  onMount(async () => {
    setLoading(true);
    try {
      const result = await createEvent('chatgpt_request', {
        prompt: 'Provide a list of competencies required for the user\'s selected role, along with relevant courses from Udemy and Coursera to help develop these skills. Format the response in JSON with the structure: { "competencies": [ { "name": "Competency Name", "courses": [ { "title": "Course Title", "platform": "Udemy or Coursera", "link": "Course Link" } ] } ] }',
        response_type: 'json'
      });
      setCompetencies(result.competencies);
    } catch (error) {
      console.error('Error fetching competencies:', error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div class="h-full flex flex-col">
      <Header />
      <main class="flex-grow container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-6 text-purple-600">Close My Skill Gaps</h2>
        <Show when={loading()}>
          <p class="text-center text-gray-700">Loading competencies...</p>
        </Show>
        <Show when={!loading()}>
          <For each={competencies()}>
            {(competency) => (
              <div class="mb-6">
                <h3 class="text-2xl font-semibold mb-2 text-purple-600">{competency.name}</h3>
                <ul class="list-disc list-inside">
                  <For each={competency.courses}>
                    {(course) => (
                      <li>
                        <a href={course.link} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                          {course.title} - {course.platform}
                        </a>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            )}
          </For>
        </Show>
      </main>
    </div>
  );
}

export default CloseMySkillGaps;