// This file is used only in the client to translate form errors.
import { z } from 'zod';
import { zodI18nMap } from 'zod-i18n-map';

// Translations
import zodEs from 'zod-i18n-map/locales/es/zod.json';

// Set translations on zod instance
z.setErrorMap(zodI18nMap);

export { zodEs };
