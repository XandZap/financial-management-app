"use client";

import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getGoals } from "@/utils/storageFunctions/storageGoals";
import { ContentName } from "../atoms";

import { getBalances } from "@/utils";

interface props {
  className?: string;
}

function Statistics({ className }: props) {
  const balances = getBalances();
  const goals = getGoals();

  const monthlyBalancesSum = balances.reduce((accumulator: { [key: string]: number }, obj) => {
    const { month, amount } = obj;
    accumulator[month] = (accumulator[month] || 0) + Number(amount);
    return accumulator;
  }, {});

  const monthlyGoalsSum = goals.reduce((accumulator: { [key: string]: number }, obj) => {
    const { month, achieved } = obj;
    accumulator[month] = (accumulator[month] || 0) + achieved;
    return accumulator;
  }, {});

  const balancesMonthlyData = Object.entries(monthlyBalancesSum).map(([month, amount]) => ({ month, amount }));
  const goalsMonthlyData = Object.entries(monthlyGoalsSum).map(([month, achieved]) => ({ month, achieved }));

  const data = balancesMonthlyData.map((balance) => {
    const goal = goalsMonthlyData.find((goal) => goal.month === balance.month);
    return {
      month: balance.month,
      Objetivo: goal ? goal.achieved : undefined,
      Saldo: balance.amount,
    };
  });

  return (
    <div className={" flex flex-col " + className}>
      <ContentName>Estatísticas</ContentName>
      <div className=" z-0 min-h-[250px] rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={200}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Saldo" fill="#299D91" />
              <Bar dataKey="Objetivo" fill="#191919" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex justify-center items-center">
            <p className=" text-primary">Insira seus Saldos e Objetivos mensais para gerar um gráfico</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Statistics;

