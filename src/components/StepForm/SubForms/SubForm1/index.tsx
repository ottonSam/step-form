import { Box, Typography } from "@mui/material";
import React from "react";
import SubStepper from "../../SubStepper";
import SubSubForms1_1 from "./SubSubForms/SubSubForms1_1";
import SubSubForms1_2 from "./SubSubForms/SubSubForms1_2";

// import { Container } from './styles';

interface IProps {
  subStep: number;
}

const SubForm1: React.FC<IProps> = ({ subStep }) => {
  const StepComponents: [number, JSX.Element][] = [
    [0, <SubSubForms1_1 subStep={0} />],
    [0, <SubSubForms1_1 subStep={1} />],
    [1, <SubSubForms1_2 />],
  ];

  const steps: [number, string][] = [
    [0, "1.1"],
    [1, "1.2"],
  ];

  return (
    <Box>
      <Typography>SubStep1</Typography>
      <SubStepper active={StepComponents[subStep][0]} steps={steps} />
      <Box>{StepComponents[subStep][1]}</Box>
    </Box>
  );
};

export default SubForm1;
