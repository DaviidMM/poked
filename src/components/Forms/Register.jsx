import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { toast } from 'react-toastify';
import { useSignInUpModal } from '../../hooks/useSignInUpModal';

export default function RegisterForm() {
  const [name, setName] = useState('David');
  const [lastName, setLastName] = useState('Mulero');
  const [email, setEmail] = useState('davicitoo1612@gmail.com');
  const [password, setPassword] = useState('David123');
  const [passwordConfirmation, setPasswordConfirmation] = useState('David123');
  const { registerUserWithEmail } = useSignInUpModal();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      return toast.error('Las contraseñas no coinciden');
    }

    registerUserWithEmail(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-semibold">
      <div className="flex flex-row justify-between gap-2">
        <Input
          className="w-full"
          label="Name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="w-full"
          label="Last name"
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
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
      <Button color="red" type="submit">
        Register
      </Button>
    </form>
  );
}
