import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useSettings from './useSettings';

const availableLangs = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
];

export default function useLanguage() {
  const {
    settings: { language },
  } = useSettings();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== language) i18n.changeLanguage(language);
  }, [language]);

  return { language, availableLangs };
}
