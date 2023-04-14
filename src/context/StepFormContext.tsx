import { createContext, useState } from "react";

const InitialStep = {
  currentStep: 0,
  nextStep: () => {},
  prevStep: () => {},
};

const StepContext = createContext(InitialStep);

interface IStepContextProviderProps {
  children: React.ReactNode;
}

const StepContextProvider = ({ children }: IStepContextProviderProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    currentStep > 0 && setCurrentStep((prevStep) => prevStep - 1);
  };

  const value = {
    currentStep,
    nextStep,
    prevStep,
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

export { StepContext, StepContextProvider };
