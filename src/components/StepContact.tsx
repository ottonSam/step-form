import { Stack, Step, StepLabel, Stepper } from "@mui/material";
import Cities from "./Cities";
import Contact from "./Contact";
import { StepperIcon } from "./StepperIcon";

interface IProps {
  currentSubStep: number;
  currentSubSubStep?: number;
}

const StepContact: React.FC<IProps> = ({
  currentSubStep,
  currentSubSubStep,
}) => {
  interface IStep {
    index: number;
    label: string;
  }

  const steps: IStep[] = [
    { index: 0, label: "Informações de contato" },
    { index: 1, label: "Informações de endereço" },
  ];

  const stepsList = [
    <Contact currentSubSubStep={currentSubSubStep} />,
    <Cities />,
  ];

  return (
    <Stack spacing={2}>
      <Stepper>
        {steps.map(({ index, label }) => {
          const stepProps: { completed: boolean } = {
            completed: currentSubStep > index,
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
      {stepsList[currentSubStep]}
    </Stack>
  );
};

export default StepContact;
