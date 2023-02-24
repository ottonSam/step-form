import { Box, Container, Paper } from "@mui/material";
import React from "react";
import "./App.css";

import StepForm from "./components/StepForm";

function App() {
  return (
    <Container maxWidth="lg">
      <Box marginTop={2}>
        <Paper elevation={4}>
          <StepForm />
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
