import { CenteredSpinner } from '@/components/ui/spinner';
import { PropsWithChildren, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { DEFAULT_NS } from './constants';
import { i18n } from './i18n';

export const I18nextSuspenseProvider = ({ children }: PropsWithChildren) => {
  return (
    <I18nextProvider i18n={i18n} defaultNS={DEFAULT_NS}>
      {/* // Fallback in case server translations are not yet loaded */}
      <Suspense fallback={<CenteredSpinner />}>{children}</Suspense>
    </I18nextProvider>
  );
};
