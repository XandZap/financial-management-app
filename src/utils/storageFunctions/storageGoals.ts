"use client";

import { IGoal } from "../types";

const key = "goal";

export const setGoal = (value: IGoal[]) => {
  const setValue = JSON.stringify(value);
  localStorage.setItem(key, setValue);
};

export const getGoals = (): IGoal[] => {
  const goals = localStorage.getItem(key);
  if (goals) return JSON.parse(goals);
  else return [];
};

export const removeGoal = () => {
  localStorage.removeItem(key);
};

