import{pokedes} from '../utils/pokemon-portada.js'

  pedirPokemon();
  async function pedirPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150";
    try{
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      pokedes(resultado.results);
    } catch (error) {
      console.log(error);
    }
  }

  
  

  export{pedirPokemon};