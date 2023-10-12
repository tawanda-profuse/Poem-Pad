import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./partials/Nav";
import Footer from "./partials/Footer";
import Home from "./poems/Home";
import About from "./About";
import Create from "./poems/Create";
import NotFound from "./404";
import Details from "./poems/Details";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/poems">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/poems/:id">
          <Details />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
