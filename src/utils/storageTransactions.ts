"use client";

import { ITransaction } from "./types";

const key = "transaction";

export const setTransaction = (value: ITransaction[]) => {
  const setValue = JSON.stringify(value);
  localStorage.setItem(key, setValue);
};

export const getTransactions = (): ITransaction[] => {
  const transactions = localStorage.getItem(key);
  if (transactions) return JSON.parse(transactions);
  else return [];
};

export const removeTransaction = () => {
  localStorage.removeItem(key);
};

