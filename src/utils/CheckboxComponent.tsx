import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const CheckboxComponent = () => {
  const { control, watch } = useFormContext();
  return (
    <Controller
      name="review"
      control={control}
      defaultValue={watch("review") || "fantastic"}
      render={({ field }) => (
        <FormControl>
          <FormLabel>Avaliação</FormLabel>
          <RadioGroup row value={watch("review") || undefined}>
            <FormControlLabel
              {...field}
              value="fantastic"
              control={<Radio />}
              label="Fantástico"
            />
            <FormControlLabel
              {...field}
              value="good"
              control={<Radio />}
              label="Bom"
            />
            <FormControlLabel
              {...field}
              value="ok"
              control={<Radio />}
              label="Normal"
            />
            <FormControlLabel
              {...field}
              value="bad"
              control={<Radio />}
              label="Ruim"
            />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default CheckboxComponent;
