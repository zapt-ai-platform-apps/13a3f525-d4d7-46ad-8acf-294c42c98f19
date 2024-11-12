import { A } from '@solidjs/router';

function Header(props) {
  const { user, handleSignOut } = props;

  return (
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <img
            src="https://otebnzqfzytqyyjdfhzr.supabase.co/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48"
            alt="immerJ Logo"
            class="w-12 h-12"
          />
          <h1 class="text-2xl font-bold text-purple-600">immerJ</h1>
        </div>
        <nav class="space-x-6 flex items-center">
          <A href="/develop-my-vision" class="text-gray-700 hover:text-purple-600 cursor-pointer">
            Develop My Vision
          </A>
          <A href="/close-my-skill-gaps" class="text-gray-700 hover:text-purple-600 cursor-pointer">
            Close My Skill Gaps
          </A>
          <A href="/application-development" class="text-gray-700 hover:text-purple-600 cursor-pointer">
            Application Development
          </A>
          {user && (
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={handleSignOut}
            >
              Log Out
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;