"use client";
import { getTransactions } from "@/utils/storageFunctions/storageTransactions";
import ContentName from "../atoms/ContentName";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { convertStringToReal } from "@/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

interface props {
  className?: string;
}

function Transactions({ className }: props) {
  const transactions = getTransactions();

  return (
    <div className={" flex flex-col " + className}>
      <ContentName>Transações Recentes</ContentName>
      <Card className=" px-3 py-2 h-full">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transação</TableHead>
                <TableHead>Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.transaction} className=" text-default-black/80">
                  <TableCell className="font-semibold">{transaction.transaction}</TableCell>
                  <TableCell className="">{convertStringToReal(transaction.value)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Transactions;

