import cv, { Mat } from "opencv-ts";


export class ColorDescriptor {

  bins: number[];

  /**
   * Color Descriptor object used to extract features from an image
   * @param bins Number of bins in histogram created for each channel. Default is to use [8, 12, 3]
   */
  constructor(bins: number[] = [8, 12, 3]) {
    this.bins = bins;
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

export const CD = new ColorDescriptor([8, 12, 3]);

