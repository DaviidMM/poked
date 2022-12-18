import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import Pokeball from '../Icons/Pokeball';
import { useSignInUpModal } from '../../hooks/useSignInUpModal';
import { toast } from 'react-toastify';
import Switch from '../Switch';
import useTranslation from '../../hooks/useTranslation';
import PasswordInput from '../PasswordInput';

export default function LoginForm({ triggerRememberPassword }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('davicitoo1612@gmail.com');
  const [password, setPassword] = useState('David123');
  const [remember, setRemember] = useState(true);
  const [sending, setSending] = useState(false);

  const { closeSignInUpModal, handleLoginEmail } = useSignInUpModal();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberChange = () => setRemember(!remember);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    handleLoginEmail({ email, password, remember })
      .then((credential) => {
        console.log({ credential });
        closeSignInUpModal();
      })
      .catch((err) => {
        console.error(err);
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
      <PasswordInput
        label={t('general.password')}
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="flex justify-between">
        <Switch
          enabled={remember}
          label={t('login_form.remember_me')}
          onChange={handleRememberChange}
        />
        <a
          className="underline hover:text-red-700 hover:cursor-pointer"
          onClick={triggerRememberPassword}
        >
          {t('login_form.forgot_password')}
        </a>
      </div>
      <Button
        className="text-center"
        color="red"
        disabled={sending}
        type="submit"
      >
        {sending ? (
          <Pokeball className="w-6 h-6 mx-auto animate-spin" />
        ) : (
          t('login_form.title')
        )}
      </Button>
    </form>
  );
}
