import React from "react";

const Logo = props => {
    const logWhenClicked = () => {
      console.log("I'm receiving a click!");
    }


    return (
      <header>
        <h1>Welcome to the {props.appName}</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" onClick={logWhenClicked}/>
      </header>
    )
  }

  export default Logo;