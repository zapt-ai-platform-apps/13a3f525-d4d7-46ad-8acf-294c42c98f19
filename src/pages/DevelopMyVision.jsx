import Header from '../components/Header';
import { Routes, Route, useNavigate } from '@solidjs/router';
import RoleExplorer from './DevelopMyVision/RoleExplorer';
import FindMyWorkEnvironment from './DevelopMyVision/FindMyWorkEnvironment';
import IdentifyMySkillGaps from './DevelopMyVision/IdentifyMySkillGaps';
import ImmersiveDayInTheLife from './DevelopMyVision/ImmersiveDayInTheLife';

function DevelopMyVision(props) {
  const { user, handleSignOut, progress, setProgress } = props;
  const navigate = useNavigate();

  onMount(() => {
    if (!user()) {
      navigate('/login');
    }
  });

  return (
    <div class="min-h-screen flex flex-col">
      <Header user={user} handleSignOut={handleSignOut} />
      <main class="flex-grow container mx-auto px-4 py-8 h-full">
        <h2 class="text-3xl font-bold mb-6 text-purple-600">Develop My Vision</h2>
        <Routes>
          <Route path="/" element={<ModuleList />} />
          <Route
            path="/role-explorer"
            element={<RoleExplorer user={user} progress={progress} setProgress={setProgress} />}
          />
          <Route
            path="/find-my-work-environment"
            element={<FindMyWorkEnvironment user={user} progress={progress} setProgress={setProgress} />}
          />
          <Route
            path="/identify-my-skill-gaps"
            element={<IdentifyMySkillGaps user={user} progress={progress} setProgress={setProgress} />}
          />
          <Route
            path="/immersive-day-in-the-life"
            element={<ImmersiveDayInTheLife user={user} progress={progress} setProgress={setProgress} />}
          />
        </Routes>
      </main>
    </div>
  );
}

function ModuleList() {
  const navigate = useNavigate();

  const handleModuleClick = (path) => {
    navigate(`/develop-my-vision/${path}`);
  };

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-purple-50"
        onClick={() => handleModuleClick('role-explorer')}
      >
        <h3 class="text-2xl font-bold mb-2 text-purple-600">Role Explorer</h3>
        <p class="text-gray-700">Discover roles that align with your interests and aspirations.</p>
      </div>
      <div
        class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-purple-50"
        onClick={() => handleModuleClick('find-my-work-environment')}
      >
        <h3 class="text-2xl font-bold mb-2 text-purple-600">Find My Work Environment</h3>
        <p class="text-gray-700">Explore factors that influence your ideal work environment.</p>
      </div>
      <div
        class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-purple-50"
        onClick={() => handleModuleClick('identify-my-skill-gaps')}
      >
        <h3 class="text-2xl font-bold mb-2 text-purple-600">Identify My Skill Gaps</h3>
        <p class="text-gray-700">Identify skills you need to develop for your desired role.</p>
      </div>
      <div
        class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-purple-50"
        onClick={() => handleModuleClick('immersive-day-in-the-life')}
      >
        <h3 class="text-2xl font-bold mb-2 text-purple-600">Immersive Day-in-the-life</h3>
        <p class="text-gray-700">Experience a day in the life of your preferred role.</p>
      </div>
    </div>
  );
}

export default DevelopMyVision;