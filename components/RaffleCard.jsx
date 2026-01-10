"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { calculateTimeLeft } from "@/lib/calculateTimeLeft";

function Countdown({ targetDate }) {
  const target = useMemo(() => new Date(targetDate), [targetDate]);
  const [{ days, hours, minutes, seconds }, setTimeLeft] = useState(() =>
    calculateTimeLeft(target)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex-col-center">
        <span className="text-3xl">{days}</span>
        <span className="text-xs sm:text-sm">Dias</span>
      </div>
      <div className="flex-col-center">
        <span className="text-3xl">{hours}</span>
        <span className="text-xs sm:text-sm">Horas</span>
      </div>
      <div className="flex-col-center">
        <span className="text-3xl">{minutes}</span>
        <span className="text-xs sm:text-sm">Minutos</span>
      </div>
      <div className="flex-col-center">
        <span className="text-3xl">{seconds}</span>
        <span className="text-xs sm:text-sm">Segundos</span>
      </div>
    </div>
  );
}

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
        <div className="w-full h-3 bg-white rounded-full overflow-hidden">
          <div className="h-full w-[30%] bg-primary" />
        </div>
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
