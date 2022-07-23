import { writable } from 'svelte/store';

export const firebaseToken = writable('');
export const loadingFirst = writable(true);
export const loading = writable(false);
export const notificationSupported = writable(false);
export const notificationAllowed = writable(true);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let messaging;

export async function firstLoadNotification() {
  console.log('first load notification');

  const isSupported = 'Notification' in window;
  notificationSupported.set(isSupported);
  loadingFirst.set(false);

  if (!isSupported) {
    return;
  }

  if (Notification.permission === 'granted') {
    await initFirebase();
  } else if (Notification.permission === 'denied') {
    notificationAllowed.set(false);
  }
}

export async function requestPermission() {
  console.log('request permission');

  if (Notification.permission === 'granted') {
    if (messaging) {
      await getToken();
    } else {
      await initFirebase();
    }
  } else {
    loading.set(true);

    const result = await Notification.requestPermission();

    const allowed = result === 'granted';
    notificationAllowed.set(allowed);

    if (allowed) {
      await initFirebase();
    } else {
      loading.set(false);
    }
  }
}

async function initFirebase() {
  console.log('init firebase');

  if (!messaging) {
    firebase.initializeApp(firebaseConfig);
    messaging = firebase.messaging();
  }

  await getToken();
}

async function getToken() {
  console.log('request token');

  try {
    const token = await messaging.getToken({
      vapidKey: 'BA6niiIWa_QP2SXMTjS8gBtM3M7m0q0n0_ZWjECw3Z_iEFujzPG2VdAAvNFJ5btbgpEiRe2B80M4QKxRSxtmvDw',
    });

    if (token) {
      firebaseToken.set(token);
      loading.set(false);
      console.log(token);
      handleForegroundNotification();
      return token;
    } else {
      await requestPermission();
    }
  } catch (err) {
    console.error(err);
  }
}

function handleForegroundNotification() {
  console.log('handle foreground notification');

  messaging.onMessage((payload) => {
    console.log('Received foreground message ', payload);

    navigator.serviceWorker.getRegistration('/firebase-cloud-messaging-push-scope').then((registration) => {
      const { title, body, url } = payload.data;

      const notificationTitle = title;
      const notificationOptions = {
        body,
        icon: '/favicon.png',
        data: {
          url,
        },
      };

      registration.showNotification(notificationTitle, notificationOptions);
    });
  });
}
