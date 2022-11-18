import { searchImages } from "../api/api-card-pokemon.js";

function validateForm(e) { 
    e.preventDefault(); // 
    
    const pokemonSearch = document.querySelector('#termino').value;
    if(pokemonSearch === '') { 
      showAlert('Agrega un Pokemon'); 
      return; 
    }
    searchImages(pokemonSearch); 
}
  
function showAlert(message) { 
    const existeAlerta = document.querySelector('.alert');  
    if(!existeAlerta) {
      const alert = document.createElement('p');
      
      alert.classList.add('alert');
      
      // introducimos el maensaje de alerta 
      alert.innerHTML = `  
      <span class="block sm:inline">${message}</span>
      `;
      
      formulario$$.appendChild(alert); 
      
      setTimeout(() => { 
        alert.remove();
      }, 3000);
    }
}

export{validateForm};