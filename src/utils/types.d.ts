export type ITransaction = {
  transaction: string;
  place: string;
  payment: string;
  category: string;
  value: string;
};

export type IBalance = {
  accountName: string;
  amount: string;
  category: string;
  month: string;
};

export type IGoal = {
  monthTotal: number;
  achieved: number;
  month: string;
};

export type IBills = {
  date: string;
  title: string;
  category: string;
  value: number;
};

