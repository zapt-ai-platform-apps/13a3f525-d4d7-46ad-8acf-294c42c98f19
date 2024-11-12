import Header from '../components/Header';
import { createSignal, For } from 'solid-js';

function ApplicationDevelopment(props) {
  const { user, handleSignOut } = props;
  const [jobListings, setJobListings] = createSignal([
    {
      title: 'Junior Software Developer',
      company: 'Tech Corp',
      link: '#',
    },
    {
      title: 'Business Analyst',
      company: 'Business Solutions Inc.',
      link: '#',
    },
    // Add more job listings as placeholders
  ]);

  return (
    <div class="h-full flex flex-col">
      <Header user={user} handleSignOut={handleSignOut} />
      <main class="flex-grow container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-6 text-purple-600">Application Development</h2>
        <For each={jobListings()}>
          {(job) => (
            <div class="mb-6">
              <h3 class="text-2xl font-semibold text-purple-600">{job.title}</h3>
              <p class="text-gray-700 mb-2">{job.company}</p>
              <a href={job.link} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                View Job Posting
              </a>
            </div>
          )}
        </For>
      </main>
    </div>
  );
}

export default ApplicationDevelopment;