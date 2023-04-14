import { Box, Typography } from "@mui/material";
import React from "react";
import SubSubSubForms1_1_1 from "./SubSubSubForms/SubSubSubForms1_1_1";
import SubSubSubForms1_1_2 from "./SubSubSubForms/SubSubSubForms1_1_2";

// import { Container } from './styles';

interface IProps {
  subStep: number;
}

const SubSubForms1_1: React.FC<IProps> = ({ subStep }) => {
  const stepComponents = [<SubSubSubForms1_1_1 />, <SubSubSubForms1_1_2 />];
  return (
    <Box>
      <Typography>1.1</Typography>
      <Box>{stepComponents[subStep]}</Box>
    </Box>
  );
};

export default SubSubForms1_1;
