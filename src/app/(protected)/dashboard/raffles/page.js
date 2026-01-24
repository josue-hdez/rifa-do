import { getRaffles } from "@/features/raffle/raffle.actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { RafflesEmpty, RaffleCard } from "@/features/raffle";

const Page = async () => {
  const raffles = await getRaffles();

  return (
    <main className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl">My Raffles</h1>
          <p>Manage all your raffles from a single place.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/raffles/new-raffle">
            <Plus />
            Create Raffle
          </Link>
        </Button>
      </div>
      <Separator className="my-6" />
      {!raffles.length && <RafflesEmpty />}
      {raffles.length ? (
        <div className="grid grid-cols-3 gap-3">
          {raffles.map((raffle) => (
            <RaffleCard key={raffle.id} raffle={raffle} />
          ))}
        </div>
      ) : null}
    </main>
  );
};

export default Page;
