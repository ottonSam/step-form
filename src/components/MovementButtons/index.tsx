import { Box, Button, Typography } from "@mui/material";

interface IProps {
  currentStep: number;
  maxStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

const MovementButtons: React.FC<IProps> = ({
  currentStep,
  maxStep,
  nextStep,
  prevStep,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Button
        disabled={currentStep === 0}
        variant="contained"
        color="secondary"
        onClick={() => prevStep()}
        sx={{ mr: 1 }}
      >
        Voltar
      </Button>
      {currentStep < maxStep - 1 ? (
        <Button variant="contained" type="button" onClick={() => nextStep()}>
          Próximo
        </Button>
      ) : (
        <Button variant="contained" color="success" type="submit">
          Enviar
        </Button>
      )}
    </Box>
  );
};
export default MovementButtons;
