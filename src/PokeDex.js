// src/PokeDex.js
import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import useAxios from "./hooks/useAxios"; // Import the custom hook
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon] = useAxios("https://pokeapi.co/api/v2/pokemon/");

  const handleAddPokemon = (name) => {
    addPokemon(name); // Use addPokemon with the Pokemon name as the endpoint
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={handleAddPokemon} /> {/* Use handleAddPokemon */}
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(p => (
          <PokemonCard
            key={p.id}
            front={p.sprites.front_default}
            back={p.sprites.back_default}
            name={p.name}
            stats={p.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
