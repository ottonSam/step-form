import { Button, Stack, Box } from "@mui/material";
import { useFormContext } from "react-hook-form";
import * as yup from "yup";

import DataCities from "../data/DataCities";
import AutoCompleteComponent from "../utils/AutoCompleteComponent";
import TextFieldComponent from "../utils/TextFieldComponent";

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
  const { watch, clearErrors } = useFormContext();

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
      <TextFieldComponent name="name" label="Nome" />
      <TextFieldComponent name="email" label="Email" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
        }}
      >
        <AutoCompleteComponent
          name="state"
          label="Estados"
          options={states}
          resetName="city"
        />
        <AutoCompleteComponent
          name="city"
          label="Cidades"
          options={citiesByState}
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
