import { months } from "../months";
import { setBalance } from "../storageFunctions/storageBalances";
import { getRandomElement, getRandomValue } from "./getRandom";

const generateRandomBalance = () => {
  const accountNames = [];
  for (let i = 1; i <= 5; i++) {
    accountNames.push(`Conta ${i}`);
  }

  const categories = ["bank", "investment", "other"];

  const randomArrayLength = getRandomValue(5, 12);
  const randomBalanceArray = [];

  for (let i = 0; i < randomArrayLength; i++) {
    const newBalance = {
      accountName: getRandomElement(accountNames),
      amount: String(getRandomValue(100, 10000)),
      category: getRandomElement(categories),
      month: getRandomElement(months),
    };
    randomBalanceArray.push(newBalance);
  }

  return randomBalanceArray;
};

export const setRandomBalances = () => {
  setBalance(generateRandomBalance());
};

