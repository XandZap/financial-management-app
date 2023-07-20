"use client";

import { IBills } from "../types";

const key = "bill";

export const setBill = (value: IBills[]) => {
  if (typeof window !== "undefined") {
    const setValue = JSON.stringify(value);
    localStorage.setItem(key, setValue);
  }
};

export const getBills = (): IBills[] => {
  if (typeof window !== "undefined") {
    const bills = localStorage.getItem(key);
    if (bills) return JSON.parse(bills);
    else return [];
  } else return [];
};

export const removeBill = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

