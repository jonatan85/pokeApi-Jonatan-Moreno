import { pedirPokemon } from "./api/api-pokemon-portada.js";
import { validateForm } from './views/card-pokemon.js'
import { pedirPokemon3 } from "./api/api-random1.js";



const formulario$$ = document.querySelector('#formulario');
const buttonRandom = document.querySelector('#random-button');



const addListeners = () => {
    formulario$$.addEventListener('submit', validateForm);
    buttonRandom.addEventListener('click', pedirPokemon3 );
    buttonRandom.addEventListener('click', () => {
        randomImg.remove();
    })    
    document.body.addEventListener('click', () => {
        randomImg.remove();
        })   
}

window.onload = () => {
    pedirPokemon();
    addListeners();
};