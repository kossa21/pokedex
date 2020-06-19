import React from "react";

const CaughtPokemon = props => {
  const [totalCaught, setTotalCaught] = React.useState(0);

  const increaseCaught = () => {
    setTotalCaught(totalCaught + 1);
  }

  return (
    <div class="caughtPokemon">
      <p>Caught {totalCaught} Pokemon on {props.date}</p>
      <button onClick={increaseCaught}>Catch a Pokemon</button>
    </div>
  );
}

export default CaughtPokemon;