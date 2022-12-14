import { useState } from 'react';
import Input from '../Input';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <form className="my-4 max-w-sm mx-auto font-semibold">
      <Input label="Email" value={email} onChange={handleEmailChange} />
      <Input
        label="Password"
        value={password}
        onChange={handlePasswordChange}
      />
    </form>
  );
}
