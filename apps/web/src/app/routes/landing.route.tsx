import { MainLayout } from '@/components/layouts/main-layout';
import { useTranslation } from 'react-i18next';

export const LandingRoute = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <section>
        <h1>{t('home')}</h1>
      </section>
    </MainLayout>
  );
};
