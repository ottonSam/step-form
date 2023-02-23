import { Box, Button, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";

const userSchema = yup.object().shape({
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

    if (await userSchema.validate(user)) {
      props.nextStep();
    }
  };

  return (
    <Box>
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
      <br />
      <br />
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
      <Button type="submit" onClick={(e) => textReview()}>
        Next
      </Button>
    </Box>
  );
};

export default StepContact;
