"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardFooter } from "../ui/card";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { getBills, setBill } from "@/utils/storageFunctions/storageBills";
import { IBills } from "@/utils/types";
import { cn } from "@/lib/utils";
import { BiCalendar } from "react-icons/bi";

const formSchema = z.object({
  date: z.date({
    required_error: "A date of birth is required.",
  }),
  title: z.string(),
  category: z.string(),
  value: z.string().refine((value) => {
    if (Number(value) <= 0) return false;
    return true;
  }, "O valor precisa ser um número válido e maior ou igual a zero com no máximo duas casas decimais."),
});

interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const bills = getBills();

function AddBill({ setIsOpen }: props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const billToSet: IBills = {
      ...values,
      date: values.date.toString(),
      value: Number(values.value),
    };

    bills.push(billToSet);

    setBill(bills);
    setIsOpen(false);
  }

  return (
    <div className="absolute z-50 bg-zinc-800/60 top-0 left-0 flex justify-center items-center h-full w-full">
      <Card className="relative p-4 w-1/4 max-md:w-11/12">
        <Button
          className=" absolute bg-transparent w-2 h-7 hover:bg-default-black/50 hover:text-zinc-50 text-zinc-500 right-1 top-1"
          onClick={() => setIsOpen(false)}
        >
          x
        </Button>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-3 mt-3 justify-center">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data de pagamento: </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP", { locale: ptBR })
                          ) : (
                            <span>Escolha a data</span>
                          )}
                          <BiCalendar className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        locale={ptBR}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da despesa: </FormLabel>
                  <FormControl>
                    <Input type="string" placeholder="Cartão do banco..." {...field} />
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
                  <FormLabel>Categoria: </FormLabel>
                  <FormControl>
                    <Input type="string" placeholder="Boleto..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor: </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="R$ 1000,00" {...field} />
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

export default AddBill;

