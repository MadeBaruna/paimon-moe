const fs = require('fs');

let envString = '';
envString += `GOOGLE_DRIVE_CLIENT_ID=${process.env.GOOGLE_DRIVE_CLIENT_ID}\n`;
envString += `GOOGLE_DRIVE_API_KEY=${process.env.GOOGLE_DRIVE_API_KEY}\n`;
envString += `CORS_HOST=${process.env.CORS_HOST}\n`;

fs.writeFileSync('.env', envString);
