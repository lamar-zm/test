// form
import { useFormContext, Controller } from "react-hook-form";

// ----------------------------------------------------------------------

export default function RHFTextField({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <input
          {...field}
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={error ? "true" : "false"}
          helpertext={error?.message}
          {...other}
        />
      )}
    />
  );
}
