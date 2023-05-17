import { sendingState } from "@/components/contact/Contact";
import React from "react";

export interface FormValues {
  name: string;
  subject: string;
  message: string;
  email: string;
}

export interface FormErrors {
  name: string;
  subject: string;
  message: string;
  email: string;
}

export const LoginValidate = (values: FormValues): FormErrors => {
  const errors: FormErrors = { name: "", subject: "", message: "", email: "" };
  const userRegex = /^([^0-9_-]*)$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const { name, subject, email, message } = values;

  if (!userRegex.test(name)) {
    errors.name = "El nombre no puede contener números";
  }

  if (subject.length <= 6) {
    errors.subject = "El asunto debe tener almenos 6 letras";
  }

  if (message.length <= 10) {
    errors.message = "El mensaje debe ser de almenos 10 letras";
  }

  if (!emailRegex.test(email)) {
    errors.email = "Debes ingresar un correo valido";
  }
  return errors;
};

export function checkErrors({ name, email, subject, message }: FormErrors) {
  if (!name && !email && !subject && !message) return false;
  else return true;
}
