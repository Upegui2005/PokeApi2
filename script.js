const input = document.querySelector("#buscar");
const button = document.querySelector("#boton");
const pokemonContainer = document.querySelector("#card");

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerPokemon(input.value);
})

function traerPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res.json())
        .then((data) => {
            crearPokemon(data);
        })
}

function crearPokemon(pokemon) {
    const imagenPoke = document.querySelector('#imgpokemon')
    imagenPoke.src = pokemon.sprites.front_default;
    imagenPoke.addEventListener('mouseover', () => {
        if (imagenPoke.src === pokemon.sprites.front_default) {
            imagenPoke.src = pokemon.sprites.back_default;
        }
        else {
            imagenPoke.src = pokemon.sprites.front_default;
        }
    })

    document.querySelector('#titulo').textContent = pokemon.name;
    document.querySelector('#descripcion').textContent = pokemon.types[0].type.name;
    document.querySelector('#habilidad').textContent = pokemon.abilities[0].ability.name;
    document.querySelector('#especie').textContent = pokemon.species.name;
}