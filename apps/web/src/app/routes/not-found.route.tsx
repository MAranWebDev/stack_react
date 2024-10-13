import { useTranslation } from 'react-i18next';

export const NotFoundRoute = () => {
  // "react-i18next"
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('notFound')}</h1>
    </main>
  );
};
