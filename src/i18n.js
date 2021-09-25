import { addMessages, init, getLocaleFromNavigator, locale as $locale } from 'svelte-i18n';

import en from './locales/en.json';
import id from './locales/id.json';
import ru from './locales/ru.json';
import ko from './locales/ko.json';
import fr from './locales/fr.json';
import zh from './locales/zh.json';
import pt from './locales/pt.json';
import tw from './locales/tw.json';
import es from './locales/es.json';
import de from './locales/de.json';
import th from './locales/th.json';
import vi from './locales/vi.json';

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
addMessages('id', id);
addMessages('ru', ru);
addMessages('ko', ko);
addMessages('fr', fr);
addMessages('zh', zh);
addMessages('pt', pt);
addMessages('tw', tw);
addMessages('es', es);
addMessages('de', de);
addMessages('th', th);
addMessages('vi', vi);

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
