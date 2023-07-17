export const translateBalanceType = (category: string): string => {
  const balanceTypes: { [key: string]: string } = {
    bank: "Banco",
    investment: "Investimento",
  };

  return balanceTypes[category];
};

export const translateTransactionPayment = (payment: string) => {
  const paymentTypes: { [key: string]: string } = {
    pix: "Pix",
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    money: "Dinheiro",
  };
  return paymentTypes[payment];
};

export const translateTransactionCategory = (category: string) => {
  const categoryTypes: { [key: string]: string } = {
    expense: "Despesa",
    bill: "Conta",
  };
  return categoryTypes[category];
};

