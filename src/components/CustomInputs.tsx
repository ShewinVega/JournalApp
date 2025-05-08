import { Control, Controller, FieldError } from "react-hook-form";
import { FormValues } from "@auth/models/CustomForm";
import { Grid, SxProps, TextField, TextFieldVariants } from "@mui/material";
import { Theme } from "@emotion/react";

interface Props {
  name?: keyof FormValues;
  label?: string;
  type?: string;
  placeholder?: string;
  control?: Control<FormValues>;
  error?: FieldError;
  variant?: TextFieldVariants | undefined;
  isForm?: boolean;
  sx?: SxProps<Theme> | undefined;
  multiline?: boolean;
  minRows?: string | number | undefined;
}

export const CustomInput = ({
  label,
  name,
  type,
  control,
  error,
  placeholder,
  variant = "outlined",
  sx,
  isForm = true,
  multiline,
  minRows,
}: Props) => {
  return (
    <Grid sx={{ width: "100%" }}>
      {isForm ? (
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label={label}
              id={name}
              type={type}
              variant={variant}
              placeholder={placeholder}
              error={error ? true : false}
              helperText={error ? error.message : ""}
              fullWidth
              sx={sx}
              {...field}
            />
          )}
        />
      ) : (
        <TextField
          label={label}
          type={type}
          variant={variant}
          placeholder={placeholder}
          error={error ? true : false}
          helperText={error ? error.message : ""}
          fullWidth
          sx={sx}
          multiline={multiline}
          minRows={minRows}
        />
      )}
    </Grid>
  );
};
