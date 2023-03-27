export const generateRandomNumber = (
  min = 0,
  max = 1,
  roundUp = false,
  roundDown = false
) => {
  const randomNumber = Math.random() * (max - min) + min;
  if (roundUp) {
    return Math.ceil(randomNumber);
  } else if (roundDown) {
    return Math.floor(randomNumber);
  }
  return randomNumber;
};
