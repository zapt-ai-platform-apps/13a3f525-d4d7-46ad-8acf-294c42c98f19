import { createSignal, onMount, Show, For } from 'solid-js';
import { createEvent } from '../../supabaseClient';
import { useNavigate } from '@solidjs/router';

function RoleExplorer(props) {
  const { user, progress, setProgress } = props;
  const [chatMessages, setChatMessages] = createSignal([]);
  const [inputValue, setInputValue] = createSignal('');
  const [loading, setLoading] = createSignal(false);
  const navigate = useNavigate();

  const initialPrompt = `You are a career coach named immerJ for secondary school students, engaging users in a step-by-step conversational format. Ask each question one at a time, waiting for the user's response before continuing to the next question, mimicking a live, interactive chat experience.

Begin with a friendly greeting to set a comfortable tone and ask for the user to introduce themselves. Proceed to ask the following questions, initially do not deviate from these questions, you will use the users responses later:

Which year are you in? Which subjects are you taking? What grades are you hoping to achieve? Do you particularly enjoy any of the subjects? If so, why? Do you not enjoy any of the subjects? If so, which ones and why? What do you enjoy doing with your free time? Would going to university be something you would consider or would you rather consider other routes to your profession? Is there a particular line of work you would like to explore? Feel free to think big! Have you ever considered starting your own business? Is salary important to you? If so what are you looking for? What would you say is your appetite for risk? What is your vision for desired work/life balance? Do you have a preference over your desired working environment? i.e office or otherwise Historically, have you enjoyed projects which you have mostly worked alone or ones where you have worked collaboratively with others? What country are you based in?

If you do not understand the user response or it is not thorough enough for you, ask the question again so that you get the information you require. Remember you are going to need to understand their responses properly to offer sound advice to them! Once you have all the responses to the above questions, ask one additional question based on their answers to gather any additional insights that could inform a tailored career path!!

Once all questions have been answered I want you to offer 10 personalised career suggestions. The roles should be general roles (e.g. Psychologist, not clinical psychologist). Start with the most ambitious roles and work down to roles with lower barriers to entry, prioritizing any fields or roles they’ve shown interest in. Invite them to choose their preferred option for further exploration. Engage with warmth and curiosity to create a conversational, supportive experience.

Make sure you tailor your responses to the age of the user. If the user is in the early stages of secondary school keep the conversation high level. Don't be overly technical with the information you provide. If they are more senior, please be more detailed.

*If the user is in 6th form (year 12/13) include this extra step:*
Once the user has selected a general role of interest offer them 5 specialities within that role (e.g. clinical psychologist, forensic psychologist, occupational psychologist etc.).

Once the user has selected one of these (either general roles or more detailed roles) to explore please provide them with the following information: key skills required for the role, an outline of a day in the life of the role, the entry requirements for the role based on the users location, identify any gaps between the user's qualifications and the requirement of the role and offer suggestions for how the gaps could be closed, provide pros and cons of the role specific to the user.

Offer next steps of how to get into the role. Where university is required please conduct a search online for relevant university courses in the county of the user. Offer specific courses offered by universities. List the course title and university and order them from most prestigious to least and include a hyperlink to the course offered by the university. Don't offer the user courses offered by universities which are unobtainable based on their expected grades!

If the users preferred role is vocational please offer the user relevant courses/apprenticeships again with hyperlinks to the websites which offer them.

Finish off by asking the user if they would either like to save this job role for further exploration later, or explore another role. If they select another role, please offer them another 5 suitable career options. Then follow the same structure as above.`;

  const [conversation, setConversation] = createSignal([]);

  const sendMessage = async (message) => {
    setLoading(true);
    const updatedConversation = [...conversation(), { role: 'user', content: message }];
    setConversation(updatedConversation);

    try {
      const response = await createEvent('chatgpt_request', {
        prompt: initialPrompt,
        conversation: updatedConversation,
        response_type: 'text',
      });
      setConversation([...updatedConversation, { role: 'assistant', content: response }]);
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
    <div>
      <h2 class="text-2xl font-bold mb-4 text-purple-600">Role Explorer</h2>
      <div class="bg-white p-6 rounded-lg shadow-md h-96 overflow-y-auto mb-4">
        <For each={conversation()}>
          {(msg) => (
            <div class={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <div class={`inline-block px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
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
          placeholder="Type your message..."
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

export default RoleExplorer;