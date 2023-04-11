import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import TextFieldComponent from "../utils/TextFieldComponent";
import { StepperIcon } from "./StepperIcon";

// import { Container } from './styles';

interface IProps {
  currentSubSubStep?: number;
}

const components: React.FC<IProps> = ({ currentSubSubStep }) => {
  const subSubSteps = [
    <TextFieldComponent name="name" label="Nome" />,
    <TextFieldComponent name="email" label="Email" />,
  ];

  interface IStep {
    index: number;
    label: string;
  }

  const steps: IStep[] = [
    { index: 0, label: "Nome" },
    { index: 1, label: "Email" },
  ];

  return currentSubSubStep !== undefined ? (
    <>
      <Stepper>
        {steps.map(({ index, label }) => {
          const stepProps: { completed: boolean } = {
            completed: currentSubSubStep > index,
          };
          const labelProps: {} = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} StepIconComponent={StepperIcon}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {subSubSteps[currentSubSubStep] || null}
    </>
  ) : null;
};

export default components;
