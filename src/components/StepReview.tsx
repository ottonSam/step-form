import {
  Button,
  Stack,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";
import TextFieldComponent from "../utils/TextFieldComponent";

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
  const { control, watch } = useFormContext();

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
      <Controller
        name="review"
        control={control}
        defaultValue={watch("review") || "fantastic"}
        render={({ field }) => (
          <FormControl>
            <FormLabel>Avaliação</FormLabel>
            <RadioGroup row value={watch("review") || undefined}>
              <FormControlLabel
                {...field}
                value="fantastic"
                control={<Radio />}
                label="Fantástico"
              />
              <FormControlLabel
                {...field}
                value="good"
                control={<Radio />}
                label="Bom"
              />
              <FormControlLabel
                {...field}
                value="ok"
                control={<Radio />}
                label="Normal"
              />
              <FormControlLabel
                {...field}
                value="bad"
                control={<Radio />}
                label="Ruim"
              />
            </RadioGroup>
          </FormControl>
        )}
      />

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
