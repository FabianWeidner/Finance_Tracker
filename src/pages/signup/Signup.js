import { useState } from 'react';
import './Signup.scss';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername('');
    setEmail('');
    setPassword('');

    console.log(username, email, password);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label>
        <span>username:</span>
        <input type="text" onChange={handleUsername} value={username} />
      </label>
      <label>
        <span>email:</span>
        <input type="email" onChange={handleEmail} value={email} />
      </label>
      <label>
        <span>password:</span>
        <input type="password" onChange={handlePassword} value={password} />
      </label>
      <button className="btn">signup</button>
    </form>
  );
}

export default Signup;
