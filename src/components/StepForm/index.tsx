import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { Fragment, useContext, useState } from "react";
import MovementButtons from "../MovementButtons";
import SubForm1 from "./Steps/Step1";
import SubForm2 from "./Steps/Step2";

// import { Container } from './styles';

const StepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponents: [number, JSX.Element][] = [
    [0, <SubForm1 subStep={0} />],
    [0, <SubForm1 subStep={1} />],
    [0, <SubForm1 subStep={2} />],
    [1, <SubForm2 />],
  ];

  const steps: [number, string][] = [
    [1, "primeiro"],
    [2, "segundo"],
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
      <Box sx={{ width: "100%" }}>
        <Stepper alternativeLabel>
          {steps.map(([index, label]) => (
            <Step
              key={index}
              completed={false}
              active={StepComponents[currentStep][0] >= index - 1}
            >
              <StepLabel icon={index}>
                <Typography sx={{ color: "white" }}>{label}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box
        m={4}
        p={2}
        sx={{ display: "flex", justifyContent: "center" }}
        border={1}
        borderRadius={1}
      >
        {StepComponents[currentStep][1]}
      </Box>
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
