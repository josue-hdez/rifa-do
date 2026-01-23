"use client";

const steps = [
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

import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createRaffleFormSchema,
  createRaffleFormDefaultValues,
} from "../schemas/createRaffleForm.schema";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Item, ItemContent, ItemDescription } from "@/components/ui/item";
import DatePicker from "@/components/DatePicker";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CreateRaffleForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = useRef(false);
  const form = useForm({
    resolver: zodResolver(createRaffleFormSchema),
    mode: "onTouched",
    defaultValues: createRaffleFormDefaultValues,
  });

  const nextStep = async ({ trigger }) => {
    const fields = steps[currentStep].fields;
    const isValid = await trigger(fields);

    if (!isValid) return;

    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = (values) => {
    if (!isLastStep.current) return;

    console.log(values);
  };

  const potentialRevenue = (
    form.watch("maxTickets") * form.watch("ticketPrice")
  ).toLocaleString("en-US");

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">{steps[currentStep]?.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="create-raffle-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {currentStep === 0 && (
              <>
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="title-input">Title</FieldLabel>
                      <Input
                        {...field}
                        id="title-input"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="description-textarea">
                        Description
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupTextarea
                          {...field}
                          id="description-textarea"
                          aria-invalid={fieldState.invalid}
                          placeholder="Type a description here"
                        />
                        <InputGroupAddon align="block-end">
                          <InputGroupText className="tabular-nums">
                            {field.value.length}/500 characters
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="image"
                  control={form.control}
                  render={({
                    field: { value, onChange, ...fieldProps },
                    fieldState,
                  }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="image-input">Image</FieldLabel>
                      <Input
                        {...fieldProps}
                        id="image-input"
                        aria-invalid={fieldState.invalid}
                        type="file"
                        accept="image/*"
                        onChange={(e) => onChange(e.target.files)}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </>
            )}
            {currentStep === 1 && (
              <>
                <Controller
                  name="maxTickets"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="max-tickets-input">
                        Max Tickets
                      </FieldLabel>
                      <Input
                        {...field}
                        id="max-tickets-input"
                        aria-invalid={fieldState.invalid}
                        type="number"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="ticketPrice"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="ticket-price-input">
                        Ticket Price
                      </FieldLabel>
                      <Input
                        {...field}
                        id="ticket-price-input"
                        aria-invalid={fieldState.invalid}
                        type="number"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <div className="flex gap-3">
                  <Controller
                    name="minTicketsPerParticipant"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="min-tickets-per-participant-input">
                          Min Tickets Per Participant
                        </FieldLabel>
                        <Input
                          {...field}
                          id="min-tickets-per-participant-input"
                          aria-invalid={fieldState.invalid}
                          type="number"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="maxTicketsPerParticipant"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="max-tickets-per-participant-input">
                          Max Tickets Per Participant
                        </FieldLabel>
                        <Input
                          {...field}
                          id="max-tickets-per-participant-input"
                          aria-invalid={fieldState.invalid}
                          type="number"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
                <Item variant="muted">
                  <ItemContent>
                    <ItemDescription>
                      Potential Revenue:
                      <span className="font-medium">
                        {" "}
                        RD${potentialRevenue}
                      </span>
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </>
            )}
            {currentStep === 2 && (
              <div className="flex gap-3">
                <Controller
                  name="date"
                  control={form.control}
                  render={({ field: { value, onChange }, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="date-picker">Date</FieldLabel>
                      <DatePicker date={value} setDate={onChange} />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="time"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="time-input">Time</FieldLabel>
                      <Input
                        {...field}
                        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                        id="time-input"
                        aria-invalid={fieldState.invalid}
                        type="time"
                        step="1"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
            )}
            {currentStep === 3 && (
              <>
                <Controller
                  name="bankName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="bank-name-input">
                        Bank Name
                      </FieldLabel>
                      <Input
                        {...field}
                        id="bank-name-input"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="accountNumber"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="account-number-input">
                        Account Number
                      </FieldLabel>
                      <Input
                        {...field}
                        id="account-number-input"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <div className="flex gap-3">
                  <Controller
                    name="accountType"
                    control={form.control}
                    render={({
                      field: { name, value, onChange },
                      fieldState,
                    }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="account-type-select">
                          Account Type
                        </FieldLabel>
                        <Select
                          // name={name}
                          value={value}
                          onValueChange={onChange}
                        >
                          <SelectTrigger
                            id="account-type-select"
                            aria-invalid={fieldState.invalid}
                          >
                            <SelectValue placeholder="Select an account type" />
                          </SelectTrigger>
                          <SelectContent position="item-aligned">
                            <SelectItem value="savings">Savings</SelectItem>
                            <SelectItem value="checking">Checking</SelectItem>
                          </SelectContent>
                        </Select>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="accountHolder"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="account-holder-input">
                          Account Holder
                        </FieldLabel>
                        <Input
                          {...field}
                          id="account-holder-input"
                          aria-invalid={fieldState.invalid}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
              </>
            )}
            {currentStep === 4 && <div className="text-center">Summary</div>}
          </FieldGroup>
        </form>
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
              onClick={() => nextStep(form)}
            >
              Next
              <ArrowRight />
            </Button>
          ) : (
            <Button
              className="w-[49%]"
              type="submit"
              form="create-raffle-form"
              onClick={() => (isLastStep.current = true)}
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
