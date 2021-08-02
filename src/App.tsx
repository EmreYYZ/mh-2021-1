import { Game } from "./components/Game";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="bg-gray-900 App">
        <Layout>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/play" exact component={Game} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
