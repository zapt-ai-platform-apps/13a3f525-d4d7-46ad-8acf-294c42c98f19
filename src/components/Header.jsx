import { A } from '@solidjs/router';

function Header(props) {
  const { user, handleSignOut } = props;

  return (
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <img
            src="https://otebnzqfzytqyyjdfhzr.supabase.co/storage/v1/render/image/public/icons/13a3f525-d4d7-46ad-8acf-294c42c98f19/858a9c83-cd1e-43c7-abf5-ced64b8bb8c4.png?width=48&height=48"
            alt="immerJ Logo"
            class="w-12 h-12"
          />
          <h1 class="text-2xl font-bold text-purple-600">immerJ</h1>
        </div>
        <nav class="space-x-6 flex items-center">
          {user() && (
            <>
              <A
                href="/develop-my-vision"
                class="text-purple-600 hover:underline cursor-pointer"
              >
                Develop My Vision
              </A>
              <A
                href="/close-my-skill-gaps"
                class="text-purple-600 hover:underline cursor-pointer"
              >
                Close My Skill Gaps
              </A>
              <A
                href="/application-development"
                class="text-purple-600 hover:underline cursor-pointer"
              >
                Application Development
              </A>
              <A
                href="/my-profile"
                class="text-purple-600 hover:underline cursor-pointer"
              >
                My Profile
              </A>
              <button
                class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                onClick={handleSignOut}
              >
                Log Out
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;