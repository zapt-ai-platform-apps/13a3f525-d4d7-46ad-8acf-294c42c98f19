import Header from '../components/Header';
import { Show } from 'solid-js';
import { A } from '@solidjs/router';

function HomePage(props) {
  const { user, handleSignOut } = props;

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
          <Show when={!user()}>
            <p class="mt-6 text-lg">
              Please{' '}
              <A href="/login" class="text-yellow-300 hover:underline cursor-pointer">
                sign in
              </A>{' '}
              to get started.
            </p>
          </Show>
        </div>
      </main>
    </div>
  );
}

export default HomePage;