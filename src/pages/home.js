import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from '../App';

import Token from '../config/token';

const Home = ({ history }) => {

  const { artistsInfo, searchData } = useContext(SearchContext);

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
    const res = await fetch(`https://api.spotify.com/v1/search?q=${searchText}&type=artist&limit=6`, {
      headers: myHeaders
    });

    const data = await res.json();
    setArtists(data.artists.items);
    // console.log(data.artists.items);
    history.push('/artists');
  };

  useEffect(() => {
    if (artists !== []) {
      artistsInfo(artists);
      console.log(artists);
    }
  }, [artists]);

  return (
    <>
      <h1>home</h1>
      <input type="text" onChange={handleSearchTextChange} />
      <button onClick={handleSearchClick}>search</button>
    </>
  )
}

export default Home;