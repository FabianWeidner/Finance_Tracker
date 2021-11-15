import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
    login(email, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input type="email" onChange={handleEmail} value={email} />
      </label>
      <label>
        <span>password:</span>
        <input type="password" onChange={handlePassword} value={password} />
      </label>
      {!isPending && <button className="btn">Login</button>}

      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
