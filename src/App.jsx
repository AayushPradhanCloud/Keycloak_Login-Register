import keycloak from "./keycloak";
import Dashboard from "./Dashboard";

function App() {
  const authenticated = keycloak.authenticated;

  if (!authenticated) return <div>Loading...</div>;

  return <Dashboard />;
}

export default App;
