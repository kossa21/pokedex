import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const logWhenClicked = () => {
  console.log("I'm receiving a click!");
}

const  App = () => { 
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const date = new Date().toLocaleDateString();

  return (  
  <div>
    <Logo appName="Pokedex" handleClick={logWhenClicked}/>  
    <BestPokemon abilities={abilities}/>
    <CaughtPokemon date={date}/>  
  </div>
  );
}

export default App;
