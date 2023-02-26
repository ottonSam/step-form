import { Button, Stack, TextField, Box, Autocomplete } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";

import DataCities from "../data/DataCities";

interface User {
  name: string;
  email: string;
  state: string;
  city: string;
}

const userSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  state: yup.string().required(),
  city: yup.string().required(),
});

const validateUser = (user: User) => {
  try {
    userSchema.validateSync(user);
    return {};
  } catch (e: any) {
    return e.errors.reduce(
      (acc: Record<string, string>, errorMessage: string) => {
        const [fieldName, message] = errorMessage.split(": ");
        acc[fieldName] = message;
        return acc;
      },
      {}
    );
  }
};

const StepContact = (props: { nextStep: () => void }) => {
  const {
    control,
    watch,
    clearErrors,
    resetField,
    formState: { errors },
  } = useFormContext();

  const states = DataCities.map((state) => state.state);
  const selectedState = watch("state");
  const citiesByState = selectedState
    ? DataCities.find((state) => state.state === selectedState)?.cities || []
    : [];

  const handleNext = () => {
    const user: User = {
      name: watch("name"),
      email: watch("email"),
      state: watch("state"),
      city: watch("city"),
    };

    const errors = validateUser(user);
    clearErrors("review");
    clearErrors("comment");
    if (Object.keys(errors).length === 0) {
      props.nextStep();
    }
  };

  return (
    <Stack spacing={2}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => {
          return (
            <TextField
              {...field}
              label="Nome"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message?.toString()}
            />
          );
        }}
      />
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Controller
          name="state"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <Autocomplete
                {...field}
                options={states}
                value={watch("state") || null}
                isOptionEqualToValue={(option, value) =>
                  option.value === value.value
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Estado"
                    variant="outlined"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
                onChange={(_, data) => {
                  field.onChange(data);
                  resetField("city");
                }}
              />
            );
          }}
        />
        <Controller
          name="city"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <Autocomplete
                {...field}
                options={citiesByState}
                value={watch("city") || null}
                isOptionEqualToValue={(option, value) =>
                  option.value === value.value
                }
                disabled={!selectedState}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Cidade"
                    variant="outlined"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
                onChange={(_, data) => field.onChange(data)}
              />
            );
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          variant="outlined"
          color="secondary"
          disabled={true}
          sx={{ mr: 1 }}
        >
          Voltar
        </Button>
        <Button variant="outlined" type="submit" onClick={handleNext}>
          Próximo
        </Button>
      </Box>
    </Stack>
  );
};

export default StepContact;
