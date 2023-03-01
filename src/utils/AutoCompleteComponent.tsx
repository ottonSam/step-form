import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IAutoCompleteComponentProps {
  resetName?: string;
  options: string[];
  name: string;
  label: string;
}

const AutoCompleteComponent = ({
  options,
  name,
  label,
  resetName,
}: IAutoCompleteComponentProps) => {
  const { control, watch, resetField } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Autocomplete
            {...field}
            disabled={!options.length}
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
                variant="standard"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
            onChange={(_, data) => {
              field.onChange(data);
              resetName && resetField(resetName);
            }}
          />
        );
      }}
    />
  );
};

export default AutoCompleteComponent;
