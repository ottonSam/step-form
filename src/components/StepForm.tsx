import { useState } from "react";
import { useForm } from "../hooks/useForm";

import Contact from "./ContactStep";
import Review from "./ReviewStep";
import Submission from "./SubmissionStep";

type FormFields = {
    name: string;
    email: string;
    review: string;
    comment: string;
  };
  
  const formTemplate: FormFields = {
    name: "",
    email: "",
    review: "",
    comment: "",
  };

function StepForm() {
    const [data, setData] = useState(formTemplate);

    const updateFieldHandler = (key: string, value: string) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const formComponents = [
        <Contact data={data} updateFieldHandler={updateFieldHandler} />,
        <Review data={data} updateFieldHandler={updateFieldHandler} />,
        <Submission data={data} />,
    ];

    const { currentStep, currentComponent, changeStep, isLastStep } =
        useForm(formComponents);

    return (
        <div className="app">
            <div className="form-container">
                <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    <div className="inputs-container">{currentComponent}</div>
                    <div className="actions">
                        <button type="button" onClick={() => changeStep(currentStep - 1)}>
                            <span>Voltar</span>
                        </button>

                        {!isLastStep ? (
                            <button type="submit">
                                <span>Avançar</span>
                            </button>
                        ) : (
                            <button type="button">
                                <span>Enviar</span>
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
export default StepForm;