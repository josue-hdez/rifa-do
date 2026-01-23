import GoBackButton from "@/components/GoBackButton";
import { Separator } from "@/components/ui/separator";
import { CreateRaffleForm } from "@/features/raffle";

const Page = () => {
  return (
    <main className="w-full max-w-3xl mx-auto p-6 space-y-6">
      <GoBackButton />
      <h1 className="font-bold text-3xl">Create Raffle</h1>
      <Separator />
      <CreateRaffleForm />
    </main>
  );
};

export default Page;
