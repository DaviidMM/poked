import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../services/firebase';

export default function RegisterForm() {
  const [email, setEmail] = useState('davicitoo1612@gmail.com');
  const [password, setPassword] = useState('David123');
  const [passwordConfirmation, setPasswordConfirmation] = useState('David123');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering user');
    createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        console.log({ credential });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          type="password"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
