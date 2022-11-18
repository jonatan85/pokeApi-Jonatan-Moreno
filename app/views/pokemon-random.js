import { pedirPokemon2 } from "../api/api-random2.js";

function pokeRandom(random) {
    const nameRandom = random[Math.round(Math.random() * (15 - 1) + 1)].name;
    pedirPokemon2(nameRandom);   
}

export {pokeRandom};