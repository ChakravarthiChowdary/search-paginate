import React from "react";
import { Switch, Route } from "react-router";

import "./App.css";
import Main from "./components/Main";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/:id" component={PostDetails} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default App;
