import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Folder, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RafflesEmpty = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Folder />
        </EmptyMedia>
        <EmptyTitle>No Raffles Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any raffles yet. Get started by creating your
          first raffle.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" asChild>
          <Link href="/dashboard/raffles/new-raffle">
            <Plus />
            Create Raffle
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
};

export default RafflesEmpty;
