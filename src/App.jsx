import { createSignal, onMount, createEffect, onCleanup } from 'solid-js';
import { supabase } from './supabaseClient';
import { Auth } from '@supabase/auth-ui-solid';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Routes, Route, useNavigate } from '@solidjs/router';
import HomePage from './pages/HomePage';
import DevelopMyVision from './pages/DevelopMyVision';
import CloseMySkillGaps from './pages/CloseMySkillGaps';
import ApplicationDevelopment from './pages/ApplicationDevelopment';
import './App.css';

function App() {
  const [user, setUser] = createSignal(null);
  const navigate = useNavigate();

  const checkUserSignedIn = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
    } else {
      navigate('/login');
    }
  };

  onMount(checkUserSignedIn);

  createEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        setUser(null);
        navigate('/login');
      }
    });

    onCleanup(() => {
      subscription.unsubscribe();
    });
  });

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/login');
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <Routes>
        <Route path="/" element={<HomePage user={user} handleSignOut={handleSignOut} />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/develop-my-vision/*" element={<DevelopMyVision user={user} handleSignOut={handleSignOut} />} />
        <Route path="/close-my-skill-gaps" element={<CloseMySkillGaps user={user} handleSignOut={handleSignOut} />} />
        <Route path="/application-development" element={<ApplicationDevelopment user={user} handleSignOut={handleSignOut} />} />
      </Routes>
    </div>
  );
}

function AuthPage() {
  return (
    <div class="flex items-center justify-center min-h-screen">
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
    </div>
  );
}

export default App;