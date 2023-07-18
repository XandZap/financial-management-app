'use client'
import { getTransactions } from "@/utils/storageFunctions/storageTransactions";
import ContentName from "../atoms/ContentName";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface props {
  className?: string;
}

function Transactions({ className }: props) {
  const transactions = getTransactions();

  return (
    <div className={" flex flex-col " + className}>
      <ContentName>Transações Recentes</ContentName>
      <Card className=" px-3 py-2 h-full">
        <CardHeader className=" flex flex-row justify-between">
          <CardTitle>Todas - Receita - Respesas</CardTitle>
        </CardHeader>
        <CardContent>
          {transactions.map((transaction) => (
            <div key={transaction.transaction} className="flex justify-between">
              <span>{transaction.transaction}</span>
              <span className="text-left">R$ {transaction.value}</span>
            </div>
          ))}
        </CardContent>
        <CardFooter>{""}</CardFooter>
      </Card>
    </div>
  );
}

export default Transactions;

