const fs = require('fs');

let envString = '';
envString += `GOOGLE_DRIVE_CLIENT_ID=${process.env.GOOGLE_DRIVE_CLIENT_ID}\n`;
envString += `GOOGLE_DRIVE_API_KEY=${process.env.GOOGLE_DRIVE_API_KEY}\n`;
envString += `API_HOST=${process.env.API_HOST}\n`;
envString += `FIREBASE_API_KEY=${FIREBASE_API_KEY}\n`
envString += `FIREBASE_AUTH_DOMAIN=${FIREBASE_AUTH_DOMAIN}\n`
envString += `FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID}\n`
envString += `FIREBASE_STORAGE_BUCKET=${FIREBASE_STORAGE_BUCKET}\n`
envString += `FIREBASE_MESSAGING_SENDER_ID=${FIREBASE_MESSAGING_SENDER_ID}\n`
envString += `FIREBASE_APP_ID=${FIREBASE_APP_ID}\n`

fs.writeFileSync('.env', envString);
