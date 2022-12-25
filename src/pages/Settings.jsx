import { useState } from 'react';
import Select from '../components/Select';
import useLanguage from '../hooks/useLanguage';
import useTranslation from '../hooks/useTranslation';
import { toast } from 'react-toastify';
import Pokeball from '../components/Icons/Pokeball';
import useSettings from '../hooks/useSettings';

export default function SettingsPage() {
  const { t } = useTranslation();
  const { language: currentLang, availableLangs } = useLanguage();
  const [language, setLanguage] = useState(currentLang);
  const { settings, updateSettings } = useSettings();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings({ ...settings, language });
    toast('Se han guardado los cambios', {
      icon: <Pokeball />,
    });
  };

  return (
    <div className="flex flex-row justify-between mt-8 mx-auto max-w-xl gap-12">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <span>{t('settings.language')}</span>
          <Select
            options={availableLangs.map((lang) => ({
              value: lang.code,
              label: lang.name,
            }))}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 self-center px-4 py-2 rounded-full text-white font-semibold w-fit hover:bg-red-700 transition-colors duration-200"
        >
          {t('settings.save')}
        </button>
      </form>
    </div>
  );
}
