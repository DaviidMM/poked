import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { TbArrowsLeftRight } from 'react-icons/tb';
import Select from './Select.jsx';

export default function TradeModal({ open, closeModal, giving, reciving }) {
  const [recivingPokemon, setRecivingPokemon] = useState(reciving);

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
                  'max-w-2xl overflow-hidden mx-auto text-red-900 transform bg-white shadow-xl rounded-2xl p-4'
                }
              >
                <div className="flex flex-row justify-between items-center">
                  <div className="w-64">
                    <h1 className="text-2xl font-semibold">{giving.name}</h1>
                    <img
                      src={`/pokemon/icons/${giving.name}.png`}
                      alt={giving.name}
                    />
                  </div>
                  <TbArrowsLeftRight className="w-12 h-12" />
                  <div className="w-64 flex flex-col gap-4">
                    {recivingPokemon ? (
                      <>
                        <h1 className="text-2xl font-semibold">
                          {recivingPokemon.name}
                        </h1>
                        <img
                          src={`/pokemon/icons/${recivingPokemon.name}.png`}
                          alt={recivingPokemon.name}
                        />
                      </>
                    ) : (
                      <FaQuestion className="w-full h-full p-16" />
                    )}
                    <Select
                      value={recivingPokemon?.name}
                      onChange={(e) =>
                        setRecivingPokemon({ name: e.target.value })
                      }
                      options={[
                        { label: 'Magikarp', value: 'Magikarp' },
                        { label: 'Pikachu', value: 'Pikachu' },
                      ]}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
