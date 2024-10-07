import { DefaultNS } from '@/libs/i18next/constants';
import { DefaultResources } from '@/libs/i18next/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: DefaultNS;
    resources: DefaultResources;
  }
}
