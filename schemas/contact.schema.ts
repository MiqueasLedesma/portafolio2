import * as yup from "yup";
const regexForNames = /^([^0-9_-]*)$/;

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(regexForNames, "El campo nombre no puede contener numeros")
    .required("Debes ingresar un nombre"),
  mail: yup
    .string()
    .email("Debes ingresar un email válido")
    .required("Debes ingresar un email"),
  message: yup
    .string()
    .required("Debes ingresar un mensaje")
    .min(10, "El mensaje debe contener más de 10 carácteres"),
  subject: yup
    .string()
    .required("Debes Ingresar un asunto")
    .min(5, "El asunto debe ser de almenos 5 digitos"),
});
