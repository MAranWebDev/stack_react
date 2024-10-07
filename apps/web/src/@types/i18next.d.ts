import type { DefaultNS } from '@/libs/i18next/constants';
import type { DefaultResources } from '@/libs/i18next/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: DefaultNS;
    resources: DefaultResources;
  }
}
