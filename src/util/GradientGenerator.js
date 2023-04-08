import { generateRandomNumber } from "./RandomNumberGenerator";

const getRandomGradient = (colorPalette) => {
  const numColors = colorPalette.length;
  const numLeft = generateRandomNumber(0, numColors, false, true);
  let numRight = generateRandomNumber(0, numColors, false, true);

  while (numLeft === numRight) {
    numRight = generateRandomNumber(0, numColors, false, true);
  }

  return {
    colorLeft: colorPalette[numLeft],
    colorRight: colorPalette[numRight],
  };
};

export default getRandomGradient;
