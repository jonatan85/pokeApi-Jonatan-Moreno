const boxHtml$$ = document.querySelector('.boxHtml');

const pokedes =(pokemons) => {
    for(let pokemon of pokemons) {

      const number = pokemon.url.slice(34, -1);

      
      
      const pokemonname$$ = document.createElement('H3');
      const card$$ = document.createElement('DIV');
      const image$$ = document.createElement('IMG');
      const numberPokemon$$ = document.createElement('P');
      
      card$$.appendChild(pokemonname$$);
      boxHtml$$.appendChild(card$$)
      card$$.appendChild(image$$);
      card$$.appendChild(numberPokemon$$);
      
      image$$.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
      pokemonname$$.textContent = pokemon.name;
      numberPokemon$$.textContent = `N˚ ${number}`;
      
      card$$.classList.add('card');
      image$$.classList.add('image-card');
    }

  }

  export{pokedes};