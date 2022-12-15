import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import Pokeball from '../Icons/Pokeball';
import { useSignInUpModal } from '../../hooks/useSignInUpModal';
import { toast } from 'react-toastify';
import Switch from '../Switch';

export default function LoginForm({ handleLogin }) {
  const [email, setEmail] = useState('davicitoo1612@gmail.com');
  const [password, setPassword] = useState('David123');
  const [remember, setRemember] = useState(false);
  const [sending, setSending] = useState(false);

  const { closeSignInUpModal } = useSignInUpModal();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberChange = () => setRemember(!remember);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    handleLogin({ email, password, remember })
      .then((credential) => {
        console.log({ credential });
        closeSignInUpModal();
      })
      .catch((err) => {
        console.error(err);
        console.log({ err });
        toast.error(
          'No se ha podido iniciar sesión con las credenciales indicadas.'
        );
        setSending(false);
      });
  };

  return (
    <form className="flex flex-col gap-4 font-semibold" onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="flex justify-between">
        <Switch
          enabled={remember}
          label="Remember me"
          onChange={handleRememberChange}
        />
        <a className="underline hover:text-red-700 hover:cursor-pointer">
          Forgot password?
        </a>
      </div>
      <Button color="red" type="submit" className="text-center">
        {sending ? (
          <Pokeball className="w-6 h-6 mx-auto animate-spin" />
        ) : (
          'Login'
        )}
      </Button>
    </form>
  );
}
