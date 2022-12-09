import { useState } from 'react';
import TypeBadge from '../components/TypeBadge';
import TypeSelector from '../components/TypeSelector';
import types from '../data/types';
import useDmgRelations from '../hooks/useDmgRelations';
import useTranslation from '../hooks/useTranslation';

export default function TypeCalculatorPage() {
  const { t } = useTranslation();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const { x0Types, x025Types, x05Types, x1Types, x2Types, x4Types } =
    useDmgRelations(selectedTypes);

  const handleSelectType = ({ type, selected }) => {
    if (selected) {
      if (selectedTypes.length < 2) {
        setSelectedTypes([...selectedTypes, type]);
      } else {
        setSelectedTypes([type]);
      }
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    }
  };

  return (
    <div className="flex flex-row justify-between mt-8 mx-auto max-w-3xl xl:max-w-[1400px] xl:px-16 gap-6 xl:gap-12">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-semibold">
          {t('type_calculator.choose_types')}
        </h2>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 ">
          {types.map((type) => (
            <TypeSelector
              key={type.name}
              type={type}
              selected={selectedTypes.includes(type)}
              selectedIndex={selectedTypes.indexOf(type)}
              onSelect={handleSelectType}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-6">
        {selectedTypes.length > 0 && (
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">
              {t('type_calculator.selected_types')}
            </h2>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-2">
              {selectedTypes.map((type) => (
                <TypeBadge
                  className="rounded-3xl"
                  key={type.name}
                  type={type}
                />
              ))}
            </div>
          </div>
        )}
        {x4Types.length > 0 && (
          <div className="flex flex-col gap-2">
            <span>{t('type_calculator.suffersX4')}</span>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-2">
              {x4Types.map((type) => (
                <TypeBadge
                  className="rounded-3xl"
                  key={type.name}
                  type={type}
                />
              ))}
            </div>
          </div>
        )}
        {x2Types.length > 0 && (
          <div className="flex flex-col gap-2">
            <span>{t('type_calculator.suffersX2')}</span>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-2">
              {x2Types.map((type) => (
                <TypeBadge
                  className="rounded-3xl"
                  key={type.name}
                  type={type}
                />
              ))}
            </div>
          </div>
        )}
        {x1Types.length > 0 && (
          <div className="flex flex-col gap-2">
            <span>{t('type_calculator.suffersX1')}</span>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-2">
              {x1Types.map((type) => (
                <TypeBadge
                  className="rounded-3xl"
                  key={type.name}
                  type={type}
                />
              ))}
            </div>
          </div>
        )}
        {x05Types.length > 0 && (
          <div className="flex flex-col gap-2">
            <span>{t('type_calculator.suffersX05')}</span>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-2">
              {x05Types.map((type) => (
                <TypeBadge
                  className="rounded-3xl"
                  key={type.name}
                  type={type}
                />
              ))}
            </div>
          </div>
        )}
        {x025Types.length > 0 && (
          <div className="flex flex-col gap-2">
            <span>{t('type_calculator.suffersX025')}</span>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-2">
              {x025Types.map((type) => (
                <TypeBadge
                  className="rounded-3xl"
                  key={type.name}
                  type={type}
                />
              ))}
            </div>
          </div>
        )}
        {x0Types.length > 0 && (
          <div className="flex flex-col gap-2">
            <span>{t('type_calculator.suffersX0')}</span>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-2">
              {x0Types.map((type) => (
                <TypeBadge
                  className="rounded-3xl"
                  key={type.name}
                  type={type}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
