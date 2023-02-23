import { Box, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const StepReview = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

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
    </Box>
  );
};

export default StepReview;
