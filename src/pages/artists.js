import React from 'react';

import Card from '../components/card';

const Artists = ({ location }) => {

  const { data } = location;


  return (
    <section>
      {data.map((data, index) => <Card key={index} artist={data} />)}
    </section>)


}

export default Artists;