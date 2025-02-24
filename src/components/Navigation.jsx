import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
        Jeu
      </NavLink>
      <NavLink to="/description" className={({ isActive }) => isActive ? 'active' : ''}>
        Description
      </NavLink>
      <NavLink to="/statistics" className={({ isActive }) => isActive ? 'active' : ''}>
        Statistiques
      </NavLink>
    </nav>
  );
}

export default Navigation;
