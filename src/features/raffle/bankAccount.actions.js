"use server";

import { createClient } from "@/lib/supabase/server";

export const createBankAccount = async ({
  raffleId,
  bankName,
  accountNumber,
  accountType,
  accountHolder,
}) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bank_account")
    .insert({
      raffle_id: raffleId,
      bank_name: bankName,
      account_number: accountNumber,
      account_type: accountType,
      account_holder: accountHolder,
    })
    .select();

  if (error || !data) throw error;

  return data[0];
};
