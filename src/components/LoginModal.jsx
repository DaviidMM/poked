import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';
import Button from './Button';
import useTranslation from '../hooks/useTranslation';
import LoginForm from './Forms/Login';

export default function LoginModal({
  closeLoginModal,
  handleLoginEmail,
  handleLoginGoogle,
  handleLoginTwitter,
  isOpen,
}) {
  const { t } = useTranslation();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeLoginModal}>
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

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl p-6 text-red-900 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-xl font-bold text-center">
                  {t('login_modal.title')}
                </Dialog.Title>
                <LoginForm />
                <div className="flex justify-center items-center w-full">
                  <hr className="my-3 w-64 h-px bg-zinc-300 border-0" />
                  <span className="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2">
                    or
                  </span>
                </div>
                <div className="flex flex-row gap-4 justify-center mt-4">
                  <Button
                    border
                    color="white"
                    className="text-lg"
                    onClick={handleLoginGoogle}
                  >
                    <FcGoogle className="w-6 h-6" />
                    Google
                  </Button>
                  <Button
                    border
                    color="white"
                    className="text-lg"
                    onClick={handleLoginTwitter}
                  >
                    <FaTwitter className="w-6 h-6 text-blue-500" />
                    Twitter
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
