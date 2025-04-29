import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Gestor de Tarefas</h1>
      <div className="links">
        <Link to="/">Tarefas</Link>
        <Link to="/nova">Nova Tarefa</Link>
      </div>
    </nav>
  );
}

export default Navbar;