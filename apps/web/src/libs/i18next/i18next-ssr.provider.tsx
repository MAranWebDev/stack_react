import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import { DEFAULT_NS } from './constants';
import { i18n } from './i18n';

export const I18nextSSRProvider = ({ children }: PropsWithChildren) => {
  return (
    <I18nextProvider i18n={i18n} defaultNS={DEFAULT_NS}>
      {children}
    </I18nextProvider>
  );
};
