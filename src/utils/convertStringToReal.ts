export const convertStringToReal = (value: string | Number) => {
  return Number(value).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};

