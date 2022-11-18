function pedirPokemonRandom(randoms) {
    const randomId = randoms.id;
  
    const containerRandom = document.querySelector('#random-id');
  
    const randomImg = document.createElement('IMG');
    containerRandom.appendChild(randomImg);
    randomImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomId}.png`;
}

export {pedirPokemonRandom};