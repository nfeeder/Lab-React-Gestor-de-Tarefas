import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Início</Link> | <Link to="/nova">Nova Tarefa</Link>
    </nav>
  );
}

export default Navbar;