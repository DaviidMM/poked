import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

export default function SignInUpModal({ closeSignInUpModal, isOpen }) {
  const [isSigningIn, setIsSigningIn] = useState(true);

  const triggerRegister = () => setIsSigningIn(false);
  const triggerLogin = () => setIsSigningIn(true);

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
                  <a
                    onClick={triggerLogin}
                    className={
                      'px-4 py-2 text-left transition-all duration-200 ' +
                      (isSigningIn
                        ? 'grow bg-white pointer-events-none'
                        : 'bg-red-600 text-white hover:bg-red-700 hover:cursor-pointer')
                    }
                  >
                    <h3 className="text-xl font-bold text-center">Sign in</h3>
                  </a>
                  <a
                    onClick={triggerRegister}
                    className={
                      'px-4 py-2 text-right transition-all duration-200 ' +
                      (isSigningIn
                        ? 'bg-red-600 text-white hover:bg-red-700 hover:cursor-pointer'
                        : 'grow bg-white pointer-events-none')
                    }
                  >
                    <h3 className="text-xl font-bold text-center">Register</h3>
                  </a>
                </div>
                <div
                  className={
                    'flex items-center w-[200%] transition-[height] duration-200 ' +
                    (isSigningIn ? 'h-[490px]' : 'h-[620px]')
                  }
                >
                  <LoginContainer
                    isSigningIn={isSigningIn}
                    triggerRegister={triggerRegister}
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
