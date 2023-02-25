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
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Voltar
        </Button>
        <Button variant="outlined" type="submit">
          Próximo
        </Button>
      </Box>
    </Stack>
  );
};
export default StepConfirm;
