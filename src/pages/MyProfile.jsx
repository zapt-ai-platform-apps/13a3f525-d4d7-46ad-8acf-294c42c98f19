import Header from '../components/Header';

function MyProfile(props) {
  const { user, handleSignOut, progress } = props;

  const roleTitle =
    progress().detailedPreferredRoleTitle ||
    progress().preferredRoleTitle ||
    'Your Preferred Role';

  const formatSubjects = (subjects) => {
    return subjects
      .split(/[\s,]+/)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div class="h-full flex flex-col">
      <Header user={user} handleSignOut={handleSignOut} />
      <main class="flex-grow container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-6 text-purple-600">My Profile</h2>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-4 text-purple-600">{roleTitle}</h3>
          <ul class="space-y-2">
            <li>
              <strong>Academic Year:</strong> {progress().academicYear || 'Not set'}
            </li>
            <li>
              <strong>Subjects Taken:</strong>{' '}
              {progress().subjectsTaken ? formatSubjects(progress().subjectsTaken) : 'Not set'}
            </li>
            <li>
              <strong>Country:</strong> {progress().country || 'Not set'}
            </li>
            <li>
              <strong>Sector:</strong> {progress().sector || 'Not set'}
            </li>
            <li>
              <strong>Organisation Type:</strong> {progress().organisationType || 'Not set'}
            </li>
            <li>
              <strong>Focus Competencies:</strong>{' '}
              {progress().focusCompetencies.length > 0
                ? progress()
                    .focusCompetencies
                    .join(', ')
                : 'Not set'}
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default MyProfile;