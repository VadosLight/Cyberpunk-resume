import { useTransition, animated } from "react-spring";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import React from "react";
import Header from "./Menu/Header";

import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
    }, 
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    }

  });

  return (
    <>
      <Header />
      <main className="container" style={{position:"relative"}}>
        {transitions.map(({item, props, key}) => (
          <animated.div key={key} style={props}>
            <div style={{ position:"absolute", width:"100%"}}>
            <Switch location={item}>
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/skills" component={Skills} />
            </Switch>

            </div>
          </animated.div>
        ))}

      </main>
    </>
  );
}

export default App;
