import { Button, Stack, TextField, Box, Autocomplete } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";

import states from "../data/States";
import cities from "../data/Cities";

const userSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  state: yup.string().required(),
  city: yup.string().required(),
});

const StepContact = (props: any) => {
  const {
    control,
    watch,
    clearErrors,
    resetField,
    formState: { errors },
  } = useFormContext();

  const citiesByState: String[] =
    // @ts-ignore
    watch("state") in cities ? cities[watch("state")] : [];

  const handleNext = async () => {
    const user = {
      name: watch("name"),
      email: watch("email"),
      state: watch("state"),
      city: watch("city"),
    };

    await userSchema.isValid(user).then((e) => {
      clearErrors("review");
      clearErrors("comment");
      e && props.nextStep();
    });
  };

  const handleBack = () => {
    props.backStep();
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
                disabled={watch("state") ? false : true}
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
          onClick={handleBack}
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
