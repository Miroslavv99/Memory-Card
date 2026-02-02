export function PokemonCard({ pokemons, clickHandler }) {
  return (
    <>
      {pokemons.map((pokemon) => {
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
    </>
  );
}
