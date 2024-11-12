import Header from '../components/Header';
import { Show } from 'solid-js';
import { A } from '@solidjs/router';

function HomePage(props) {
  const { user, handleSignOut } = props;

  return (
    <div class="h-full flex flex-col">
      <Header user={user} handleSignOut={handleSignOut} />
      <main class="flex-grow container mx-auto px-4 py-8">
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-4 text-purple-600">immerJ</h2>
          <p class="text-lg text-gray-700 mb-8">
            A career development platform leveraging AI to take users from role conception to working their dream job through an immersive &amp; engaging journey.
          </p>
          <nav class="space-x-6 flex justify-center mb-8">
            <A href="/develop-my-vision" class="text-gray-700 hover:text-purple-600 cursor-pointer">
              Develop My Vision
            </A>
            <A href="/close-my-skill-gaps" class="text-gray-700 hover:text-purple-600 cursor-pointer">
              Close My Skill Gaps
            </A>
            <A href="/application-development" class="text-gray-700 hover:text-purple-600 cursor-pointer">
              Application Development
            </A>
          </nav>
          <Show when={!user}>
            <p class="text-gray-700">
              Please <a href="/login" class="text-blue-500 hover:underline cursor-pointer">sign in</a> to get started.
            </p>
          </Show>
        </div>
      </main>
    </div>
  );
}

export default HomePage;