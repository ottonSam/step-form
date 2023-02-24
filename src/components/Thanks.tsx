import React from "react";
import Button from "@mui/material/Button";

export default function Thanks(props: any) {
  const handleReset = () => {
    props.resetForm();
  };
  return (
    <div>
      <p>Thanks bro</p>
      <Button variant="contained" color="success" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
}
