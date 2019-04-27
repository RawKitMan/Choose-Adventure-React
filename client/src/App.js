import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./pages/Start";
import Adventure from "./pages/Adventure";
import NoMatch from "./pages/NoMatch";
import './App.css';

function App() {


  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Start />}
        />
        <Route
          exact
          path="/adventure"
          render={() => <Adventure />}
        />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )

}

export default App;
