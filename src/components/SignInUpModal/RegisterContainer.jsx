import { FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useSignInUpModal } from '../../hooks/useSignInUpModal';
import Button from '../Button';
import RegisterForm from '../Forms/Register';

export default function RegisterContainer({ isSigningIn, triggerLogin }) {
  const { handleLoginGoogle, handleLoginTwitter, registerUserWithEmail } =
    useSignInUpModal();

  return (
    <div
      className={
        'flex flex-col gap-8 w-1/2 transition-all duration-200 p-4 h-full ' +
        (isSigningIn ? 'opacity-0' : '-translate-x-full opacity-100')
      }
    >
      <RegisterForm handleRegister={registerUserWithEmail} />
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
        ¿Ya tienes cuenta en Poke<i>D</i>?{' '}
        <a
          className="underline font-bold hover:text-red-700 hover:cursor-pointer"
          onClick={triggerLogin}
        >
          Inicia sesión
        </a>
      </span>
    </div>
  );
}
