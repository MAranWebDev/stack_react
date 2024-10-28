import { MainLayout } from '@/components/layouts/main-layout';
import { useTranslation } from 'react-i18next';

export const LandingRoute = () => {
  // "react-i18next"
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1>{t('home')}</h1>
    </MainLayout>
  );
};
