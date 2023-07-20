import { months } from "../months";
import { setGoal } from "../storageFunctions/storageGoals";
import { getRandomElement, getRandomValue } from "./getRandom";

const generateRandomGoal = () => {
  const randomArrayLength = getRandomValue(5, 12);
  const randomGoalArray = [];

  for (let i = 0; i < randomArrayLength; i++) {
    const newGoal = {
      monthTotal: getRandomValue(1000, 5000),
      achieved: getRandomValue(100, 5000),
      month: getRandomElement(months),
    };
    randomGoalArray.push(newGoal);
  }

  return randomGoalArray;
};

export const setRandomGoals = () => {
  setGoal(generateRandomGoal());
};

