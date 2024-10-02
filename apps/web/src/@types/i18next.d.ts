// import the original type declarations
import 'i18next';

// import all namespaces (for the default language, only)
import ns1 from '@/locales/en.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: {
      ns1: typeof ns1;
    };
  }
}
