export async function getPokemons(pokemonIds) {
  try {
    const response = pokemonIds.map((id) => {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) =>
        res.json(),
      );
    });

    const pokemons = await Promise.all(response);

    return pokemons;
  } catch (error) {
    console.error(error);
  }
}
