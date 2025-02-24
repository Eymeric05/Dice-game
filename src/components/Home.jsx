import { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [diceResults, setDiceResults] = useState([]);
  const [tripleSixCount, setTripleSixCount] = useState(0);
  const [experiments, setExperiments] = useState(100);
  const [hasRolled, setHasRolled] = useState(false);

  const rollDice = () => {
    let tripleSix = 0;
    const results = [];
    
    for (let i = 0; i < experiments; i++) {
      const roll = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
      ];
      
      if (roll[0] === 6 && roll[1] === 6 && roll[2] === 6) {
        tripleSix++;
      }
      results.push(roll);
    }

    setDiceResults(results);
    setTripleSixCount(tripleSix);
    setHasRolled(true);

    // Sauvegarder dans l'historique
    const existingHistory = JSON.parse(localStorage.getItem('diceHistory')) || [];
    const newEntry = {
      date: new Date().toLocaleString(),
      experiments: experiments,
      tripleSixCount: tripleSix,
      percentage: ((tripleSix / experiments) * 100).toFixed(2)
    };
    localStorage.setItem('diceHistory', JSON.stringify([...existingHistory, newEntry]));
  };

  return (
    <div className="home">
      <h2>Jeu de dés - Brelan de 6</h2>
      <div className="form">
        <div className="input-group">
          <label>Nombre d'expériences :</label>
          <input 
            type="number" 
            value={experiments}
            onChange={(e) => setExperiments(parseInt(e.target.value))}
            min="1"
          />
        </div>
        <button onClick={rollDice}>Lancer</button>
      </div>

      {hasRolled && (
        <div className="results">
          <h3>Résultats</h3>
          <p>Nombre de brelans de 6 : {tripleSixCount}</p>
          <p>Pourcentage : {((tripleSixCount / experiments) * 100).toFixed(2)}%</p>
          <div className="dice-results">
            {diceResults.map((result, index) => (
              <div key={index} className="dice-roll">
                Lance {index + 1}: [{result.join(', ')}]
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
