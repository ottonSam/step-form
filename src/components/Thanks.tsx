import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function Thanks(props: any) {
  const handleReset = () => {
    props.resetForm();
  };
  return (
    <div>
      <h2>Obrigado pela sua avaliação 🚀</h2>
      <p>Caso queira fazer outra sinta-se a vontade.</p>
      <Box marginTop={2}>
        <Button variant="contained" color="success" onClick={handleReset}>
          Nova avaliação
        </Button>
      </Box>
    </div>
  );
}
