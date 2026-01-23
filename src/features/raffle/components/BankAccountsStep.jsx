import { Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const BankAccountsStep = ({ form }) => {
  return (
    <>
      <Controller
        name="bankName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="bank-name-input">Bank Name</FieldLabel>
            <Input
              {...field}
              id="bank-name-input"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <div className="flex gap-3">
        <Controller
          name="accountType"
          control={form.control}
          render={({
            field: { value, onChange, ...fieldProps },
            fieldState,
          }) => (
            <Field {...fieldProps} data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="account-type-select">
                Account Type
              </FieldLabel>
              <Select value={value} onValueChange={onChange}>
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
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
    </>
  );
};

export default BankAccountsStep;
