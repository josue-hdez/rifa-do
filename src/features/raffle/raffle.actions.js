"use server";

import { createClient } from "@/lib/supabase/server";

export const createRaffle = async ({
  title,
  description,
  image,
  maxTickets,
  ticketPrice,
  minTicketsPerParticipant,
  maxTicketsPerParticipant,
  drawDate,
}) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("raffle")
    .insert({
      title,
      description,
      max_tickets: maxTickets,
      ticket_price: ticketPrice,
      min_tickets_per_participant: minTicketsPerParticipant,
      max_tickets_per_participant: maxTicketsPerParticipant,
      draw_date: drawDate,
    })
    .select();

  if (error || !data) throw error;

  return data[0];
};
