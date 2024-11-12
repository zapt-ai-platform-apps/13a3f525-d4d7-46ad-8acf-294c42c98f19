import Header from '../components/Header';
import { createSignal, onMount, Show, For } from 'solid-js';
import { createEvent } from '../supabaseClient';

function ApplicationDevelopment(props) {
  const { user } = props;
  const [jobListings, setJobListings] = createSignal([]);
  const [loading, setLoading] = createSignal(false);

  onMount(async () => {
    setLoading(true);
    try {
      const result = await createEvent('chatgpt_request', {
        prompt: 'Search for suitable job roles based on the user\'s saved preferences. Provide a list of job titles with company names and links to the job postings. Format the response in JSON with the structure: { "jobs": [ { "title": "Job Title", "company": "Company Name", "link": "Job Link" } ] }',
        response_type: 'json'
      });
      setJobListings(result.jobs);
    } catch (error) {
      console.error('Error fetching job listings:', error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div class="h-full flex flex-col">
      <Header />
      <main class="flex-grow container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-6 text-purple-600">Application Development</h2>
        <Show when={loading()}>
          <p class="text-center text-gray-700">Loading job listings...</p>
        </Show>
        <Show when={!loading()}>
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
        </Show>
      </main>
    </div>
  );
}

export default ApplicationDevelopment;