"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardFooter } from "../ui/card";
import { getTransactions, setTransaction } from "@/utils/storageTransactions";

const formSchema = z.object({
  transaction: z.string().min(2, {
    message: "Nome deve ser maior que 2 caracteres.",
  }),
  place: z.string(),
  payment: z.string(),
  category: z.string(),
  value: z.string().refine((value) => {
    if (Number(value) <= 0) {
      return false;
    }

    if (value.includes(",") && value.split(",")[1].length > 2) {
      return false;
    }

    return true;
  }, "O valor precisa ser um número válido e maior ou igual a zero com no máximo duas casas decimais."),
});

interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddTransaction({ setIsOpen }: props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transaction: "",
      place: "-",
      payment: "pix",
      category: "expense",
      value: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const transactions = getTransactions();

    transactions.push(values);

    setTransaction(transactions);
    setIsOpen(false);
  }

  return (
    <div className="absolute bg-zinc-800/60 top-0 left-0 flex justify-center items-center h-screen w-screen">
      <Card className=" relative p-4 w-1/2 max-md:w-11/12">
        <Button
          className=" absolute bg-transparent w-2 h-7 hover:bg-default-black/50 hover:text-zinc-50 text-zinc-500 right-1 top-1"
          onClick={() => setIsOpen(false)}
        >
          x
        </Button>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" grid grid-cols-2 gap-8  max-md:grid-cols-1">
            <FormField
              control={form.control}
              name="transaction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do item</FormLabel>
                  <FormControl>
                    <Input placeholder="Carrinho de brinquedo..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="place"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Local de compra</FormLabel>
                  <FormControl>
                    <Input placeholder="Loja ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="payment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Método de pagamento</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu método de pagamento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="pix">Pix</SelectItem>
                      <SelectItem value="credit">Cartão de crédito</SelectItem>
                      <SelectItem value="debit">Cartão de débito</SelectItem>
                      <SelectItem value="money">Dinheiro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria da Transação</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="expense">Despesa</SelectItem>
                      <SelectItem value="bill">Conta</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="R$ " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter className=" col-span-2 mt-4 flex items-center justify-center">
              <Button type="submit" className=" bg-primary">
                Salvar Transação
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}

export default AddTransaction;

