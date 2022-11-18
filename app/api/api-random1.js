import { pokeRandom } from "../views/pokemon-random.js";

async function pedirPokemon3() {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150";
    try{
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      pokeRandom(resultado.results);
    } catch (error) {
      console.log(error);
    }
}

export{pedirPokemon3};

