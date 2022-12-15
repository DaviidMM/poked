import NavItem from '../NavItem';
import Pokeball from '../Icons/Pokeball';
import useTranslation from '../../hooks/useTranslation';
import Button from '../Button';
import { useSignInUpModal } from '../../hooks/useSignInUpModal';
import useAuth from '../../hooks/useAuth';
import { logout } from '../../services/firebase';

export default function Header() {
  const { t: translate } = useTranslation();
  const { openSignInUpModal } = useSignInUpModal();
  const auth = useAuth();

  const handleLogout = () => logout();

  return (
    <header className="bg-red-600 py-10 flex flex-row w-full relative items-center xl:justify-center px-12 text-red-900 border-b-[6px] border-black">
      <span className="rounded-full w-8 h-8 bg-white absolute left-1/2 -bottom-[3px] -translate-x-1/2 translate-y-1/2 border-4 border-black p-1.5">
        <span className="w-full h-full mx-auto block border-2 border-zinc-400 rounded-full"></span>
      </span>
      <button className="text-white xl:hidden">
        <Pokeball className="w-6 h-6" />
      </button>
      <nav className="hidden xl:block">
        <ul className="flex flex-row gap-4">
          <NavItem to="">{translate('header.home')}</NavItem>
          <NavItem to="type-calculator">
            {translate('header.type_calculator')}
          </NavItem>
          <NavItem to="trade">Punto de intercambio</NavItem>
        </ul>
      </nav>
      {auth.status === 'authenticated' ? (
        <div className="absolute right-14">
          <span className="text-white">{auth.user.email}</span>
          <Button onClick={handleLogout}>Cerrar Sesión</Button>
        </div>
      ) : (
        <Button className="!absolute right-14" onClick={openSignInUpModal}>
          {translate('header.login')}
        </Button>
      )}
    </header>
  );
}
