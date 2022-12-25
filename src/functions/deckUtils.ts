import cv, { Mat } from "opencv-ts";
import { tcgIndex } from "../data/tcgIndex.js";


// Positions of cards on generated screenshot image
const DIMENSIONS = {
  "characters": {
    "h": 240,
    "w": 144,
    "pos": [[350, 176], [512, 176], [674, 176]]
  },
  "actions": {
    "h": 160,
    "w": 96,
    "pos": [
      [251, 519], [365, 519], [479, 519], [593, 519], [707, 519], [821, 519],
      [251, 697], [365, 697], [479, 697], [593, 697], [707, 697], [821, 697],
      [251, 875], [365, 875], [479, 875], [593, 875], [707, 875], [821, 875],
      [251, 1053], [365, 1053], [479, 1053], [593, 1053], [707, 1053], [821, 1053],
      [251, 1231], [365, 1231], [479, 1231], [593, 1231], [707, 1231], [821, 1231]
    ]
  }
}

export class ColorDescriptor {

  bins: number[];

  /**
   * Color Descriptor object used to extract features from an image
   * @param bins Number of bins in histogram created for each channel. Default is to use [8, 12, 3]
   */
  constructor(bins: number[] = [8, 12, 3]) {
    this.bins = bins
  }

  /**
   * Describes the histogram values of an image.
   * The image is converted into HSV color space and an ellipse mask is applied to discard unwanted information such as card frames.
   * Then, the image features are calculated by extracting its histogram values.
   * @param image cv.Mat object of image to describe
   * @returns Float32Array object of image's histogram values
   */
  describeImage(image: Mat): Float32Array {
    let dst = new cv.Mat();
    // Convert to HSV color space
    cv.cvtColor(image, dst, cv.COLOR_BGR2HSV);
    let [h, w] = [dst.size().height, dst.size().width];
    // Create an ellipse mask to cut off distractful bits such as card frames
    let center = new cv.Point(Math.floor(w * 0.5), Math.floor(h * 0.5));
    let axes = new cv.Size(Math.floor(Math.floor(w * 0.75) / 2), Math.floor(Math.floor(h * 0.75) / 2));
    let ellipMask = new cv.Mat.zeros(h, w, cv.CV_8U);
    cv.ellipse(ellipMask, center, axes, 0, 0, 360, new cv.Scalar(255), -1);
    // Calculate histogram
    let hist = this.histogram(dst, ellipMask);
    // Cleanup
    dst.delete();
    ellipMask.delete();
    return hist;

  }

  /**
   * Calculates histogram values of an image with applied mask
   * @param image cv.Mat object of image to calculate histogram
   * @param mask cv.Mat object of mask to apply
   * @returns Float32Array of histogram values in respective channels based on bins.
   */
  histogram(image: Mat, mask: Mat): Float32Array {
    // Put image representation matrix into vector
    let imageVec = new cv.MatVector();
    imageVec.push_back(image);
    // Calculate histogram
    let hist = new cv.Mat();
    cv.calcHist(imageVec, [0, 1, 2], mask, hist, this.bins, [0, 180, 0, 256, 0, 256]);
    // Normalize the results
    let normHist = new cv.Mat();
    cv.normalize(hist, normHist, 0, 255, cv.NORM_MINMAX);
    // Cleanup
    hist.delete();
    imageVec.delete();
    return normHist.data32F;
  }
}

interface IndexData {
  name: string,
  data: Float32Array
}

class Searcher {

  indexData: IndexData[];

  /**
   * @param indexData Array of IndexData objects each with the name of a card and its respective features as a Float32Array object
   */
  constructor(indexData: IndexData[]) {
    this.indexData = indexData;
  }
  /**
   * Calculate dissimilarity of a card to all items in the indexData using Chi-Squared Distance. A number of results (limit) are returned with its ID and distance value
   * @param queryFeatures Float32Array object containing histogram features of the image to lookup
   * @param limit Number of search results to return
   * @returns Array of search results in pairs of index ID and distance value
   */
  search(queryFeatures: Float32Array, limit: number = 10): [string, number][] {
    // Calculate distance for card in query to all possible cards
    let distances: [string, number][] = [];
    for (let entry of this.indexData) {
      let d = this.chi2Distance(entry.data, queryFeatures);
      distances.push([entry.name, d]);
    }
    // Sort by smallest distance == least dissimilarity
    let results = distances.sort(([, a], [, b]) => a - b);
    return results.slice(0, limit);
  }

