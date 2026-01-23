import { Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Item, ItemContent, ItemDescription } from "@/components/ui/item";

const TicketConfigStep = ({ form }) => {
  const potentialRevenue = (
    form.watch("maxTickets") * form.watch("ticketPrice")
  ).toLocaleString("en-US");

  return (
    <>
      <Controller
        name="maxTickets"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="max-tickets-input">Max Tickets</FieldLabel>
            <Input
              {...field}
              id="max-tickets-input"
              aria-invalid={fieldState.invalid}
              type="number"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="ticketPrice"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="ticket-price-input">Ticket Price</FieldLabel>
            <Input
              {...field}
              id="ticket-price-input"
              aria-invalid={fieldState.invalid}
              type="number"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
      <Item variant="muted">
        <ItemContent>
          <ItemDescription>
            Potential Revenue:
            <span className="font-medium"> RD${potentialRevenue}</span>
          </ItemDescription>
        </ItemContent>
      </Item>
    </>
  );
};

export default TicketConfigStep;
