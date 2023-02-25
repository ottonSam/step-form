import { Button, Stack, TextField, Box } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";

const reviewSchema = yup.object().shape({
  review: yup.string().required(),
  comment: yup.string().required(),
});

const StepContact = (props: any) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const handleNext = async () => {
    const user = {
      review: watch("review"),
      comment: watch("comment"),
    };

    await reviewSchema.isValid(user).then((e) => {
      e && props.nextStep();
    });
  };

  const handleBack = () => {
    props.backStep();
  };

  return (
    <Stack spacing={2}>
      <Controller
        name="review"
        control={control}
        defaultValue=""
        render={({ field }) => {
          return (
            <TextField
              {...field}
              label="Avaliação"
              variant="outlined"
              error={!!errors.review}
              helperText={errors.review?.message?.toString()}
            />
          );
        }}
      />
      <Controller
        name="comment"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Comentário"
            variant="outlined"
            error={!!errors.comment}
            helperText={errors.comment?.message?.toString()}
          />
        )}
      />
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
