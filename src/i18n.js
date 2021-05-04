import { addMessages, init, getLocaleFromNavigator, locale as $locale } from 'svelte-i18n';

import en from './locales/en.json';
import id from './locales/id.json';
import ru from './locales/ru.json';
import ko from './locales/ko.json';

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

addMessages('en', en);
addMessages('id', id);
addMessages('ru', ru);
addMessages('ko', ko);

export function startClient() {
  const savedLocale = localStorage.getItem('locale');

  init({
    ...INIT_OPTIONS,
    initialLocale: savedLocale !== null ? savedLocale : getLocaleFromNavigator().substring(0, 2),
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
