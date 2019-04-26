import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Start from "./pages/Start";
import NoMatch from "./pages/NoMatch";
import './App.css';

function App() {

  
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render = {() => <Start />}
          />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  
}

export default App;
