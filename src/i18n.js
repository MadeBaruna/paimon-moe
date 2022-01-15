import { register, addMessages, init, getLocaleFromNavigator, locale as $locale } from 'svelte-i18n';

import en from './locales/en.json';
import enItems from './locales/items/en.json';

const INIT_OPTIONS = {
  fallbackLocale: 'en',
  initialLocale: null,
};

let currentLocale = null;

$locale.subscribe((value) => {
  if (value == null) return;

  currentLocale = value;

  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', value);
  }
});

const supportedLanguage = ['en', 'id', 'ru', 'ko', 'fr', 'zh', 'pt', 'tw', 'es', 'de', 'th', 'vi'];
addMessages('en', en);
addMessages('en', enItems);
register('id', () => import('./locales/id.json'));
register('ru', () => import('./locales/ru.json'));
register('ko', () => import('./locales/ko.json'));
register('fr', () => import('./locales/fr.json'));
register('zh', () => import('./locales/zh.json'));
register('pt', () => import('./locales/pt.json'));
register('tw', () => import('./locales/tw.json'));
register('es', () => import('./locales/es.json'));
register('de', () => import('./locales/de.json'));
register('th', () => import('./locales/th.json'));
register('vi', () => import('./locales/vi.json'));
register('id', () => import('./locales/items/id.json'));
register('ru', () => import('./locales/items/ru.json'));
register('ko', () => import('./locales/items/ko.json'));
register('fr', () => import('./locales/items/fr.json'));
register('zh', () => import('./locales/items/zh.json'));
register('pt', () => import('./locales/items/pt.json'));
register('tw', () => import('./locales/items/tw.json'));
register('es', () => import('./locales/items/es.json'));
register('de', () => import('./locales/items/de.json'));
register('th', () => import('./locales/items/th.json'));
register('vi', () => import('./locales/items/vi.json'));

export function startClient() {
  let used = 'en';
  const savedLocale = localStorage.getItem('locale');
  const detectedLocale = getLocaleFromNavigator().substring(0, 2);
  if (savedLocale !== null) {
    if (!supportedLanguage.includes(savedLocale)) {
      localStorage.setItem('locale', 'en');
    } else {
      used = savedLocale;
    }
  } else if (supportedLanguage.includes(detectedLocale)) {
    used = detectedLocale;
  }

  init({
    ...INIT_OPTIONS,
    initialLocale: used,
  });
}

const DOCUMENT_REGEX = /(^([^.?#@]+)?([?#](.+)?)?|service-worker.*?\.html)$/;
export function i18nMiddleware() {
  init(INIT_OPTIONS);

  return (req, res, next) => {
    const isDocument = DOCUMENT_REGEX.test(req.originalUrl);
    if (!isDocument) {
      next();
      return;
    }

    let locale = 'en';
    if (req.headers['accept-language']) {
      const headerLang = req.headers['accept-language'].split(',')[0].trim();
      if (headerLang.length > 1) {
        locale = headerLang;
      }
    } else {
      locale = INIT_OPTIONS.initialLocale || INIT_OPTIONS.fallbackLocale;
    }

    if (locale != null && locale !== currentLocale) {
      $locale.set(locale.substring(0, 2));
    }

    next();
  };
}
