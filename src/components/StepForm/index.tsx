import { Box, Typography } from "@mui/material";
import React, { Fragment, useContext, useState } from "react";
import MovementButtons from "../MovementButtons";
import SubForm1 from "../SubForms/SubForm1";
import SubForm2 from "../SubForms/SubForm2";

// import { Container } from './styles';

const StepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponents = [
    <SubForm1 subStep={0} />,
    <SubForm1 subStep={1} />,
    <SubForm1 subStep={2} />,
    <SubForm2 />,
  ];

  const nextStep = () => {
    //Fields Trigger
    currentStep < StepComponents.length && setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    currentStep > 0 && setCurrentStep(currentStep - 1);
  };

  return (
    <Fragment>
      <Typography>Form, current step = {currentStep}</Typography>
      <Box>{StepComponents[currentStep]}</Box>
      <MovementButtons
        prevStep={prevStep}
        nextStep={nextStep}
        currentStep={currentStep}
        maxStep={StepComponents.length}
      />
    </Fragment>
  );
};

export default StepForm;
