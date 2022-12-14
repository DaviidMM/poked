import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../services/firebase';
import Input from '../Input';
import Button from '../Button';
import { toast } from 'react-toastify';

export default function RegisterForm() {
  const [email, setEmail] = useState('davicitoo1612@gmail.com');
  const [password, setPassword] = useState('David123');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      return toast.error('Las contraseñas no coinciden');
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        console.log({ credential });
      })
      .catch((err) => {
        console.error(err);
        if (err.code === 'auth/email-already-in-use') {
          toast.error('El email ya está en uso');
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-red-600 font-semibold text-lg text-white [&_button]:text-red-900 [&_input]:text-red-900 p-4 rounded-3xl"
    >
      <Input
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        label="Password confirm"
        type="password"
        id="passwordConfirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <Button className="ml-auto mt-4" type="submit">
        Regístrate
      </Button>
    </form>
  );
}
