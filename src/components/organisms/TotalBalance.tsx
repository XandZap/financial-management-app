"use client";
import Link from "next/link";
import { Carousel } from "flowbite-react";
import { ContentName } from "../atoms";
import { convertStringToReal, getBalances, translateBalanceType } from "@/utils";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import EmptyAlert from "../atoms/EmptyAlert";

interface props {
  className?: string;
}

function TotalBalance({ className }: props) {
  const balances = getBalances();
  const totalBalances = balances.reduce((total, balance) => total + Number(balance.amount), 0);

  return (
    <div className={" flex flex-col " + className}>
      <ContentName>Saldo Geral</ContentName>
      <Card className=" px-3 py-2 h-full overflow-hidden">
        <CardHeader className=" flex flex-row justify-between">
          <CardTitle>{convertStringToReal(totalBalances)}</CardTitle>
          <CardDescription>
            <Link href={"/saldo"}>Todas as contas</Link>
          </CardDescription>
        </CardHeader>
        {balances.length > 0 ? (
          <Carousel
            leftControl={<BsArrowLeftCircle />}
            rightControl={<BsArrowRightCircle />}
            className=" p-0 m-0 h-[170px] text-zinc-50"
          >
            {balances.map((balance) => (
              <Card key={balance.accountName} className=" bg-primary/80 w-full h-full text-zinc-50 px-4  ">
                <CardHeader>
                  <CardTitle>{balance.accountName}</CardTitle>
                  <CardDescription>{translateBalanceType(balance.category)}</CardDescription>
                </CardHeader>
                <CardFooter className="font-bold">{convertStringToReal(balance.amount)}</CardFooter>
              </Card>
            ))}
          </Carousel>
        ) : (
          <EmptyAlert href="/saldo">Clique aqui para inserir uma conta e seu saldo</EmptyAlert>
        )}
      </Card>
    </div>
  );
}

export default TotalBalance;
