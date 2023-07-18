"use client";
import { useState } from "react";
import ContentName from "@/components/atoms/ContentName";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { getBills } from "@/utils/storageFunctions/storageBills";
import { convertStringToReal } from "@/utils";
import { AddBill } from "@/components/molecules";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

function Bills() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const bills = getBills();

  return (
    <>
      <div className="flex justify-between mb-7 mx-10">
        <ContentName>Próximas contas</ContentName>
        <Button className=" bg-primary" onClick={() => setIsOpen(true)}>
          Adicionar Conta
        </Button>
      </div>
      <Card className=" mx-10 min-h-[500px] max-md:min-h-full">
        <Table className=" ">
          {Bills.length <= 0 && <TableCaption>Lista de contas a pagar.</TableCaption>}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Data</TableHead>
              <TableHead>Titulo</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bills.map((bill) => (
              <TableRow key={bill.title}>
                <TableCell className="font-medium">
                  {format(new Date(bill.date), "PP", { locale: ptBR })}
                </TableCell>
                <TableCell className="font-medium">{bill.title}</TableCell>
                <TableCell className="font-medium">{bill.category}</TableCell>
                <TableCell className="font-medium">{convertStringToReal(bill.value)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      {isOpen && <AddBill setIsOpen={setIsOpen} />}
    </>
  );
}

export default Bills;

