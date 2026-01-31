import { useState, useEffect } from "react";
import { getPokemons } from "./api/Pokemon";
import { blender } from "./utils/Blender";
import { GameDashboard } from "./modules/GameDashboard";

function PokemonContainer() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  const pokemonIds = [3, 6, 9, 1, 26, 34, 38, 24, 76, 68];

  let pokemons = [...data];

  function clickHandler(id) {
    if (!clicked.includes(id)) {
      setClicked([...clicked, id]);
      setScore(score + 1);
      setData(blender(pokemons));
      console.log(clicked);
    } else {
      setScore(0);
      setClicked([]);
      score > bestScore ? setBestScore(score) : null;
    }
  }

  useEffect(() => {
    async function fetchData() {
      setData(await getPokemons(pokemonIds));
    }

    fetchData();
  }, []);

  useEffect(() => {
    blender(pokemonIds);
  }, []);

  console.log(data);

  return (
    <>
      <GameDashboard score={score} bestScore={bestScore} />
      <div className="pokemons-container">
        {data.length === 0
          ? "Loading..."
          : data.map((pokemon) => {
              return (
                <div
                  key={pokemon.id}
                  onClick={() => clickHandler(pokemon.id)}
                  className="card"
                >
                  <div className="image-container">
                    <img
                      className="pokemon"
                      src={pokemon.sprites.other.dream_world.front_default}
                      alt={pokemon.name}
                    />
                  </div>
                  <div className="name-container">{pokemon.name}</div>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default PokemonContainer;
