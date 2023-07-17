"use client";

import { IBalance } from "./types";

const key = "balance";

export const setBalance = (value: IBalance[]) => {
  const setValue = JSON.stringify(value);
  localStorage.setItem(key, setValue);
};

export const getBalances = (): IBalance[] => {
  const balances = localStorage.getItem(key);
  if (balances) return JSON.parse(balances);
  else return [];
};

export const removeBalance = () => {
  localStorage.removeItem(key);
};

