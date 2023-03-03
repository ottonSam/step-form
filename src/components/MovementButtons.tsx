import { Box, Button } from "@mui/material";

interface IMovementButtonsProps {
  currentStep: number;
  nextStep: () => void;
  backStep: () => void;
}

const MovementButtons = ({
  currentStep,
  nextStep,
  backStep,
}: IMovementButtonsProps) => (
  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
    <Button
      disabled={currentStep === 0}
      variant="outlined"
      color="secondary"
      onClick={() => backStep}
      sx={{ mr: 1 }}
    >
      Voltar
    </Button>
    {currentStep < 2 ? (
      <Button variant="outlined" type="button" onClick={() => nextStep}>
        Próximo
      </Button>
    ) : (
      <Button variant="contained" color="success" type="submit">
        Enviar
      </Button>
    )}
  </Box>
);

export default MovementButtons;
