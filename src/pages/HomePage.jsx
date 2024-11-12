import Header from '../components/Header';
import { createSignal, Show } from 'solid-js';
import { supabase } from '../supabaseClient';
import { Auth } from '@supabase/auth-ui-solid';
import { ThemeSupa } from '@supabase/auth-ui-shared';

function HomePage(props) {
  const { user, handleSignOut } = props;

  const [showAuth, setShowAuth] = createSignal(false);

  const handleShowAuth = () => {
    setShowAuth(true);
  };

  return (
    <div class="min-h-screen flex flex-col">
      <Header user={user} handleSignOut={handleSignOut} />
      <main class="relative flex-grow">
        <div class="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxBbiUyMGluc3BpcmluZyUyMGxhbmRzY2FwZSUyMHJlcHJlc2VudGluZyUyMGVuZGxlc3MlMjBjYXJlZXIlMjBvcHBvcnR1bml0aWVzfGVufDB8fHx8MTczMTQ0OTA3Mnww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Background Image"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h2 class="text-5xl font-bold mb-6">Immerse in Your Dream Career</h2>
          <p class="text-xl mb-8 max-w-2xl">
            A career development platform leveraging AI to take you from role conception to working your dream job through an immersive &amp; engaging journey.
          </p>
          <Show when={!user() && !showAuth()}>
            <button
              class="mt-6 text-lg bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded cursor-pointer"
              onClick={handleShowAuth}
            >
              Sign In
            </button>
          </Show>
          <Show when={showAuth()}>
            <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
              <h2 class="text-3xl font-bold mb-6 text-center text-purple-600">Sign in with ZAPT</h2>
              <a
                href="https://www.zapt.ai"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline mb-6 block text-center"
              >
                Learn more about ZAPT
              </a>
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['google', 'facebook', 'apple']}
                magicLink={true}
                showLinks={false}
                view="magic_link"
              />
            </div>
          </Show>
          <Show when={user()}>
            <p class="mt-6 text-lg">
              Welcome back, {user().email}!{' '}
              <a href="/develop-my-vision" class="text-yellow-300 hover:underline cursor-pointer">
                Go to Dashboard
              </a>
            </p>
          </Show>
        </div>
      </main>
    </div>
  );
}

export default HomePage;