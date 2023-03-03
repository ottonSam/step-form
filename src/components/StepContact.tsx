import { Stack, Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

import DataCities from "../data/DataCities";
import AutoCompleteComponent from "../utils/AutoCompleteComponent";
import TextFieldComponent from "../utils/TextFieldComponent";

const StepContact = () => {
  const { watch } = useFormContext();

  const states = DataCities.map((state) => state.state);
  const selectedState = watch("state");
  const citiesByState = selectedState
    ? DataCities.find((state) => state.state === selectedState)?.cities || []
    : [];

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
    </Stack>
  );
};

export default StepContact;
