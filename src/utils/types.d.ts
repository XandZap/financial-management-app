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
};
