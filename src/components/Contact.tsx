import React from "react";
import TextFieldComponent from "../utils/TextFieldComponent";

// import { Container } from './styles';

const components: React.FC = () => {
  return (
    <>
      <TextFieldComponent name="name" label="Nome" />
      <TextFieldComponent name="email" label="Email" />
    </>
  );
};

export default components;
