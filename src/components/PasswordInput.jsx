import { useState } from 'react';
import useTranslation from '../hooks/useTranslation';
import Input from './Input';

export default function PasswordInput({
  value,
  onChange,
  className,
  label,
  id,
}) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        className={className}
        label={label}
        type={showPassword ? 'text' : 'password'}
        id={id}
        value={value}
        onChange={onChange}
      />
      <button
        className="absolute right-0 top-3/4 -translate-y-1/2 px-4 z-20"
        onClick={() => setShowPassword(!showPassword)}
        type="button"
      >
        <img
          className="h-6"
          src={
            showPassword
              ? '/assets/gengar_open.png'
              : '/assets/gengar_close.png'
          }
          alt="Show password"
          title={t('general.show_password')}
        />
      </button>
    </div>
  );
}
