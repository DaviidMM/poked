import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import PokeballIcon from './Icons/Pokeball';

export default function Autocomplete({
  onSelect,
  placeholder,
  selected: selectedValue,
  suggestions,
}) {
  const [query, setQuery] = useState('');
  const handleSelect = (value) => onSelect(value);
  const selected = suggestions.find((s) => s.value === selectedValue.value);

  const filteredSuggestions =
    query === ''
      ? suggestions
      : suggestions.filter((suggestion) =>
          suggestion.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <Combobox value={selected} onChange={handleSelect}>
      <div className="relative">
        <div className="relative w-full cursor-default rounded-lg bg-white text-left">
          <Combobox.Input
            className="w-full px-4 py-1.5 rounded-lg border-2 border-red-900 focus:outline-none font-semibold"
            displayValue={(selected) => selected?.label}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            autoComplete="off"
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-0.5 max-h-60 w-full overflow-auto rounded-md bg-white z-30 border-2 border-red-900 text-base shadow-lg">
            {filteredSuggestions.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-red-900 font-semibold">
                No se han encontrado resultados
              </div>
            ) : (
              filteredSuggestions.map((suggestion) => (
                <Combobox.Option
                  key={suggestion.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 text-left ${
                      active ? 'bg-red-500 text-white' : 'text-red-900'
                    }`
                  }
                  value={suggestion}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {suggestion.label}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}
                        >
                          <PokeballIcon className="w-5 h-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
