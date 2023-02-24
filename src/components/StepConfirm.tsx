import { Button, Stack, Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

const StepConfirm = (props: any) => {
  const { watch } = useFormContext();

  const handleBack = () => {
    props.backStep();
  };

  return (
    <Stack spacing={2}>
      <p>name: {watch("name")}</p>
      <p>email: {watch("email")}</p>
      <p>review: {watch("review")}</p>
      <p>comment: {watch("comment")}</p>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button type="submit">Confirm</Button>
      </Box>
    </Stack>
  );
};
export default StepConfirm;
