import './Navbar.scss';
import { useLogout } from '../hooks/useLogout';

import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className="navbar">
      <ul>
        <li className="title">myMoney</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
