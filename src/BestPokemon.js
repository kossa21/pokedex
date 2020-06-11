import React from "react";

const BestPokemon = () => {
    const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  
    return (
      <div>
        <p>My favourite Pokemon is Eevee</p>
        <ul>
          {abilities.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
      
    );
  }

export default BestPokemon;