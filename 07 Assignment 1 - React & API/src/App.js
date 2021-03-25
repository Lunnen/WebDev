import React, { useEffect, useState } from "react";
import PokeBox from "./PokeBox";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [nextLoad, setnextLoad] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=100" // Contains name and url
  );

  const getPokemons = async () => {
    const response = await fetch(nextLoad);
    const data = await response.json();

    setnextLoad(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}` // Contains all info about specific Pokemon
        );
        const data = await res.json();

        setAllPokemons((currentList) => [
          ...currentList.sort((a, b) => a.id - b.id),
          data,
        ]);
        console.log(allPokemons);
        console.log(allPokemons);
      });
    }
    createPokemonObject(data.results);
    allPokemons.sort((a, b) => a.id - b.id);
  };

  useEffect(() => {
    getPokemons();
  }, []); //Upon loading the page, get Pokemons

  function handleRemove(inputID) {
    const newList = allPokemons.filter((item) => item.id !== inputID);
    setAllPokemons(newList);
  }

  function updChecked(inputID) {
    /*
    1. Find the right Pokemon, by using inputID
    2. Get the values of the Pokemon at the index.
    3. Create a 'Ghost' variable .checked that's true.
    4. Set the new value to setAllPokemons, 
        by splicing index before and after foundPokemon.
    */

    const foundIndex = allPokemons.findIndex(
      (pokemon) => pokemon.id === inputID
    );
    const foundPokemon = allPokemons[foundIndex];
    foundPokemon.checked = true;

    setAllPokemons((pokemons) => [
      ...pokemons.slice(0, foundIndex),
      foundPokemon,
      ...pokemons.slice(foundIndex + 1),
    ]);
  }

  return (
    <div className="pokemon-container">
      <div className="all-container">
        {allPokemons.map((Stats, index) => (
          <PokeBox
            key={index}
            updChecked={updChecked}
            checked={Stats.checked}
            id={Stats.id}
            image={Stats.sprites.front_shiny}
            name={Stats.name}
            handleRemove={() => handleRemove(Stats.id)}
            type={Stats.types.map((type) => {
              return (
                <ul
                  key={index + type.type.name}
                  className={type.type.name + " typeBox"}
                >
                  {type.type.name}
                </ul>
              );
            })}
            weight={Stats.weight}
            index={index}
            height={Stats.height}
            ability={Stats.abilities.map((abilities) => {
              return (
                <ul
                  key={index + abilities.ability.name}
                  className={abilities.ability.name + " abilityBox statBox"}
                >
                  {abilities.ability.name}
                </ul>
              );
            })}
            xp={Stats.base_experience}
            stat={Stats.stats.map((prop) => {
              return (
                <ul
                  key={index + prop.stat.name}
                  className={prop.stat.name + " statBox"}
                >
                  {prop.stat.name + " " + prop.base_stat}
                </ul>
              );
            })}
          />
        ))}
      </div>
      <button className="Show-more" onClick={() => getPokemons()}>
        Show more Pokemons
      </button>
    </div>
  );
};

export default App;
