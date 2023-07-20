"use client";

import { IBalance } from "../types";

const key = "balance";

export const setBalance = (value: IBalance[]) => {
  if (typeof window !== "undefined") {
    const setValue = JSON.stringify(value);
    localStorage.setItem(key, setValue);
  }
};

export const getBalances = (): IBalance[] => {
  if (typeof window !== "undefined") {
    const balances = localStorage.getItem(key);
    if (balances) return JSON.parse(balances);
    else return [];
  } else return [];
};

export const removeBalance = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

