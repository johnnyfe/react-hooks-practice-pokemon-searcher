import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, onDeletePokemon}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((pokemon)=> <PokemonCard key={pokemon.id} pokemon={pokemon} onDeletePokemon={onDeletePokemon}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
