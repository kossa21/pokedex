import React from "react";

const BestPokemon = props => {
    
    return (
      <div>
        <p>My favourite Pokemon is Eevee</p>
        <ul>
          {props.abilities.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
      
    );
  }

export default BestPokemon;