async function getPokemon(params) {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon/25")
    const response = await request.json();

    const mapList = response.result.map(async (pokemon) => {
        const request = await fetch(pokemon.url);
        return await request.json();
    });

    pokemonList = await Promise.all(mapList);

    renderPokemons(pokemonList);
};

function updateList() {

};

function openModal(id) {

};