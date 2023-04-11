import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import StepContact from "./StepContact";
import StepReview from "./StepReview";
import StepConfirm from "./StepConfirm";
import Thanks from "./Thanks";
import validationSchema from "../utils/validationSchema";
import MovementButtons from "./MovementButtons";

import { StepperIcon } from "./StepperIcon";

interface IFormInputs {
  name: string;
  email: string;
  city: string;
  state: string;
  review: string;
  comment: string;
}

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const fieldsByStep = [
    ["name"],
    ["email"],
    ["state", "city"],
    ["review", "comment"],
  ];

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const nextStep = async () => {
    if (currentStep < 4) {
      // @ts-ignore
      const isValid = await methods.trigger(fieldsByStep[currentStep]);
      isValid && setCurrentStep(currentStep + 1);
    }
  };

  function backStep() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  function resetForm() {
    setCurrentStep(0);
    methods.reset();
  }

  const step = [
    <StepContact currentSubStep={0} currentSubSubStep={0} />,
    <StepContact currentSubStep={0} currentSubSubStep={1} />,
    <StepContact currentSubStep={1} />,
    <StepReview />,
    <StepConfirm />,
    <Thanks resetForm={resetForm} />,
  ];

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    alert(JSON.stringify(data));
    setCurrentStep(currentStep + 1);
  };

  interface IStep {
    index: number;
    label: string;
  }

  const steps: IStep[] = [
    { index: 2, label: "Contato" },
    { index: 3, label: "Avaliação" },
    { index: 4, label: "Confirmação" },
  ];

  return (
    <Box padding={2}>
      <Stepper activeStep={currentStep}>
        {steps.map(({ index, label }) => {
          const stepProps: { completed: boolean } = {
            completed: index < currentStep,
          };
          const labelProps: {} = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps} StepIconComponent={StepperIcon}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box marginTop={2}>
        <FormProvider {...methods}>
          <form
            autoComplete="off"
            onSubmit={methods.handleSubmit(formSubmitHandler)}
          >
            {step[currentStep]}
            {currentStep < step.length - 1 && (
              <MovementButtons
                nextStep={nextStep}
                backStep={backStep}
                currentStep={currentStep}
              />
            )}
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default StepForm;
