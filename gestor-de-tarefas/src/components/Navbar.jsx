import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1>Gestor de Tarefas</h1>
      <div className="links">
        {location.pathname === '/' ? (
          <Link to="/nova">Nova Tarefa</Link>
        ) : (
          <Link to="/">Tarefas</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;