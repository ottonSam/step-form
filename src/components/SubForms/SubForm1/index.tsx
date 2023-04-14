import { Box, Typography } from "@mui/material";
import React from "react";
import SubSubForms1_1 from "./SubSubForms/SubSubForms1_1";
import SubSubForms1_2 from "./SubSubForms/SubSubForms1_2";

// import { Container } from './styles';

interface IProps {
  subStep: number;
}

const SubForm1: React.FC<IProps> = ({ subStep }) => {
  const StepComponents = [
    <SubSubForms1_1 subStep={0} />,
    <SubSubForms1_1 subStep={1} />,
    <SubSubForms1_2 />,
  ];
  return (
    <Box>
      <Typography>SubStep1</Typography>
      <Box>{StepComponents[subStep]}</Box>
    </Box>
  );
};

export default SubForm1;
