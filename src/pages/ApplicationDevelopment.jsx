import Header from '../components/Header';
import { createSignal, For, onMount } from 'solid-js';

function ApplicationDevelopment(props) {
  const { user, handleSignOut } = props;
  const [jobListings, setJobListings] = createSignal([]);

  const fetchJobListings = async () => {
    // You can replace this placeholder with actual API calls to job search platforms
    setJobListings([
      {
        title: 'Junior Software Developer',
        company: 'Tech Corp',
        link: 'https://www.linkedin.com/jobs/view/123456789',
      },
      {
        title: 'Business Analyst',
        company: 'Business Solutions Inc.',
        link: 'https://www.linkedin.com/jobs/view/987654321',
      },
      // Add more job listings as placeholders
    ]);
  };

  onMount(fetchJobListings);

  return (
    <div class="h-full flex flex-col">
      <Header user={user} handleSignOut={handleSignOut} />
      <main class="flex-grow container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-6 text-purple-600">Application Development</h2>
        <h3 class="text-2xl font-semibold mb-4 text-purple-600">Apply for Roles</h3>
        <For each={jobListings()}>
          {(job) => (
            <div class="mb-6">
              <h3 class="text-xl font-semibold text-purple-600">{job.title}</h3>
              <p class="text-gray-700 mb-2">{job.company}</p>
              <a href={job.link} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline cursor-pointer">
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