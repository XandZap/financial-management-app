"use client";
import { getBills } from "@/utils/storageFunctions/storageBills";
import ContentName from "../atoms/ContentName";
import Bill from "../molecules/Bill";
import { Card } from "../ui/card";
import { Button } from "../ui";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import { AddBill } from "../molecules";
import Link from "next/link";

interface props {
  className?: string;
}

function UpcomingBills({ className }: props) {
  const [isOpen, setIsOpen] = useState(false);

  const bills = getBills();

  return (
    <div className={" flex flex-col " + className}>
      <ContentName>
        <div>
          Próximas Contas
          <Button
            className=" p-0 bg-transparent text-default-black/60 ml-2 h-1 hover:bg-transparent"
            onClick={() => setIsOpen(true)}
          >
            <BiEdit className="text-sm" />
          </Button>
        </div>
        <Link href='/despesas' className=" text-base mr-3">Ver Mais</Link>
      </ContentName>

      <Card className=" px-3 py-2 h-full">
        {bills.map((bill, index) => index < 3 && <Bill key={bill.title} bill={bill} />)}
      </Card>
      {isOpen && <AddBill setIsOpen={setIsOpen} />}
    </div>
  );
}

export default UpcomingBills;

