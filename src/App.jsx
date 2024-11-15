import { createSignal, onMount, createEffect, onCleanup, Show } from 'solid-js';
import { supabase } from './supabaseClient';
import { Routes, Route, useNavigate, Navigate, useLocation } from '@solidjs/router';
import DevelopMyVision from './pages/DevelopMyVision';
import CloseMySkillGaps from './pages/CloseMySkillGaps';
import ApplicationDevelopment from './pages/ApplicationDevelopment';
import HomePage from './pages/HomePage';
import MyProfile from './pages/MyProfile';
import './App.css';

function App() {
  const [user, setUser] = createSignal(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [progress, setProgress] = createSignal({
    preferredRoleTitle: '',
    detailedPreferredRoleTitle: '',
    academicYear: '',
    subjectsTaken: '',
    country: '',
    sector: '',
    organisationType: '',
    focusCompetencies: [],
  });

  const checkUserSignedIn = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
    }
  };

  onMount(checkUserSignedIn);

  createEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        if (location.pathname === '/') {
          navigate('/develop-my-vision');
        }
      } else {
        setUser(null);
        navigate('/');
      }
    });

    onCleanup(() => {
      subscription.unsubscribe();
    });
  });

  // Fetch user progress when user is set
  createEffect(async () => {
    if (user()) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const response = await fetch('/api/getProgress', {
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setProgress(data);
          }
        } else {
          console.error('Error fetching progress:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    }
  });

  const saveProgress = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      await fetch('/api/saveProgress', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ progressData: progress() }),
      });
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  // Save progress when progress changes
  createEffect(() => {
    if (user()) {
      progress(); // Ensure reactivity
      saveProgress();
    }
  });

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/');
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <Routes>
        <Route
          path="/"
          element={<HomePage user={user} handleSignOut={handleSignOut} />}
        />
        <Route
          path="/develop-my-vision/*"
          element={
            <Show when={user()} fallback={<Navigate href="/" />}>
              <DevelopMyVision user={user} handleSignOut={handleSignOut} progress={progress} setProgress={setProgress} />
            </Show>
          }
        />
        <Route
          path="/close-my-skill-gaps"
          element={
            <Show when={user()} fallback={<Navigate href="/" />}>
              <CloseMySkillGaps user={user} handleSignOut={handleSignOut} progress={progress} />
            </Show>
          }
        />
        <Route
          path="/application-development"
          element={
            <Show when={user()} fallback={<Navigate href="/" />}>
              <ApplicationDevelopment user={user} handleSignOut={handleSignOut} progress={progress} />
            </Show>
          }
        />
        <Route
          path="/my-profile"
          element={
            <Show when={user()} fallback={<Navigate href="/" />}>
              <MyProfile user={user} handleSignOut={handleSignOut} progress={progress} />
            </Show>
          }
        />
      </Routes>
    </div>
  );
}

export default App;