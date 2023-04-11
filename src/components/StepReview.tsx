import { Stack } from "@mui/material";
import TextFieldComponent from "../utils/TextFieldComponent";
import CheckboxComponent from "../utils/CheckboxComponent";

const StepContact = () => {
  return (
    <Stack spacing={2}>
      <>
        <CheckboxComponent />
      </>
      <TextFieldComponent name="comment" label="Comentário" />
    </Stack>
  );
};

export default StepContact;
