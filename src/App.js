import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Album from './pages/album';
import Artist from './pages/artist';
import Home from './pages/home';
import Artists from './pages/artists';

const App = () => {

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/results" component={Artists} />
          <Route path="/artist" component={Artist} />
          <Route path="/album" component={Album} />
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
