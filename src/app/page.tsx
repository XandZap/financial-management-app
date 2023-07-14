import Header from "@/components/molecules/Header";
import { Goals, TotalBalance, Transactions, UpcomingBills } from "@/components/organisms";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-between bg-grey">
      <Header />
      <div className="h-full w-full grid grid-cols-3 gap-8 px-2 py-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        <TotalBalance />
        <Goals />
        <UpcomingBills />
        <Transactions className="row-span-2" />
        <TotalBalance className="col-span-2 max-md:col-span-1" />
        <TotalBalance className="col-span-2 max-md:col-span-1" />
      </div>
    </main>
  );
}

