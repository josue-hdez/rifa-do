"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ItemDescription } from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RaffleCard = ({ raffle }) => {
  return (
    <Card>
      <CardHeader>
        <Badge className="capitalize">{raffle.status}</Badge>
        <CardTitle>{raffle.title}</CardTitle>
        <CardDescription>
          <ItemDescription>{raffle.description}</ItemDescription>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/dashboard/raffles/${raffle.id}`}>Manage Raffle</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RaffleCard;
