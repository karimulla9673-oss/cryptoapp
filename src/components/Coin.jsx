import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <img src={icon} alt={name} />
      <h1>{name}</h1>
      <h3>{symbol.toUpperCase()}</h3>
      <p>Price: ${price.toLocaleString()}</p> {/* formatted */}
    </div>
  );
}

export default Coin;
