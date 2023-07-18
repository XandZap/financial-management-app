"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardFooter } from "../ui/card";
import { getBalances, setBalance } from "@/utils/storageFunctions/storageBalances";

const formSchema = z.object({
  accountName: z.string().min(2, {
    message: "Nome deve ser maior que 2 caracteres.",
  }),
  category: z.string(),
  amount: z.string().refine((value) => {
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

function AddBalance({ setIsOpen }: props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountName: "",
      amount: "",
      category: "bank",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const balances = getBalances();

    balances.push(values);

    setBalance(balances);
    setIsOpen(false);
  }

  return (
    <div className="absolute bg-zinc-800/60 top-0 left-0 flex justify-center items-center h-screen w-screen">
      <Card className="relative p-4 w-1/2 max-md:w-11/12">
        <Button
          className=" absolute bg-transparent w-2 h-7 hover:bg-default-black/50 hover:text-zinc-50 text-zinc-500 right-1 top-1"
          onClick={() => setIsOpen(false)}
        >
          x
        </Button>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" grid grid-cols-2 gap-4 mt-3 justify-center max-md:grid-cols-1 "
          >
            <FormField
              control={form.control}
              name="accountName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Conta</FormLabel>
                  <FormControl>
                    <Input placeholder="Banco..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu método de pagamento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="bank">Banco</SelectItem>
                      <SelectItem value="investment">Investimento</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor total</FormLabel>
                  <FormControl>
                    <Input placeholder="R$00,00..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter className=" col-span-2 mt-4 flex items-center justify-center">
              <Button type="submit" className=" bg-primary">
                Salvar
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}

export default AddBalance;

