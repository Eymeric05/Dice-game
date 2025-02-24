import '../styles/Description.css';

function Description() {
  return (
    <div className="description">
      <h2>Description du jeu</h2>
      <p>Ce jeu consiste à lancer trois dés simultanément et à compter le nombre de brelans de 6 obtenus.</p>
      <p>Un brelan est obtenu lorsque les trois dés affichent le même nombre.</p>
      <p>Dans ce jeu, nous comptons spécifiquement les brelans de 6 (trois dés montrant le chiffre 6).</p>
      <p>Vous pouvez choisir le nombre d'expériences à réaliser, et les résultats seront affichés dans la page des statistiques.</p>
    </div>
  );
}

export default Description;
