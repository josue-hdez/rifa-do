"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/cn";

const Countdown = dynamic(() => import("./Countdown"), {
  ssr: false,
});

const RaffleCard = ({ id, title, image, drawDate, status }) => {
  return (
    <article className="max-w-100 bg-dark-300 border border-dark-100 rounded-xl relative flex-col-center">
      <span
        className={cn(
          "py-1 px-3 text-xs rounded-full absolute top-3 left-3",
          status.toLowerCase() === "activa" ? "bg-green" : "bg-yellow"
        )}
      >
        {status}
      </span>
      <Image
        className="w-full object-cover object-center"
        src={image}
        alt="Raffle Image"
        width={260}
        height={178}
      />
      <div className="p-3 space-y-3">
        <h4 className="text-lg font-bold">{title}</h4>
        <p>
          30% de <span className="text-green">Boletos vendidos</span>
        </p>
        <Progress value={30} />
        <p>Tiempo restante</p>
        <Countdown targetDate={drawDate} />
        <Link
          href={`/raffles/${id}`}
          className="block py-2 px-4 sm:py-4 sm:px-6 text-sm sm:text-base text-center border-none outline-none cursor-pointer rounded-md bg-primary"
        >
          Participar
        </Link>
      </div>
    </article>
  );
};

export default RaffleCard;
