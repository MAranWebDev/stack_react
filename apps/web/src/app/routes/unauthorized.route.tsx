import { useTranslation } from 'react-i18next';

export const UnauthorizedRoute = () => {
  // "react-i18next"
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('messages.unauthorized')}</h1>
    </main>
  );
};
