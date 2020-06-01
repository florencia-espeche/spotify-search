import React, { useState } from "react";

const Card = ({ artist }) => {


  return (
    <div>
      <img src={artist.images[2].url} />
      <h3>{artist.name}</h3>
    </div>
  )
}

export default Card;