  /**
   * Calculate Chi-Squared Distance Metric between two arrays containing histogram values.
   * See "Chi-Squared Distance Metric Learning for Histogram Data" (https://doi.org/10.1155/2015/352849)
   * @param histA Float32Array object of first histogram
   * @param histB Float32Array object of second histogram
   * @param eps epsilon value to prevent divide by zero. Defaults to 1e-10
   * @returns Chi-Squared Distance of both histogram arrays
   */
  chi2Distance(histA: Float32Array, histB: Float32Array, eps = 1e-10) {
    return histA.map((a, i) => {
      let b = histB[i];
      return ((a - b) ** 2 / (a + b + eps))
    }).reduce((a, b) => a + b, 0);
  }

}
export const CharacterSearcher = new Searcher(tcgIndex.characters.map(
  (v) => ({ "name": v.name, "data": new Float32Array(v.data) }
  )));
export const ActionSearcher = new Searcher(tcgIndex.actions.map(
  (v) => ({ "name": v.name, "data": new Float32Array(v.data) }
  )));
export const CD = new ColorDescriptor([8, 12, 3]);


/**
 * 
 * @param image cv.Mat object of a single card
 * @param cd ColorDescriptor object
 * @param search Search object with corresponding index files
 * @returns the name of the card
 */
function searchCard(image: Mat, cd: ColorDescriptor, search: Searcher): string {
  // Describe each card and pick best match only
  let features = cd.describeImage(image);
  let results = search.search(features, 1);
  return results[0][0];
}
/**
 * Crop card according to size
 * @param image cv.Mat object of the image matrix
 * @param x X-coordinate in the image from top-left corner
 * @param y Y-coordinate in the image from top-left corner
 * @param w card width
 * @param h card height
 * @returns cv.Mat object containing the sub-matrix of the cropped section of the card
 */
function cropCard(image: Mat, x: number, y: number, w: number, h: number): Mat {
  let rect = new cv.Rect(x, y, w, h);
  let dst = new cv.Mat();
  dst = image.roi(rect);
  return dst;
}

/**
 * 
 * @param queryImage cv.Mat object of the whole screenshot image
 * @param characterSearcher Search object with character cards index
 * @param actionsSearcher Search object with action cards index
 * @returns `[{[id: string]: number}, {[id: string]: number}]` --
 * The first item contains the character cards identified, the second item contains the action cards identified. 
 * There should be 3 character cards and 30 action cards identified.
 */
export function readCards(queryImage: Mat): [{ [id: string]: number; }, { [id: string]: number; }] {
  // Check image size
  let h = queryImage.size().height;
  let w = queryImage.size().width;
  if (h !== 1630) {
    throw new RangeError(`Image height must be exactly 1630px! Input image height was ${h} px.`);
  }
  if (w !== 1200) {
    throw new RangeError(`Image width must be exactly 1200px! Input image height was ${w} px.`);
  }

  let characters: { [id: string]: number } = {};
  let actions: { [id: string]: number } = {};

  // Determine card name for each card
  for (let charPos of DIMENSIONS.characters.pos) {
    let cardImage = cropCard(queryImage, charPos[0], charPos[1], DIMENSIONS.characters.w, DIMENSIONS.characters.h);
    let cardId = searchCard(cardImage, CD, CharacterSearcher);
    characters[cardId] = 1;
    cardImage.delete();
  }
  console.debug('characters', characters);
  for (let actPos of DIMENSIONS.actions.pos) {
    let cardImage = cropCard(queryImage, actPos[0], actPos[1], DIMENSIONS.actions.w, DIMENSIONS.actions.h);
    let cardId = searchCard(cardImage, CD, ActionSearcher);
    if (cardId in actions)
      actions[cardId] += 1;
    else
      actions[cardId] = 1;
    cardImage.delete();
  }
  console.debug('actions', actions);

  return [characters, actions];
}
