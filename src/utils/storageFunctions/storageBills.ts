"use client";

import { IBills } from "../types";

const key = "bill";

export const setBill = (value: IBills[]) => {
  const setValue = JSON.stringify(value);
  localStorage.setItem(key, setValue);
};

export const getBills = (): IBills[] => {
  const bills = localStorage.getItem(key);
  if (bills) return JSON.parse(bills);
  else return [];
};

export const removeBill = () => {
  localStorage.removeItem(key);
};

