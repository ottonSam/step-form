import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres.")
    .required("O nome é obrigatório."),
  email: yup
    .string()
    .email("O email informado é invalido.")
    .required("O email é obrigatório."),
  state: yup.string().required("O estado é obrigatório"),
  city: yup.string().required("A cidade é obrigatória"),
  review: yup.string().required("A avaliação é obrigatória."),
  comment: yup.string().required("O comentário é obrigatório."),
});

export default validationSchema;
