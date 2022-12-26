// Run with "npm run index-tcg"
import * as fs from 'fs';
import * as path from 'path';
import cv from 'opencv-ts';
import { CD } from '../src/functions/colorDescriptor';
import tcgData from '../src/data/tcg/en.json';
const { getSync } = await import('@andreekeberg/imagedata');

async function onRuntimeInitialized() {
  console.log('OpenCV Ready');

  const imagesPath = "static/images/tcg/";
  const indexFilename = "src/data/tcgIndex.js";
  const characters: string[] = ['blank'];
  const actions: string[] = ['blank'];

  tcgData.forEach((entry: { type: string, id: string }) => {
    entry.type === "character" ? characters.push(entry.id) : actions.push(entry.id);
  })

  console.log(`Found ${characters.length} character cards.`);
  console.log(`Found ${actions.length} action cards.`);

  // Generate features
  const charactersIndex: { name: string, data: Float32Array }[] = [];
  const actionsIndex: { name: string, data: Float32Array }[] = [];
  const queues = [{ cards: characters, index: charactersIndex }, { cards: actions, index: actionsIndex }];
  for (let queue of queues) {
    for (let cardName of queue.cards) {
      // Read image into fs
      let imageFile = fs.readFileSync(path.join(imagesPath, cardName + '.png'));
      // Convert image in fs to ImageData object
      let imageData = getSync(imageFile) as ImageData;
      // Now we can run OpenCV without reading from a DOM
      let imageMat = cv.matFromImageData(imageData);
      let features = CD.describeImage(imageMat);
      imageMat.delete();
      queue.index.push({ name: cardName, data: features });
    }
  }

  console.log(`Generated features for ${charactersIndex.length} character cards.`);
  console.log(`Generated features for ${actionsIndex.length} action cards.`);

  // Save index
  let cardsIndexJson = JSON.stringify({
    "characters": charactersIndex,
    "actions": actionsIndex
  },
    (k, v) => ArrayBuffer.isView(v) ? Array.from(v as unknown as ArrayLike<unknown>) : v, 2);
  try {
    fs.writeFileSync(indexFilename, "export const tcgIndex = " + cardsIndexJson);
    console.log(`Saved index data to ${indexFilename}`);
  } catch (err) {
    console.error(err);
  }
}

// Set above function to run only after OpenCV is initialized.
cv.onRuntimeInitialized = onRuntimeInitialized;

export { };