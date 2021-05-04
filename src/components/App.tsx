import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
