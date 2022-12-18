import dayjs from 'dayjs';
import { register, addMessages, init, getLocaleFromNavigator, locale as $locale } from 'svelte-i18n';
import { browser } from '$app/env';

import en from './locales/en.json';
import enItems from './locales/items/en.json';

const INIT_OPTIONS = {
  fallbackLocale: 'en',
  initialLocale: 'en',
};

let isLoaded = false;
$locale.subscribe((value) => {
  if (value === null) return;

  if (isLoaded) localStorage.setItem('locale', value);

  if (typeof window !== 'undefined') {
    dayjsLocales[value]().then(() => dayjs.locale(value));
  }
});

const supportedLanguage = ['en', 'id', 'ru', 'ja', 'ko', 'fr', 'zh', 'pt', 'tw', 'es', 'de', 'th', 'vi', 'tr', 'it'];
addMessages('en', en);
addMessages('en', enItems);
register('id', () => import('./locales/id.json'));
register('ru', () => import('./locales/ru.json'));
register('ja', () => import('./locales/ja.json'));
register('ko', () => import('./locales/ko.json'));
register('fr', () => import('./locales/fr.json'));
register('zh', () => import('./locales/zh.json'));
register('pt', () => import('./locales/pt.json'));
register('tw', () => import('./locales/tw.json'));
register('es', () => import('./locales/es.json'));
register('de', () => import('./locales/de.json'));
register('th', () => import('./locales/th.json'));
register('vi', () => import('./locales/vi.json'));
register('tr', () => import('./locales/en.json'));
register('it', () => import('./locales/en.json'));
register('id', () => import('./locales/items/id.json'));
register('ru', () => import('./locales/items/ru.json'));
register('ja', () => import('./locales/items/ja.json'));
register('ko', () => import('./locales/items/ko.json'));
register('fr', () => import('./locales/items/fr.json'));
register('zh', () => import('./locales/items/zh.json'));
register('pt', () => import('./locales/items/pt.json'));
register('tw', () => import('./locales/items/tw.json'));
register('es', () => import('./locales/items/es.json'));
register('de', () => import('./locales/items/de.json'));
register('th', () => import('./locales/items/th.json'));
register('vi', () => import('./locales/items/vi.json'));
register('tr', () => import('./locales/items/tr.json'));
register('it', () => import('./locales/items/it.json'));

const dayjsLocales = {
  en: () => import('dayjs/locale/en'),
  id: () => import('dayjs/locale/id'),
  ru: () => import('dayjs/locale/ru'),
  ja: () => import('dayjs/locale/ja'),
  ko: () => import('dayjs/locale/ko'),
  fr: () => import('dayjs/locale/fr'),
  zh: () => import('dayjs/locale/zh'),
  pt: () => import('dayjs/locale/pt'),
  tw: () => import('dayjs/locale/zh-tw'),
  es: () => import('dayjs/locale/es'),
  de: () => import('dayjs/locale/de'),
  th: () => import('dayjs/locale/th'),
  vi: () => import('dayjs/locale/vi'),
  tr: () => import('dayjs/locale/tr'),
  it: () => import('dayjs/locale/it'),
};

export async function startClient() {
  init({
    ...INIT_OPTIONS,
  });

  if (browser) {
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

    $locale.set(used);
    isLoaded = true;
    console.log('change i18n', used);
  }
}
