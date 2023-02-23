import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

const StepConfirm = () => {
  const { watch } = useFormContext();

  return (
    <Box>
      <p>name: {watch("name")}</p>
      <p>email: {watch("email")}</p>
      <p>review: {watch("review")}</p>
      <p>comment: {watch("comment")}</p>
    </Box>
  );
};
export default StepConfirm;
