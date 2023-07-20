"use client";

import { ITransaction } from "../types";

const key = "transaction";

export const setTransaction = (value: ITransaction[]) => {
  if (typeof window !== "undefined") {
    const setValue = JSON.stringify(value);
    localStorage.setItem(key, setValue);
  }
};

export const getTransactions = (): ITransaction[] => {
  if (typeof window !== "undefined") {
    const transactions = localStorage.getItem(key);
    if (transactions) return JSON.parse(transactions);
    else return [];
  } else return [];
};

export const removeTransaction = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

