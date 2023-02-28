import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface ITextFieldComponentProps {
  name: string;
  label: string;
}

const TextFieldComponent = ({ name, label }: ITextFieldComponentProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => {
        return (
          <TextField
            {...field}
            label={label}
            variant="outlined"
            error={!!errors[name]}
            helperText={errors[name]?.message?.toString()}
          />
        );
      }}
    />
  );
};
export default TextFieldComponent;
