import { DEFAULT_NS } from '@/libs/i18next/constants';
import type { DefaultResources } from '@/libs/i18next/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NS;
    resources: DefaultResources;
  }
}
