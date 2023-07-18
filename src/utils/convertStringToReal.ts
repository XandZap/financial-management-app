export const convertStringToReal = (value: string | Number | undefined) => {
  if (!value) return Number(0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  return Number(value).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};

