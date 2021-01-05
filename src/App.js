import { useTransition, animated } from "react-spring";
import { Route, Switch, useLocation } from "react-router-dom";

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
      transform: "translateX(100%)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    leave: {
      opacity: 0,
      transform: "translateX(-100%)",
    },
  });

  return (
    <>
      <Header />

      <main
        className="container"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "90vh",
          margin: "30px 25px 0px 25px",
        }}
      >
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <div style={{ position: "absolute", width: "100%" }}>
              <Switch location={item}>
                <Route exact path="/" component={About} />
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
