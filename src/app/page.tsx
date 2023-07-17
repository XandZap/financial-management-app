import Header from "@/components/molecules/Header";
import { Goals, TotalBalance, Transactions, UpcomingBills } from "@/components/organisms";

export default function Home() {
  return (
    <div className="h-full w-full grid grid-cols-3 gap-8  max-lg:grid-cols-2 max-md:grid-cols-1">
      <TotalBalance />
      <Goals />
      <UpcomingBills />
      <Transactions className="row-span-2" />
      <TotalBalance className="col-span-2 max-md:col-span-1" />
      <TotalBalance className="col-span-2 max-md:col-span-1" />
    </div>
  );
}

