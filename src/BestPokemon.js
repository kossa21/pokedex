import React from "react";

const BestPokemonFetcher = props => {
  const [bestPokemon, setBestPokemon] = React.useState(null);
  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then (response => response.json())
      .then (data => setBestPokemon(data))
  }, []);

  console.log(bestPokemon);

  if (!bestPokemon) {
    return null;
  } else {
    return <BestPokemon pokemon={bestPokemon} abilities={bestPokemon.abilities} />
  }
}

const BestPokemon = props => {

    return (
      <div>
        <p>My favourite Pokemon is Eevee</p>
        <ul>
          {props.abilities.map((element, index) => <li key={index}>{element.ability.name}</li>)}
        </ul>
      </div>
      
    );
  }

export default BestPokemonFetcher;