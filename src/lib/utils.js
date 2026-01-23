import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const buildDrawDate = (date, time) => {
  const [hours, minutes, seconds = 0] = time.split(":").map(Number);

  const drawDate = new Date(date);
  drawDate.setHours(+hours, +minutes, +seconds, 0);

  return drawDate;
};
