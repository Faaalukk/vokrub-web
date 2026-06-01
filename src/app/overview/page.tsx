import { Coins, Crown, Users } from "lucide-react";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import RevenueCard from "../components/RevenueCard";
import MostStoredWords from "../components/MostStoredWord";
import Transactions from "../components/Transactions";

export default function Overview() {
  return (
    <div className="bg-background">
      <Header title="Overview" />
      <div className="py-6 px-6 flex flex-col gap-6">
        <div className="flex items-stretch gap-4">
          <SummaryCard
            icon={<Coins size={18} />}
            amount="$3,540"
            label="Monthly revenue"
            change={13.5}
          ></SummaryCard>
          <SummaryCard
            icon={<Users size={18} />}
            amount="$4,917"
            label="Monthly revenue"
            change={8.2}
          ></SummaryCard>
          <SummaryCard
            icon={<Crown size={18} />}
            amount="$612"
            label="Monthly revenue"
            change={11}
          ></SummaryCard>
          <SummaryCard
            icon={<Coins size={18} />}
            amount="$1,284"
            label="Active Today"
            change={-2.1}
          ></SummaryCard>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4">
            <RevenueCard></RevenueCard>
          </div>
          <div className="col-span-2">
            <MostStoredWords></MostStoredWords>
          </div>
        </div>
        <div className="">
          <Transactions />
        </div>
      </div>
    </div>
  );
}
