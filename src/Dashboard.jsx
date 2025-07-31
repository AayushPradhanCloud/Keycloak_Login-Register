import keycloak from "./keycloak";

export default function Dashboard() {
  const tokenParsed = keycloak.tokenParsed;
  const username = tokenParsed?.preferred_username || "Unknown";
  const usertype = tokenParsed?.usertype;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow rounded text-center">
        <h2 className="text-xl font-bold mb-4">Welcome, {username}</h2>
        <p className="text-sm text-gray-700 mb-2">
          User Type: <strong>{usertype}</strong>
        </p>
        <button
          onClick={() => keycloak.logout()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
