"use client";

import { IGoal } from "../types";

const key = "goal";

export const setGoal = (value: IGoal[]) => {
  if (typeof window !== "undefined") {
    const setValue = JSON.stringify(value);
    localStorage.setItem(key, setValue);
  }
};

export const getGoals = (): IGoal[] => {
  if (typeof window !== "undefined") {
    const goals = localStorage.getItem(key);
    if (goals) return JSON.parse(goals);
    else return [];
  } else return [];
};

export const removeGoal = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

