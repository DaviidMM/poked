import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { toast } from 'react-toastify';
import { useSignInUpModal } from '../../hooks/useSignInUpModal';
import useTranslation from '../../hooks/useTranslation';
import PasswordInput from '../PasswordInput';

export default function RegisterForm() {
  const { t } = useTranslation();
  const [name, setName] = useState('David');
  const [lastName, setLastName] = useState('Mulero');
  const [email, setEmail] = useState('davicitoo1612@gmail.com');
  const [password, setPassword] = useState('David123');
  const [passwordConfirmation, setPasswordConfirmation] = useState('David123');
  const { registerUserWithEmail } = useSignInUpModal();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !lastName || !email || !password || !passwordConfirmation) {
      return toast.error(t('register_form.all_fields_required'));
    }

    if (password !== passwordConfirmation) {
      return toast.error(t('register_form.passwords_unmatch'));
    }

    registerUserWithEmail(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-semibold">
      <div className="flex flex-row justify-between gap-2">
        <Input
          className="w-full"
          label={t('register_form.name')}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="w-full"
          label={t('register_form.last_name')}
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <Input
        label={t('register_form.email')}
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        label={t('register_form.password')}
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        label={t('register_form.confirm_password')}
        type="password"
        id="passwordConfirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <Button color="red" type="submit">
        {t('register_form.submit')}
      </Button>
    </form>
  );
}
