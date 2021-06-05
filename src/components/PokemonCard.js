import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon, onDeletePokemon}) {

   const { id , name, hp, sprites} = pokemon

   const [front, setFront]=useState(true);

   function handleClick (){
     setFront((front)=> !front)
   }

   function handleDelete(){
     fetch(`http://localhost:3001/pokemon/${id}`, {method:"DELETE"})
      onDeletePokemon(id)
   }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick}>
          <img src={front ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
          <br/>
          <button onClick={handleDelete}>Destroy👊</button>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
