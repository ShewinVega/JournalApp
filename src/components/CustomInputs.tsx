import { Control, Controller, FieldError } from "react-hook-form";
import { FormValues } from "@auth/models/CustomForm";
import { SxProps, TextField } from "@mui/material";
import { Theme } from "@emotion/react";

interface Props {
  name: keyof FormValues;
  label: string;
  type?: string;
  placeholder?: string;
  control: Control<FormValues>;
  error?: FieldError;
  sx?: SxProps<Theme> | undefined;
}

export const InputForm = ({
  label,
  name,
  type,
  control,
  error,
  placeholder,
  sx,
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          label={label}
          id={name}
          type={type}
          placeholder={placeholder}
          error={error ? true : false}
          helperText={error ? error.message : ""}
          fullWidth
          sx={sx}
          {...field}
        />
      )}
    />
  );
};
