"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createRaffleFormSchema,
  createRaffleFormDefaultValues,
} from "../schemas/createRaffleForm.schema";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";
import BasicInfoStep from "./BasicInfoStep";
import TicketConfigStep from "./TicketConfigStep";
import ScheduleRaffleStep from "./ScheduleRaffleStep";
import BankAccountsStep from "./BankAccountsStep";
import SummaryStep from "./SummaryStep";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const STEPS = [
  {
    id: 0,
    title: "Basic Information",
    fields: ["title", "description", "image"],
  },
  {
    id: 1,
    title: "Ticket Configuration",
    fields: [
      "maxTickets",
      "ticketPrice",
      "minTicketsPerParticipant",
      "maxTicketsPerParticipant",
    ],
  },
  {
    id: 2,
    title: "Schedule Raffle",
    fields: ["date", "time"],
  },
  {
    id: 3,
    title: "Bank Accounts",
    fields: ["bankName", "accountNumber", "accountType", "accountHolder"],
  },
];

const CreateRaffleForm = () => {
  const form = useForm({
    resolver: zodResolver(createRaffleFormSchema),
    mode: "onTouched",
    defaultValues: createRaffleFormDefaultValues,
  });
  const { steps, currentStep, isLastStep, nextStep, prevStep, markAsLastStep } =
    useMultiStepForm(STEPS, form.trigger);

  const onSubmit = (values) => {
    if (!isLastStep.current) return;

    console.log(values);
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">
          {steps[currentStep]?.title || "Summary"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id="create-raffle-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {currentStep === 0 && <BasicInfoStep form={form} />}
            {currentStep === 1 && <TicketConfigStep form={form} />}
            {currentStep === 2 && <ScheduleRaffleStep form={form} />}
            {currentStep === 3 && <BankAccountsStep form={form} />}
          </FieldGroup>
        </form>
        {currentStep === 4 && <SummaryStep values={form.getValues()} />}
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between">
          {currentStep > 0 && (
            <Button
              className="w-[49%]"
              type="button"
              variant="outline"
              onClick={prevStep}
            >
              <ArrowLeft />
              Back
            </Button>
          )}
          {currentStep < steps.length ? (
            <Button
              className={cn(currentStep === 0 ? "w-full" : "w-[49%]")}
              type="button"
              onClick={nextStep}
            >
              Next
              <ArrowRight />
            </Button>
          ) : (
            <Button
              className="w-[49%]"
              type="submit"
              form="create-raffle-form"
              onClick={markAsLastStep}
            >
              Create Raffle
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CreateRaffleForm;
