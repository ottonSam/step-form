import { Box, Typography } from "@mui/material";
import React from "react";
import SubStepper from "../../SubStepper";
import SubStep1_1 from "./SubSteps/SubStep1_1";
import SubStep1_2 from "./SubSteps/SubStep1_2";

// import { Container } from './styles';

interface IProps {
  subStep: number;
}

const Step1: React.FC<IProps> = ({ subStep }) => {
  const StepComponents: [number, JSX.Element][] = [
    [0, <SubStep1_1 subStep={0} />],
    [0, <SubStep1_1 subStep={1} />],
    [1, <SubStep1_2 />],
  ];

  const steps: [number, string][] = [
    [0, "1.1"],
    [1, "1.2"],
  ];

  return (
    <Box>
      <Typography>1</Typography>
      <SubStepper active={StepComponents[subStep][0]} steps={steps} />
      <Box>{StepComponents[subStep][1]}</Box>
    </Box>
  );
};

export default Step1;
