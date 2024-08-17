function processImage() {
  // Some logic to generate or obtain the bitmap
  const bitmap = getBitmap();

  // Return the bitmap and undefined in an array
  return [bitmap, undefined];
}

const result = processImage();
console.log(result); // Output: [bitmap, undefined]
