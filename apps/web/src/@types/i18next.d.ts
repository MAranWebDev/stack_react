import { DEFAULT_NS } from '@/libs/i18next/constants';
import Resources from './i18next-resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NS;
    resources: Resources;
  }
}
