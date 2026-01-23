import { z } from "zod";
import { buildDrawDate } from "@/lib/utils";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const createRaffleFormSchema = z
  .object({
    // Basic Information
    title: z
      .string({ required_error: "Title is required" })
      .trim()
      .min(1, { error: "Title cannot be empty" })
      .max(50, { error: "Title must be at most 50 characters" }),
    description: z
      .string({ error: "Description is required" })
      .trim()
      .min(10, { error: "Description must be at least 10 characters" })
      .max(500, { error: "Description must be at most 500 characters" }),
    image: z
      .custom()
      .refine((files) => files?.length === 1, "Image is required")
      .refine(
        (files) => files?.[0]?.size <= 5 * 1024 * 1024,
        `Max file size is 5MB`,
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .png, and .webp formats are supported",
      ),

    // Ticket Configuration
    maxTickets: z.coerce
      .number({ invalid_type_error: "Max tickets must be a number" })
      .int({ error: "Max tickets must be an integer" })
      .positive({ error: "Max tickets must be positive" }),
    ticketPrice: z.coerce
      .number({ invalid_type_error: "Ticket price must be a number" })
      .nonnegative({ error: "Ticket price cannot be negative" }),
    minTicketsPerParticipant: z.coerce
      .number({ invalid_type_error: "Minimum tickets must be a number" })
      .int({ error: "Minimum tickets must be an integer" })
      .min(1, {
        error: "Minimum tickets per participant must be at least 1",
      }),
    maxTicketsPerParticipant: z.coerce
      .number({ invalid_type_error: "Maximum tickets must be a number" })
      .int({ error: "Maximum tickets must be an integer" })
      .min(1, {
        error: "Maximum tickets per participant must be at least 1",
      }),

    // Schedule Raffle (input-only)
    date: z.coerce
      .date({ invalid_type_error: "Please provide a valid date" })
      .refine((date) => date > new Date(), "Date must be in the future"),
    time: z
      .string({ error: "Time is required" })
      .min(1, { error: "Time cannot be empty" }),

    // Bank Accounts
    bankName: z
      .string({ error: "Bank name is required" })
      .trim()
      .min(1, { error: "Bank name cannot be empty" }),
    accountNumber: z
      .string({ error: "Account number is required" })
      .trim()
      .min(3, { error: "Account number must be at least 3 characters" }),
    accountType: z.enum(["savings", "checking"], {
      error: "Account type is required",
      invalid_type_error: "Invalid account type",
    }),
    accountHolder: z
      .string({ error: "Account holder is required" })
      .trim()
      .min(1, { error: "Account holder cannot be empty" }),
  })
  .transform(({ date, time, ...rest }) => ({
    ...rest,
    drawDate: buildDrawDate(date, time),
  }));

export const createRaffleFormDefaultValues = {
  // Basic Information
  title: "",
  description: "",
  image: undefined,

  // Ticket Configuration
  maxTickets: 1000,
  ticketPrice: 100,
  minTicketsPerParticipant: 1,
  maxTicketsPerParticipant: 10,

  // Schedule Raffle
  date: new Date(),
  time: "",

  // Bank Accounts
  bankName: "",
  accountNumber: "",
  accountType: undefined,
  accountHolder: "",
};
