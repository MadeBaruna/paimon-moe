importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

const firebaseConfig = {
  apiKey: __paimon.env.FIREBASE_API_KEY,
  authDomain: __paimon.env.FIREBASE_AUTH_DOMAIN,
  projectId: __paimon.env.FIREBASE_PROJECT_ID,
  storageBucket: __paimon.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: __paimon.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: __paimon.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);

  const { title, body, url } = payload.data;

  const notificationTitle = title;
  const notificationOptions = {
    body,
    icon: '/favicon.png',
    data: {
      url,
    },
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  if (clients.openWindow) {
    clients.openWindow(event.notification.data.url);
  }
});
