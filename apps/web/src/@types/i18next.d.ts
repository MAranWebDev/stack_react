// import the original type declarations
import 'i18next';

// import all namespaces (for the default language, only)
import { DEFAULT_NS, resources } from '@/libs/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NS;
    resources: (typeof resources)['en'];
  }
}
