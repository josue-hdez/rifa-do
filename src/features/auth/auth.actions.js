"use server";

import { createClient } from "@/lib/supabase/server";

export const signInWithEmail = async ({ email, password }) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data) throw error;

  return data;
};
