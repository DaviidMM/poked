import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';
import ForgottenPasswordContainer from './ForgottenPasswordContainer';
import { FaArrowRight, FaUser } from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';

export default function SignInUpModal({ closeSignInUpModal, isOpen }) {
  const { t } = useTranslation();
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [isRememberingPassword, setIsRememberingPassword] = useState(false);

  const triggerRegister = () => setIsSigningIn(false);
  const triggerLogin = () => {
    setIsSigningIn(true);
    setIsRememberingPassword(false);
  };
  const triggerRememberPassword = () => {
    setIsRememberingPassword(true);
    setIsSigningIn(true);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeSignInUpModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 max-h-screen">
          <div
            className={
              'justify-center text-center h-screen max-h-screen overflow-auto p-16'
            }
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={
                  'w-full max-w-xl overflow-hidden mx-auto text-red-900 transform bg-white shadow-xl rounded-2xl'
                }
              >
                <div className="flex flex-row justify-between">
                  {isRememberingPassword ? (
                    <>
                      <h3 className="text-xl font-bold py-2 grow">
                        <span className="text-center">
                          {t('sign_in_up.forgotten_password')}
                        </span>
                      </h3>
                      <a
                        className="bg-red-600 px-4 py-2 text-white hover:bg-red-700 hover:cursor-pointer flex flex-row gap-2 items-center"
                        onClick={triggerLogin}
                      >
                        <h3 className="text-xl font-bold text-center">
                          {t('sign_in_up.back_login')}
                        </h3>
                        <FaArrowRight className="w-5 h-5" />
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        onClick={triggerLogin}
                        className={
                          'px-4 py-2 text-left transition-all duration-200 flex flex-row gap-2 items-center justify-center ' +
                          (isSigningIn
                            ? 'grow bg-white pointer-events-none'
                            : 'bg-red-600 text-white hover:bg-red-700 hover:cursor-pointer')
                        }
                      >
                        <FaUser className="w-5 h-5" />
                        <h3 className="text-xl font-bold">
                          {t('login_form.title')}
                        </h3>
                      </a>
                      <a
                        onClick={triggerRegister}
                        className={
                          'px-4 py-2 text-right transition-all duration-200 flex flex-row gap-2 items-center justify-center ' +
                          (isSigningIn
                            ? 'bg-red-600 text-white hover:bg-red-700 hover:cursor-pointer'
                            : 'grow bg-white pointer-events-none')
                        }
                      >
                        <img
                          className="h-7"
                          src="/rotomdex.png"
                          alt="Rotomdex Icon"
                          title="Rotomdex"
                        />
                        <h3 className="text-xl font-bold">
                          {t('register_form.title')}
                        </h3>
                      </a>
                    </>
                  )}
                </div>
                <div
                  className={
                    'flex items-center w-[300%] transition-[height] duration-200 ' +
                    (isRememberingPassword // eslint-disable-line
                      ? 'h-[175px]' // eslint-disable-line
                      : isSigningIn // eslint-disable-line
                      ? 'h-[490px]' // eslint-disable-line
                      : 'h-[620px]') // eslint-disable-line
                  }
                >
                  <ForgottenPasswordContainer
                    isRememberingPassword={isRememberingPassword}
                    triggerLogin={triggerLogin}
                  />
                  <LoginContainer
                    isSigningIn={isSigningIn}
                    isRememberingPassword={isRememberingPassword}
                    triggerRegister={triggerRegister}
                    triggerRememberPassword={triggerRememberPassword}
                  />
                  <RegisterContainer
                    isSigningIn={isSigningIn}
                    triggerLogin={triggerLogin}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
