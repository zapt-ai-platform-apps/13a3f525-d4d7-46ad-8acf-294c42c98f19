import { createSignal, onMount, Show, For } from 'solid-js';
import { createEvent } from '../../supabaseClient';

function FindMyWorkEnvironment(props) {
  const { user, progress, setProgress } = props;
  const [conversation, setConversation] = createSignal([]);
  const [inputValue, setInputValue] = createSignal('');
  const [loading, setLoading] = createSignal(false);

  const initialPrompt = `You are an AI career coach named immerJ, assisting the user in finding their ideal work environment. Engage the user by asking questions about their personal interests, work-life balance preferences, job security concerns, career growth ambitions, and desired work culture. Ask each question one at a time and wait for the user's response before proceeding. Once all information is gathered, summarize the findings and present potential jobs that match the user's preferences. Encourage the user to select one of the options for further exploration.`;

  const [chatHistory, setChatHistory] = createSignal([]);

  const sendMessage = async (message) => {
    setLoading(true);
    const updatedChatHistory = [...chatHistory(), { role: 'user', content: message }];
    setChatHistory(updatedChatHistory);

    try {
      const response = await createEvent('chatgpt_request', {
        prompt: initialPrompt,
        conversation: updatedChatHistory,
        response_type: 'text',
      });
      setChatHistory([...updatedChatHistory, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error during ChatGPT request:', error);
    } finally {
      setLoading(false);
    }
  };

  onMount(async () => {
    await sendMessage('');
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue().trim() === '') return;
    await sendMessage(inputValue());
    setInputValue('');
  };

  return (
    <div class="h-full flex flex-col">
      <h2 class="text-2xl font-bold mb-4 text-purple-600">Find My Work Environment</h2>
      <div class="bg-white p-6 rounded-lg shadow-md flex-grow overflow-y-auto mb-4">
        <For each={chatHistory()}>
          {(msg) => (
            <div class={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <div
                class={`inline-block px-4 py-2 rounded-lg ${
                  msg.role === 'user' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.content}
              </div>
            </div>
          )}
        </For>
        <Show when={loading()}>
          <div class="text-center">
            <span class="text-gray-500">Loading...</span>
          </div>
        </Show>
      </div>
      <form onSubmit={handleSubmit} class="flex">
        <input
          type="text"
          value={inputValue()}
          onInput={(e) => setInputValue(e.target.value)}
          class="flex-1 p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
          placeholder="Type your response..."
        />
        <button
          type="submit"
          class="bg-purple-500 text-white px-6 rounded-r-lg cursor-pointer hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
          disabled={loading()}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default FindMyWorkEnvironment;