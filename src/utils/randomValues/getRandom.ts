export const getRandomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomElement = (elementsNames: string[]) =>
  elementsNames[getRandomValue(0, elementsNames.length - 1)];
