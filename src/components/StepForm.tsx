import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Box, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import Contact from "./ContactStep";
// import Review from "./ReviewStep";
// import Submission from "./SubmissionStep";

interface IFormInputs {
  name: string;
  email: string;
  review: string;
  comment: string;
}

const schema = yup.object().shape({
  name: yup.string().min(5).required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  review: yup.string().required("Review is required"),
  comment: yup.string().required("Comment is required"),
});

function StepForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name ? errors.name?.message : ""}
            />
          )}
        />
        <br />
        <br />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ""}
            />
          )}
        />
        <br />
        <br />
        <Controller
          name="review"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Review"
              variant="outlined"
              error={!!errors.review}
              helperText={errors.review ? errors.review?.message : ""}
            />
          )}
        />
        <br />
        <br />
        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Comment"
              variant="outlined"
              error={!!errors.comment}
              helperText={errors.comment ? errors.comment?.message : ""}
            />
          )}
        />
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </Box>
  );
}
export default StepForm;
