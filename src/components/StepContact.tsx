import { Box, Button, TextField } from "@mui/material";
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

    if (await userSchema.validate(user)) {
      clearErrors("review");
      clearErrors("comment");
      props.nextStep();
    }
  };

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
      <Button type="submit" onClick={(e) => textUser()}>
        Next
      </Button>
    </Box>
  );
};

export default StepContact;
