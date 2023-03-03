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
    ["name", "email", "state", "city"],
    ["review", "comment"],
  ];

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const isValid = fieldsByStep[currentStep].every((field) => {
    // @ts-ignore
    return methods.trigger(field);
  });

  function nextStep() {
    if (currentStep < step.length - 1) {
      isValid && setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(currentStep + 1);
    }
  }

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
    <StepContact />,
    <StepReview />,
    <StepConfirm />,
    <Thanks resetForm={resetForm} />,
  ];

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    alert(JSON.stringify(data));
    nextStep();
  };

  const steps = ["Contato", "Avaliação", "Confirmação"];

  return (
    <Box padding={2}>
      <Stepper activeStep={currentStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {} = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
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
            {currentStep < step.length && (
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
