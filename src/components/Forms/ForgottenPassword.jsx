import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import Pokeball from '../Icons/Pokeball';
import { useSignInUpModal } from '../../hooks/useSignInUpModal';
import { toast } from 'react-toastify';
import useTranslation from '../../hooks/useTranslation';

export default function ForgottenPasswordForm({ triggerLogin }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);

  const { handlePasswordReset } = useSignInUpModal();

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    handlePasswordReset(email)
      .then(() => {
        toast.success('Password reset email has been sent to your email');
        setSending(false);
        triggerLogin();
      })
      .catch((err) => {
        console.error(err);
        toast.error(
          'No se ha podido restablecer la contraseña del email indicado.'
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
      <Button
        className="text-center"
        color="red"
        disabled={sending}
        type="submit"
      >
        {sending ? (
          <Pokeball className="w-6 h-6 mx-auto animate-spin" />
        ) : (
          t('remember_pw_form.send')
        )}
      </Button>
    </form>
  );
}
