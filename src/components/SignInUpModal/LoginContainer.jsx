import { FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useSignInUpModal } from '../../hooks/useSignInUpModal';
import useTranslation from '../../hooks/useTranslation';
import Button from '../Button';
import LoginForm from '../Forms/Login';

export default function LoginContainer({ isSigningIn, triggerRegister }) {
  const { t } = useTranslation();
  const { handleLoginEmail, handleLoginGoogle, handleLoginTwitter } =
    useSignInUpModal();

  return (
    <div
      className={
        'flex flex-col gap-4 justify-between w-1/2 transition-all duration-200 p-4 h-full' +
        (isSigningIn ? '' : ' -translate-x-full opacity-0')
      }
    >
      <h3 className="text-xl font-bold text-center">
        {t('login_modal.title')}
      </h3>
      <LoginForm handleLogin={handleLoginEmail} />
      <div className="flex justify-center items-center w-full relative my-4">
        <hr className="w-64 h-px bg-red-200 border-0" />
        <span className="absolute left-1/2 px-3 font-medium text-red-900 bg-white -translate-x-1/2">
          or
        </span>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <Button
          border
          className="text-lg"
          icon={true}
          onClick={handleLoginGoogle}
        >
          <FcGoogle className="w-6 h-6" />
          Google
        </Button>
        <Button
          border
          className="text-lg"
          icon={true}
          onClick={handleLoginTwitter}
        >
          <FaTwitter className="w-6 h-6 text-blue-500" />
          Twitter
        </Button>
      </div>
      <span className="text-center">
        ¿Nuevo en Poke<i>D</i>?{' '}
        <a
          className="underline font-bold hover:text-red-700 hover:cursor-pointer"
          onClick={triggerRegister}
        >
          Regístrate!
        </a>
      </span>
    </div>
  );
}
