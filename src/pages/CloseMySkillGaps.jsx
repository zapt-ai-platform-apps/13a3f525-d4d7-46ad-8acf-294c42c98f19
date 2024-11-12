import Header from '../components/Header';
import { createSignal, Show, For } from 'solid-js';

function CloseMySkillGaps(props) {
  const { user, handleSignOut } = props;
  const [competencies, setCompetencies] = createSignal([
    {
      name: 'Communication Skills',
      courses: [
        {
          title: 'Effective Communication 101',
          platform: 'Udemy',
          link: '#',
        },
        {
          title: 'Mastering Communication',
          platform: 'Coursera',
          link: '#',
        },
      ],
    },
    {
      name: 'Problem-Solving',
      courses: [
        {
          title: 'Problem-Solving Techniques',
          platform: 'Udemy',
          link: '#',
        },
        {
          title: 'Think Like a Problem Solver',
          platform: 'Coursera',
          link: '#',
        },
      ],
    },
    // Add more competencies and courses as placeholders
  ]);

  return (
    <div class="h-full flex flex-col">
      <Header user={user} handleSignOut={handleSignOut} />
      <main class="flex-grow container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-6 text-purple-600">Close My Skill Gaps</h2>
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
      </main>
    </div>
  );
}

export default CloseMySkillGaps;