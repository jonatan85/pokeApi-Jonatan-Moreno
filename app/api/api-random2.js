import { pedirPokemonRandom} from "../utils/mostrar-pokemon-random.js";

async function pedirPokemon2(nameRandom) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameRandom}`;
    try{
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      pedirPokemonRandom(resultado);
    } catch (error) {
      console.log(error);
      debugger
    }
}

export {pedirPokemon2};