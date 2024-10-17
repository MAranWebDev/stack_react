import { MainLayout } from '@/components/layouts/main-layout';
import { Sample } from '@/features/sample/components';
import { useTranslation } from 'react-i18next';

export const SampleRoute = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <section>
        <h1>{t('sample')}</h1>
      </section>

      <section>
        <Sample />
      </section>
    </MainLayout>
  );
};
