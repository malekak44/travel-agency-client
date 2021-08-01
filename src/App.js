import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Home from './pages/Home';
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/destinations">
          <Destinations />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route path="/admin/:action">
          <Admin />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;