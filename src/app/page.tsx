import { Goals, Statistics, TotalBalance, Transactions, UpcomingBills } from "@/components/organisms";

export default function Home() {
  return (
    <div className="h-full w-full grid grid-cols-3 gap-8  max-xl:grid-cols-2 max-md:grid-cols-1">
      <TotalBalance />
      <Goals />
      <UpcomingBills />
      <Transactions className="row-span-2" />
      <Statistics className="col-span-2 max-md:col-span-1" />
    </div>
  );
}

