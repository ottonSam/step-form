import { Button, Stack, TextField, Box } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";

const userSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
});

const StepContact = (props: any) => {
  const {
    control,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const handleNext = async () => {
    const user = {
      name: watch("name"),
      email: watch("email"),
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
