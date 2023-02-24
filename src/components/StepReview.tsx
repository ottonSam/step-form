import { Button, Stack, TextField, Box } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";

const reviewSchema = yup.object().shape({
  review: yup.string().required("Review is required"),
  comment: yup.string().required("Comment is required"),
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
              label="Review"
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
            label="Comment"
            variant="outlined"
            error={!!errors.comment}
            helperText={errors.comment?.message?.toString()}
          />
        )}
      />
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button type="submit" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Stack>
  );
};

export default StepContact;
