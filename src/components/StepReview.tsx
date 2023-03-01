import { Button, Stack, Box } from "@mui/material";
import { useFormContext } from "react-hook-form";
import * as yup from "yup";
import TextFieldComponent from "../utils/TextFieldComponent";
import CheckboxComponent from "../utils/CheckboxComponent";

interface Review {
  review: string;
  comment: string;
}

const reviewSchema = yup.object().shape({
  review: yup.string().required(),
  comment: yup.string().required(),
});

const validateReview = (review: Review) => {
  try {
    reviewSchema.validateSync(review);
    return {};
  } catch (e: any) {
    return e.errors.reduce(
      (acc: Record<string, string>, errorMessage: string) => {
        const [fieldName, message] = errorMessage.split(": ");
        acc[fieldName] = message;
        return acc;
      },
      {}
    );
  }
};

const StepContact = (props: { nextStep: () => void; backStep: () => void }) => {
  const { watch } = useFormContext();

  const handleNext = () => {
    const review: Review = {
      review: watch("review"),
      comment: watch("comment"),
    };

    const errors = validateReview(review);
    if (Object.keys(errors).length === 0) {
      props.nextStep();
    }
  };

  const handleBack = () => {
    props.backStep();
  };

  return (
    <Stack spacing={2}>
      <CheckboxComponent />

      <TextFieldComponent name="comment" label="Comentário" />

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Voltar
        </Button>
        <Button variant="outlined" type="submit" onClick={handleNext}>
          Próximo
        </Button>
      </Box>
    </Stack>
  );
};

export default StepContact;
