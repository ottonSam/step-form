import { Button, Stack, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";

const userSchema = yup.object().shape({
  name: yup.string().min(5).required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

const StepContact = (props: any) => {
  const {
    control,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const textUser = async () => {
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

  return (
    <Stack spacing={2}>
      <p>Informações de contato</p>
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
      <Button variant="outlined" type="submit" onClick={() => textUser()}>
        Next
      </Button>
    </Stack>
  );
};

export default StepContact;
