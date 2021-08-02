import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
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
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/dashboard/:action">
          <Dashboard />
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