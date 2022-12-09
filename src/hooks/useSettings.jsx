import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function useSettings() {
  const storedSettings = JSON.parse(localStorage.getItem('settings')) || {
    language: 'es',
  };
  const [settings, setSettings] = useState(storedSettings);
  const { i18n } = useTranslation();

  const updateSettings = (newSettings) => {
    if (newSettings.language !== settings.language) {
      i18n.changeLanguage(newSettings.language);
    }
    localStorage.setItem('settings', JSON.stringify(newSettings));
    setSettings(newSettings);
  };

  return { settings, updateSettings };
}
