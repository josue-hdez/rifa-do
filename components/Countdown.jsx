"use client";

import { useEffect, useMemo, useState } from "react";
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

export default Countdown;
