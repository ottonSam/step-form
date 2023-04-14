import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { Fragment, useContext, useState } from "react";
import MovementButtons from "../MovementButtons";
import SubForm1 from "../SubForms/SubForm1";
import SubForm2 from "../SubForms/SubForm2";

// import { Container } from './styles';

const StepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponents: [number, JSX.Element][] = [
    [0, <SubForm1 subStep={0} />],
    [0, <SubForm1 subStep={1} />],
    [0, <SubForm1 subStep={2} />],
    [1, <SubForm2 />],
  ];

  const steps = ["primeiro", "segundo"];

  const nextStep = () => {
    //Fields Trigger
    currentStep < StepComponents.length && setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    currentStep > 0 && setCurrentStep(currentStep - 1);
  };

  return (
    <Fragment>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={StepComponents[currentStep][0]} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <Typography sx={{ color: "white" }}>{label}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Typography>Form, current step = {currentStep}</Typography>
      <Box>{StepComponents[currentStep][1]}</Box>
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
