import { Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import DatePicker from "@/components/DatePicker";
import { Input } from "@/components/ui/input";

const ScheduleRaffleStep = ({ form }) => {
  return (
    <div className="flex gap-3">
      <Controller
        name="date"
        control={form.control}
        render={({ field: { value, onChange, ...fieldProps }, fieldState }) => (
          <Field {...fieldProps} data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="date-picker">Date</FieldLabel>
            <DatePicker date={value} setDate={onChange} />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </div>
  );
};

export default ScheduleRaffleStep;
