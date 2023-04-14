import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

// import { Container } from './styles';

interface IProps {
  steps: number[];
  active: number;
}

const SubSubStepper: React.FC<IProps> = ({ active, steps }) => {
  return (
    <Stack direction="row" gap={1}>
      {steps.map((stepIndex) =>
        stepIndex === active ? (
          <Box
            key={stepIndex}
            borderRadius={10}
            sx={{ width: "12px", height: "12px", backgroundColor: "#3DC06F" }}
          >
            {""}
          </Box>
        ) : (
          <Box
            key={stepIndex}
            borderRadius={10}
            sx={{ width: "12px", height: "12px", backgroundColor: "#CFEFDB" }}
          >
            {""}
          </Box>
        )
      )}
    </Stack>
  );
};

export default SubSubStepper;
