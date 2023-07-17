"use client";
import { convertStringToReal, getBalances, translateBalanceType } from "@/utils";
import ContentName from "../atoms/ContentName";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

interface props {
  className?: string;
}
const balances = getBalances();
const totalBalances = balances.reduce((total, balance) => total + Number(balance.amount), 0);

function TotalBalance({ className }: props) {
  const [balanceIndex, setBalanceIndex] = useState(0);

  const changeBalance = (value: boolean) => {
    const balancesLength = balances.length - 1;
    if (value && balancesLength === balanceIndex) setBalanceIndex(0);
    else if (value && balancesLength !== balanceIndex) setBalanceIndex(balanceIndex + 1);
    else if (!value && balanceIndex === 0) setBalanceIndex(balancesLength);
    else setBalanceIndex(balanceIndex - 1);
  };

  return (
    <div className={" flex flex-col " + className}>
      <ContentName>Saldo Geral</ContentName>
      <Card className=" px-3 py-2">
        <CardHeader className=" flex flex-row justify-between">
          <CardTitle>{convertStringToReal(totalBalances)}</CardTitle>
          <CardDescription>
            <Link href={"/saldo"}>Todas as contas</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card className=" bg-primary/50 ">
            <CardHeader>
              <CardTitle>{balances[balanceIndex].accountName}</CardTitle>
              <CardDescription>{translateBalanceType(balances[balanceIndex].category)}</CardDescription>
            </CardHeader>
            <CardFooter className="font-bold">{convertStringToReal(balances[balanceIndex].amount)}</CardFooter>
          </Card>
        </CardContent>
        <CardFooter className="flex justify-around">
          <Button className="bg-primary" onClick={() => changeBalance(false)}>
            {"<-"}
          </Button>
          <Button className="bg-primary" onClick={() => changeBalance(true)}>
            {"->"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default TotalBalance;

