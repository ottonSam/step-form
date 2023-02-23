import { Button, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";

const StepConfirm = () => {
  const { watch } = useFormContext();

  return (
    <Stack spacing={2}>
      <p>name: {watch("name")}</p>
      <p>email: {watch("email")}</p>
      <p>review: {watch("review")}</p>
      <p>comment: {watch("comment")}</p>
      <Button type="submit" variant="contained" color="success">
        Enviar
      </Button>
    </Stack>
  );
};
export default StepConfirm;
