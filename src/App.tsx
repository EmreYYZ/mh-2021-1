import { Game } from "./components/Game";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-full bg-gray-900 App">
        <Layout>
          <LandingPage />
          <Game />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
