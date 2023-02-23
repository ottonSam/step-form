import { Button, Stack, TextField } from "@mui/material";
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

  const textReview = async () => {
    const user = {
      review: watch("review"),
      comment: watch("comment"),
    };

    await reviewSchema.isValid(user).then((e) => {
      e && props.nextStep();
    });
  };

  return (
    <Stack spacing={2}>
      <p>Comentário</p>
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
      <Button variant="outlined" type="submit" onClick={() => textReview()}>
        Next
      </Button>
    </Stack>
  );
};

export default StepContact;
