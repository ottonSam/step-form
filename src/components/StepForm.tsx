import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StepContact from "./StepContact";
import StepReview from "./StepReview";
import StepConfirm from "./StepConfirm";

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
    if (currentStep < step.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }

  function backStep() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  const step = [
    <StepContact nextStep={nextStep} />,
    <StepReview nextStep={nextStep} />,
    <StepConfirm />,
  ];

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    if (currentStep === step.length - 1) {
      alert(JSON.stringify(data));
    }
  };

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
          {currentStep > 0 && (
            <Button type="button" onClick={() => backStep()}>
              Previous
            </Button>
          )}
          {step[currentStep]}
          {currentStep === step.length - 1 && (
            <Button type="submit" variant="contained" color="success">
              Enviar
            </Button>
          )}
        </form>
      </FormProvider>
    </Box>
  );
}
export default StepForm;
