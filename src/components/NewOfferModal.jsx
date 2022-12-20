import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import NewOfferForm from './Forms/NewOffer';

export default function NewOfferModal({ open, closeModal }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <Dialog.Title as="h1">New Offer</Dialog.Title>
                <NewOfferForm />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
