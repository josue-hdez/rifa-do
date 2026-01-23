import { Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const BasicInfoStep = ({ form }) => {
  return (
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
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="description"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="description-textarea">Description</FieldLabel>
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
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="image"
        control={form.control}
        render={({ field: { value, onChange, ...fieldProps }, fieldState }) => (
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
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </>
  );
};

export default BasicInfoStep;
