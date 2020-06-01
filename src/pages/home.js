import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';

import Token from '../config/token';

const Home = ({ history }) => {

  const [artists, setArtists] = useState([]);
  const [searchText, setSearchText] = useState('');

  const Auth = Token.Auth;

  const myHeaders = {
    'Authorization': `Bearer ${Auth}`,
    'Content-Type': 'application/json'
  }

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = async () => {
    await fetch(`https://api.spotify.com/v1/search?q=${searchText}&type=artist&limit=6`, {
      headers: myHeaders
    }).then(res => res.json())
      .then(data => {
        setArtists(data.artists.items);
        console.log(data.artists.items);
      }).then(() => sendData())
      .catch(err => console.log(err));
  };

  const sendData = () => {
    history.push({
      pathname: '/artists',
      data: artists
    });
  }

  return (
    <>
      <h1>home</h1>
      <input type="text" onChange={handleSearchTextChange} />
      <button onClick={handleSearchClick}>search</button>
    </>
  )
}

export default withRouter(Home);