import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StepContact from "./StepContact";
import StepReview from "./StepReview";
import StepConfirm from "./StepConfirm";
import Thanks from "./Thanks";
import React from "react";

interface IFormInputs {
  name: string;
  email: string;
  review: string;
  comment: string;
}

const schema = yup.object().shape({
  name: yup.string().min(5).required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  review: yup.string().required("Review is required"),
  comment: yup.string().required("Comment is required"),
});

function StepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  function nextStep() {
    if (currentStep < step.length) {
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
    <StepContact nextStep={nextStep} />,
    <StepReview nextStep={nextStep} backStep={backStep} />,
    <StepConfirm backStep={backStep} />,
    <Thanks resetForm={resetForm} />,
  ];

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    schema.isValid(data).then((e) => {
      if (currentStep === step.length - 2 && e) {
        alert(JSON.stringify(data));
        nextStep();
      }
    });
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
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            {step[currentStep]}
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
}

export default StepForm;
