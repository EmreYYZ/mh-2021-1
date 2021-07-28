import { Game } from "./components/Game";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <h1>Card Game, WAR</h1>
      <Layout>
        <LandingPage />
        <Game />
      </Layout>
    </div>
  );
}

export default App;
