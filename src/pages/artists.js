import React, { useContext } from 'react';
import { SearchContext } from '../App';

import Card from '../components/card';

const Artists = ({ history }) => {

  const { artistsInfo, searchData } = useContext(SearchContext);


  return (
    <section>
      <h1>Artists</h1>
      {searchData.map((data, index) => <Card key={index} artist={data} />)}
    </section>)


}

export default Artists;