import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

import DataCities from "../data/DataCities";
import AutoCompleteComponent from "../utils/AutoCompleteComponent";

const Cities: React.FC = () => {
  const { watch } = useFormContext();

  const states = DataCities.map((state) => state.state);
  const selectedState = watch("state");
  const citiesByState = selectedState
    ? DataCities.find((state) => state.state === selectedState)?.cities || []
    : [];
  return (
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
  );
};

export default Cities;
