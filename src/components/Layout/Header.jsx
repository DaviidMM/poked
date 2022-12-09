import { Link } from 'react-router-dom';
import NavItem from '../NavItem';
import Pokeball from '../Icons/Pokeball';
import useTranslation from '../../hooks/useTranslation';
import PokeballSettings from '../Icons/PokeballSettings';
import Button from '../Button';
import { useLoginModal } from '../../hooks/useLoginModal';

export default function Header() {
  const { t: translate } = useTranslation();
  const { openLoginModal } = useLoginModal();

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
      <Button className="absolute right-14" onClick={openLoginModal}>
        {translate('header.login')}
      </Button>
      {/* <Link
        to="/settings"
        className="px-4 py-2 rounded-full bg-white hover:bg-red-100 transition-colors absolute right-12 flex flex-row gap-2 font-semibold group"
      >
        <PokeballSettings className="w-6 h-6 group-hover:animate-shake origin-bottom" />
        {translate('header.settings')}
      </Link> */}
    </header>
  );
}
