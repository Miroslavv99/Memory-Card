import { useState, useEffect } from "react";
import { getPokemons } from "./api/Pokemon";
import { blender } from "./utils/Blender";
import { GameDashboard } from "./modules/GameDashboard";
import { PokemonCard } from "./modules/PokemonCard";

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
        {data.length === 0 ? (
          "Loading..."
        ) : (
          <PokemonCard pokemons={data} clickHandler={clickHandler} />
        )}
      </div>
    </>
  );
}

export default PokemonContainer;
