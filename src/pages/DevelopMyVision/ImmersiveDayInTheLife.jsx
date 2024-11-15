import { createSignal, onMount, Show, For } from 'solid-js';
import { createEvent } from '../../supabaseClient';
import { SolidMarkdown } from 'solid-markdown';

function ImmersiveDayInTheLife(props) {
  const { user, progress, setProgress } = props;
  const [inputValue, setInputValue] = createSignal('');
  const [loading, setLoading] = createSignal(false);
  const [chatHistory, setChatHistory] = createSignal([]);

  const roleTitle = progress().preferredRoleTitle || 'your selected role';

  const initialPrompt = `You are an AI career coach named immerJ, providing the user with an immersive, descriptive experience of a day in the life of a ${roleTitle}. Guide the user through interactive tasks during the day simulation. After each activity, provide feedback focusing on areas for improvement. At the end, offer an overall review of the user's performance. Engage interactively by asking questions one at a time and waiting for the user's response before proceeding.

At the end, please provide a list of focus competencies for the user to develop, in valid JSON format as an array:

{
  "focusCompetencies": ["competency1", "competency2", ...]
}

Please only provide the JSON object and nothing else.`;

  const buildPrompt = () => {
    let prompt = initialPrompt + '\n\n';
    chatHistory().forEach((msg) => {
      if (msg.role === 'user') {
        prompt += `User: ${msg.content}\n`;
      } else if (msg.role === 'assistant') {
        prompt += `Assistant: ${msg.content}\n`;
      }
    });
    return prompt;
  };

  const sendMessage = async (message) => {
    setLoading(true);
    const updatedChatHistory = [...chatHistory(), { role: 'user', content: message }];
    setChatHistory(updatedChatHistory);

    try {
      const prompt = buildPrompt();
      const response = await createEvent('chatgpt_request', {
        prompt,
        response_type: 'text',
      });
      setChatHistory([...updatedChatHistory, { role: 'assistant', content: response }]);
      extractData(response);
    } catch (error) {
      console.error('Error during ChatGPT request:', error);
    } finally {
      setLoading(false);
    }
  };

  function extractData(assistantMessage) {
    // Try to parse JSON from the assistant's message
    try {
      const jsonStart = assistantMessage.indexOf('{');
      if (jsonStart !== -1) {
        const jsonString = assistantMessage.slice(jsonStart);
        const data = JSON.parse(jsonString);
        setProgress((prev) => ({
          ...prev,
          focusCompetencies: data.focusCompetencies || prev.focusCompetencies,
        }));
      }
    } catch (error) {
      console.error('Failed to parse JSON:', error);
    }
  }

  onMount(async () => {
    if (!progress().preferredRoleTitle) {
      alert('Please complete the Role Explorer module first.');
      return;
    }
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
      <h2 class="text-2xl font-bold mb-4 text-purple-600">Immersive Day-in-the-life</h2>
      <div class="bg-white p-6 rounded-lg shadow-md flex-grow overflow-y-auto mb-4">
        <For each={chatHistory()}>
          {(msg) => (
            <div class={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <div
                class={`inline-block px-4 py-2 rounded-lg ${
                  msg.role === 'user' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.role === 'assistant' ? (
                  <SolidMarkdown>{msg.content}</SolidMarkdown>
                ) : (
                  msg.content
                )}
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

export default ImmersiveDayInTheLife;