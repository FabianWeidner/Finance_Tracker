import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import './Signup.scss';

function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isPending, error } = useSignup();

  const handleDisplayName = (e) => {
    setDisplayName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisplayName('');
    setEmail('');
    setPassword('');

    signup(email, password, displayName);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label>
        <span>email:</span>
        <input type="email" onChange={handleEmail} value={email} />
      </label>
      <label>
        <span>password:</span>
        <input type="password" onChange={handlePassword} value={password} />
      </label>
      <label>
        <span>displayName:</span>
        <input type="text" onChange={handleDisplayName} value={displayName} />
      </label>
      {!isPending && <button className="btn">signup</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Signup;
