import { Stack, Step, StepLabel, Stepper } from "@mui/material";
import Cities from "./Cities";
import Contact from "./Contact";

interface IProps {
  currentSubStep: number;
}

const StepContact: React.FC<IProps> = ({ currentSubStep }) => {
  const steps = [
    [0, "Dados pessoais"],
    [1, "Endereço"],
  ];

  const stepsList = [<Contact />, <Cities />];

  return (
    <Stack spacing={2}>
      <Stepper activeStep={currentSubStep}>
        {steps.map(([index, label]) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {} = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {stepsList[currentSubStep]}
    </Stack>
  );
};

export default StepContact;
