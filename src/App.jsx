import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
function App() {
  const [cards, setCards] = useState([]);
  const [playerCard, setPlayerCard] = useState(null);
  const [computerCard, setComputerCard] = useState(null);
  const [winner, setWinner] = useState(null);
  const [deck, setDeck] = useState([]);
  useEffect(() => {
    const newDeck = [];
    for (let i = 0; i < 10; i++) {
      newDeck.push({
        name: `Card ${i}`,
        attribute1: Math.floor(Math.random() * 100),
        attribute2: Math.floor(Math.random() * 100),
        attribute3: Math.floor(Math.random() * 100),
      });
    }
    setDeck(newDeck);
  }, []);
  const handleDraw = () => {
    const playerIndex = Math.floor(Math.random() * deck.length);
    const computerIndex = Math.floor(Math.random() * deck.length);
    setPlayerCard(deck[playerIndex]);
    setComputerCard(deck[computerIndex]);
  };
  const handleCompare = () => {
    if (playerCard && computerCard) {
      if (playerCard.attribute1 > computerCard.attribute1) {
        setWinner('Player');
      } else if (playerCard.attribute1 < computerCard.attribute1) {
        setWinner('Computer');
      } else {
        setWinner('Tie');
      }
    }
  };
  return (
    <div>
      <h1>Top Trumps</h1>
      <button onClick={handleDraw}>Draw Cards</button>
      <button onClick={handleCompare}>Compare Cards</button>
      {playerCard && <Card card={playerCard} />}
      {computerCard && <Card card={computerCard} />}
      {winner && <p>Winner: {winner}</p>}
    </div>
  );
}
export default App;