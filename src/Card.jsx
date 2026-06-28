import React from 'react';
function Card({ card }) {
  return (
    <div>
      <h2>{card.name}</h2>
      <p>Attribute 1: {card.attribute1}</p>
      <p>Attribute 2: {card.attribute2}</p>
      <p>Attribute 3: {card.attribute3}</p>
    </div>
  );
}
export default Card;