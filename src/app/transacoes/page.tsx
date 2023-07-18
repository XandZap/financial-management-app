"use client";
import { useState } from "react";

import { ContentName } from "@/components/atoms";
import { AddTransaction } from "@/components/molecules";
import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Card,
} from "@/components/ui";
import { getTransactions, translateTransactionCategory, translateTransactionPayment } from "@/utils";

function Transações() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const transactions = getTransactions();

  return (
    <>
      <div className="flex justify-between mb-7 mx-10">
        <ContentName>Transações</ContentName>
        <Button className=" bg-primary" onClick={() => setIsOpen(true)}>
          Adicionar
        </Button>
      </div>
      <Card className=" mx-10 min-h-[500px] max-md:min-h-full">
        <Table className=" ">
          {transactions.length <= 0 && <TableCaption>Lista de transações realizadas.</TableCaption>}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Item</TableHead>
              <TableHead>Local de compra</TableHead>
              <TableHead>Método de pagamento</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.transaction}>
                <TableCell className="font-medium">{transaction.transaction}</TableCell>
                <TableCell>{transaction.place}</TableCell>
                <TableCell>{translateTransactionPayment(transaction.payment)}</TableCell>
                <TableCell>{translateTransactionCategory(transaction.category)}</TableCell>
                <TableCell className="text-right">R$ {transaction.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      {isOpen && <AddTransaction setIsOpen={setIsOpen} />}
    </>
  );
}

export default Transações;

