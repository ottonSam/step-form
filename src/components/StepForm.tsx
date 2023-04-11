import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import {
  Box,
  Step,
  StepLabel,
  Stepper,
  styled,
  StepIconProps,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import StepContact from "./StepContact";
import StepReview from "./StepReview";
import StepConfirm from "./StepConfirm";
import Thanks from "./Thanks";
import validationSchema from "../utils/validationSchema";
import MovementButtons from "./MovementButtons";

import Check from "@mui/icons-material/Check";

interface IFormInputs {
  name: string;
  email: string;
  city: string;
  state: string;
  review: string;
  comment: string;
}

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const fieldsByStep = [
    ["name", "email"],
    ["state", "city"],
    ["review", "comment"],
  ];

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const nextStep = async () => {
    if (currentStep < 3) {
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
    <StepContact currentSubStep={0} />,
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
    { index: 0, label: "Contato" },
    { index: 2, label: "Avaliação" },
    { index: 3, label: "Confirmação" },
  ];

  return (
    <Box padding={2}>
      <Stepper activeStep={currentStep}>
        {steps.map(({ index, label }) => {
          const stepProps: { completed?: boolean; index: number } = {
            index: index,
          };
          const labelProps: {} = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} StepIconComponent={QontoStepIcon}>
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
