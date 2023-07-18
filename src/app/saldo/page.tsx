"use client";
import { useState } from "react";
import { ContentName } from "@/components/atoms";
import { AddBalance } from "@/components/molecules";
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { convertStringToReal, getBalances, translateBalanceType } from "@/utils";

function Balances() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const balances = getBalances();

  return (
    <>
      <div className="flex justify-between mb-7 mx-10">
        <ContentName>Saldos</ContentName>
        <Button className=" bg-primary" onClick={() => setIsOpen(true)}>
          Adicionar
        </Button>
      </div>
      <div className="grid grid-cols-4 mx-10 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
        {balances.map((balance) => (
          <Card key={balance.accountName}>
            <CardHeader>
              <CardTitle>{balance.accountName}</CardTitle>
            </CardHeader>
            <CardContent className=" text-default-black/60">{translateBalanceType(balance.category)}</CardContent>
            <CardFooter>{convertStringToReal(balance.amount)}</CardFooter>
          </Card>
        ))}
      </div>
      {isOpen && <AddBalance setIsOpen={setIsOpen} />}
    </>
  );
}

export default Balances;

