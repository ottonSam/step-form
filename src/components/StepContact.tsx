import { Box, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const StepContact = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => {
          return (
            <TextField
              {...field}
              label="Name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message?.toString()}
            />
          );
        }}
      />
      <br />
      <br />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message?.toString()}
          />
        )}
      />
    </Box>
  );
};

export default StepContact;
