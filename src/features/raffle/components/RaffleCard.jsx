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
import { Pause } from "lucide-react";

const RaffleCard = () => {
  return (
    <Card>
      <CardHeader>
        <Badge>Active</Badge>
        <CardTitle>Combo KTM Navideño</CardTitle>
        <CardDescription>
          <ItemDescription>
            Ganate 1 de estas 2 KTM Duke 390 0KM o $50,000 DOP este 31 de
            Diciembre (con el 100% vendido).
          </ItemDescription>
        </CardDescription>
      </CardHeader>
      <CardFooter className="space-x-1.5">
        <Button className="w-[70%]" asChild>
          <Link href={"/dashboard/raffles/1"}>Manage Raffle</Link>
        </Button>
        <Button className="w-[30%]" variant="outline">
          <Pause />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RaffleCard;
