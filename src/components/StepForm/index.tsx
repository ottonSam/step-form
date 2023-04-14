import { Typography } from "@mui/material";
import React from "react";
import { StepContextProvider } from "../../context/StepFormContext";

// import { Container } from './styles';

const StepForm: React.FC = () => {
  return (
    <StepContextProvider>
      <Typography>Oi</Typography>
    </StepContextProvider>
  );
};

export default StepForm;
