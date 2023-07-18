"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Card, CardFooter } from "../ui/card";
import { getGoals, setGoal } from "@/utils/storageFunctions/storageGoals";
import { IGoal } from "@/utils/types";
import { format } from "date-fns";

const formSchema = z.object({
  targetAmount: z.string().refine((value) => {
    if (Number(value) <= 0) return false;
    return true;
  }, "O valor precisa ser um número válido e maior ou igual a zero com no máximo duas casas decimais."),
  achievedAmount: z.string().refine((value) => {
    if (Number(value) <= 0) return false;
    return true;
  }, "O valor precisa ser um número válido e maior ou igual a zero com no máximo duas casas decimais."),
});

interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const goals = getGoals();
const month = format(new Date(), "MMM");
const goalIndex = goals.findIndex((goal) => goal.month === month);

function AddGoal({ setIsOpen }: props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      achievedAmount: goals[goalIndex]?.achieved.toString(),
      targetAmount: goals[goalIndex]?.monthTotal.toString(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const goalToSet: IGoal = {
      achieved: Number(values.achievedAmount),
      month,
      monthTotal: Number(values.targetAmount),
    };

    if (goalIndex >= 0) goals[goalIndex] = goalToSet;
    else goals.push(goalToSet);

    setGoal(goals);
    setIsOpen(false);
  }

  return (
    <div className="absolute bg-zinc-800/60 top-0 left-0 flex justify-center items-center h-screen w-screen">
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
              name="targetAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor que você deseja acumular no mês: </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="R$ 1000,00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="achievedAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor que você já possui: </FormLabel>
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

export default AddGoal;

