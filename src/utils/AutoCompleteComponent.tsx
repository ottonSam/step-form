import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IAutoCompleteComponentProps {
  options: string[];
  name: string;
  label: string;
}

const AutoCompleteComponent = ({
  options,
  name,
  label,
}: IAutoCompleteComponentProps) => {
  const { control, watch } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Autocomplete
            {...field}
            options={options}
            value={watch(name) || null}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
            onChange={(_, data) => {
              field.onChange(data);
            }}
          />
        );
      }}
    />
  );
};

export default AutoCompleteComponent;
