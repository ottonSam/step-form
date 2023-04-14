import { Box, Stack, Typography } from "@mui/material";
import React from "react";

// import { Container } from './styles';

interface IProps {
  steps: [number, string][];
  active: number;
}

const SubStepper: React.FC<IProps> = ({ steps, active }) => {
  return (
    <Stack
      direction="row"
      gap={1}
      sx={{ backgroundColor: "#B6E7C9", color: "black" }}
      borderRadius={1}
    >
      {steps.map(([index, label]) => (
        <Box key={index}>
          {index === active && active !== undefined ? (
            <Typography
              p={1}
              borderRadius={1}
              sx={{ backgroundColor: "#3DC06F" }}
            >
              {label}
            </Typography>
          ) : (
            <Typography p={1}>{label}</Typography>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default SubStepper;
