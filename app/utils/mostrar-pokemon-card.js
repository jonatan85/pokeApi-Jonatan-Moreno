const resultado$$ = document.querySelector('#resultado');
const buscador$$ = document.querySelector('#buscador');


function mostrarPokemons(pokemon) {

    ;while(resultado$$.firstChild) {
      resultado$$.removeChild(resultado$$.firstChild);
  }

    const pokemonAbilities = pokemon.abilities;
    const pokemonTypes = pokemon.types;
    const pokemonId = pokemon.id;
    const pokemonName = pokemon.name;
    const pokemonStrong = pokemon.base_experience;

    const divCard$$ = document.createElement('DIV');
    resultado$$.appendChild(divCard$$);
    divCard$$.classList.add('enlace');

  
    const nameCards$$ = document.createElement('P');
    const imgCards$$ = document.createElement('IMG');
    
    divCard$$.appendChild(nameCards$$);
    divCard$$.appendChild(imgCards$$);
    
    nameCards$$.textContent = `Nombre: ${pokemonName}`;
    imgCards$$.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    
    nameCards$$.classList.add('poke-fuente');

    pokemonTypes.forEach(types => {
        const{type} = types;
        const pCard$$ = document.createElement('P');
        divCard$$.appendChild(pCard$$);
        pCard$$.textContent = `Tipo: ${type.name}`;
        pCard$$.classList.add('poke-fuente');

    });

    const attackOne$$ = document.createElement('P');
    const attackTwo$$ = document.createElement('P');
    const pointsStong$$ = document.createElement('P');

    divCard$$.appendChild(attackOne$$);
    divCard$$.appendChild(attackTwo$$);
    divCard$$.appendChild(pointsStong$$);

    attackOne$$.textContent = `Ataque 1 ${pokemonAbilities[0].ability.name}`;
    attackTwo$$.textContent = `Ataque 2 ${pokemonAbilities[1].ability.name}`;
    pointsStong$$.textContent = `Puntos de Ataque ${pokemonStrong}`;

    attackOne$$.classList.add('poke-fuente');
    attackTwo$$.classList.add('poke-fuente');
    pointsStong$$.classList.add('poke-fuente');

    document.body.addEventListener('click', () => {
      divCard$$.remove();
    })
  }

  export {mostrarPokemons};