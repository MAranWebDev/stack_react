import { DefaultNS, Resources } from '@/libs/i18next/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: DefaultNS;
    resources: Resources;
  }
}
