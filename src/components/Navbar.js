import './Navbar.scss';
import { useLogout } from '../hooks/useLogout';

import { Link } from 'react-router-dom';

function Navbar() {
  const { logout } = useLogout();
  return (
    <nav className="navbar">
      <ul>
        <li className="title">myMoney</li>

        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
