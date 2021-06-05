import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [cards, setCards]=useState([]);
  const [currentSearch, setCurrentSearch]=useState("");

  useEffect(()=>{
    fetch(`http://localhost:3001/pokemon`)
    .then(r=>r.json())
    .then(setCards)
  }, [])

  const pokemonDisplayed= cards
    .filter((poke)=> poke.name.toLowerCase().includes(currentSearch.toLowerCase()));

  function addPokemon (newPokemon) {
    const updatePokemon=([...cards,newPokemon])
    return setCards(updatePokemon);
  }
  
  function deletedPokemon(id){
    const updatedPokemons=cards.filter((pokemon)=>pokemon.id!==id)
    return setCards(updatedPokemons)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon}/>
      <br />
      <Search setCurrentSearch={setCurrentSearch} currentSearch={currentSearch}/>
      <br />
      <PokemonCollection pokemon={pokemonDisplayed} onDeletePokemon={deletedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
