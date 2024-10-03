import { DEFAULT_NS } from '@/libs/i18n';
import Resources from './i18next-resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NS;
    resources: Resources;
  }
}
