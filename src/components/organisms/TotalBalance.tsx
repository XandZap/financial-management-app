"use client";
import { convertStringToReal, getBalances, translateBalanceType } from "@/utils";
import ContentName from "../atoms/ContentName";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import SliderCard from "../ui/Slider";

interface props {
  className?: string;
}
const balances = getBalances();
const totalBalances = balances.reduce((total, balance) => total + Number(balance.amount), 0);

function TotalBalance({ className }: props) {
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
          <SliderCard>
            {balances.map((balance) => (
              <Card key={balance.accountName} className=" bg-primary/50 w-full max-w-full max-h-full m-auto">
                <CardHeader>
                  <CardTitle>{balance.accountName}</CardTitle>
                  <CardDescription>{translateBalanceType(balance.category)}</CardDescription>
                </CardHeader>
                <CardFooter className="font-bold">{convertStringToReal(balance.amount)}</CardFooter>
              </Card>
            ))}
          </SliderCard>
        </CardContent>
      </Card>
    </div>
  );
}

export default TotalBalance;
