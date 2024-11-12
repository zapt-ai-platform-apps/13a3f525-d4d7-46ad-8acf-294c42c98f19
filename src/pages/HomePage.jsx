import Header from '../components/Header';
import { Show } from 'solid-js';
import { useNavigate } from '@solidjs/router';

function HomePage(props) {
  const { user } = props;
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/develop-my-vision');
  };

  return (
    <div class="h-full flex flex-col">
      <Header />
      <main class="flex-grow container mx-auto px-4 py-8">
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-4 text-purple-600">Welcome to immerJ</h2>
          <p class="text-lg text-gray-700 mb-8">
            A career development platform leveraging AI to take users from role conception to working their dream job through an immersive & engaging journey.
          </p>
          <Show when={user}>
            <button
              class="bg-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-md cursor-pointer hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </Show>
          <Show when={!user}>
            <p class="text-gray-700">
              Please <a href="/login" class="text-blue-500 hover:underline">sign in</a> to get started.
            </p>
          </Show>
        </div>
      </main>
    </div>
  );
}

export default HomePage;