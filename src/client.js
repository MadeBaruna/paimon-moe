import * as sapper from '@sapper/app';
import localforage from 'localforage';

import { startClient } from './i18n.js';

console.log('localforage config');
localforage.config({
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'paimonmoe',
  version: 1.0,
  description: 'paimonmoe local storage',
});

startClient();

sapper.start({
  target: document.querySelector('#sapper'),
});
