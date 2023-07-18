"use client";
import { getBills } from "@/utils/storageFunctions/storageBills";
import ContentName from "../atoms/ContentName";
import Bill from "../molecules/Bill";
import { Card } from "../ui/card";

interface props {
  className?: string;
}

function UpcomingBills({ className }: props) {
  const bills = getBills();

  return (
    <div className={" flex flex-col " + className}>
      <ContentName>Próximas Contas</ContentName>
      <Card className=" px-3 py-2 h-full">
        {bills.map((bill) => (
            <Bill key={bill.title} bill={bill} />
        ))}
      </Card>
    </div>
  );
}

export default UpcomingBills;

