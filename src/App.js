import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Album from './pages/album';
import Artist from './pages/artist';
import Artists from './pages/artists';
import Home from './pages/home';

export const SearchContext = createContext(null);

const App = () => {

  const [searchData, setSearchData] = useState([]);

  const artistsInfo = (artistsArray) => { setSearchData(artistsArray) };


  return (
    <React.Fragment>
      <SearchContext.Provider value={{ searchData, artistsInfo }}>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/results" component={Artists} />
            <Route path="/artist" component={Artist} />
            <Route path="/album" component={Album} />
            <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          </Switch>
        </Router>
      </SearchContext.Provider>
    </React.Fragment>
  )
}

export default App;
