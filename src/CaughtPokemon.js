import React from "react";

const CaughtPokemon = props => {
  const [totalCaught, setTotalCaught] = React.useState(0);

  return <p>Caught {totalCaught} Pokemon on {props.date}</p>
}

export default CaughtPokemon;