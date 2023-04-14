import { Box, Typography } from "@mui/material";
import React from "react";
import SubSubStepper from "../../../SubSubStepper";
import SubSubStep1_1_1 from "./SubSubSteps/SubSubStep1_1_1";
import SubSubStep1_1_2 from "./SubSubSteps/SubSubStep1_1_2";

// import { Container } from './styles';

interface IProps {
  subStep: number;
}

const SubStep1_1: React.FC<IProps> = ({ subStep }) => {
  const stepComponents: [number, JSX.Element][] = [
    [0, <SubSubStep1_1_1 />],
    [1, <SubSubStep1_1_2 />],
  ];
  return (
    <Box>
      <Typography>1.1</Typography>
      <SubSubStepper active={subStep} steps={[0, 1]} />
      <Box>{stepComponents[subStep][1]}</Box>
    </Box>
  );
};

export default SubStep1_1;
