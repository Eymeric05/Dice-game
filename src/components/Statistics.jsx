import { useState, useEffect } from 'react';
import '../styles/Statistics.css';

function Statistics() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('diceHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const calculateTotalStats = () => {
    const totalExperiments = history.reduce((acc, curr) => acc + curr.experiments, 0);
    const totalTripleSix = history.reduce((acc, curr) => acc + curr.tripleSixCount, 0);
    const averagePercentage = totalExperiments ? 
      ((totalTripleSix / totalExperiments) * 100).toFixed(2) : 0;
    
    return { totalExperiments, totalTripleSix, averagePercentage };
  };

  const clearHistory = () => {
    localStorage.removeItem('diceHistory');
    setHistory([]);
  };

  const totalStats = calculateTotalStats();

  return (
    <div className="statistics">
      <h2>Statistiques Globales</h2>
      <div className="stats-container">
        <div className="total-stats">
          <h3>Résumé global</h3>
          <p>Nombre total d'expériences : {totalStats.totalExperiments}</p>
          <p>Nombre total de brelans de 6 : {totalStats.totalTripleSix}</p>
          <p>Pourcentage moyen : {totalStats.averagePercentage}%</p>
        </div>

        <div className="history">
          <h3>Historique des lancers</h3>
          <button 
            onClick={clearHistory}
            className="clear-button"
          >
            Effacer l'historique
          </button>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Expériences</th>
                <th>Brelans de 6</th>
                <th>Pourcentage</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.experiments}</td>
                  <td>{entry.tripleSixCount}</td>
                  <td>{entry.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
