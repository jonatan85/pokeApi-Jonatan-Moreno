import { mostrarPokemons } from "../utils/mostrar-pokemon-card.js";

async function searchImages() { 
    const termino= document.querySelector('#termino').value; 

    const url = `https://pokeapi.co/api/v2/pokemon/${termino.toLowerCase()}`;
console.log();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            // Le pasamos una funcio con los poekmon.
            mostrarPokemons(resultado);
        })
   
}

export {searchImages};