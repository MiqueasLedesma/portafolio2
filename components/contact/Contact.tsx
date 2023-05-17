import * as React from "react";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillHeart,
} from "react-icons/ai";
import { FieldContact } from "../input/fieldContact";
import { formProps } from "@/constants";
import apiClient from "@/axios.config";
import { FormErrors, LoginValidate, checkErrors } from "@/utils/inputField";

interface props {}

export type FormContact = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export enum sendingState {
  NULL,
  SENDING,
  SUCCESS,
  ERROR,
}

export default function Contact({}: props) {
  const [form, setForm] = React.useState<FormContact>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [error, setError] = React.useState<FormErrors>({
    email: "",
    name: "",
    message: "",
    subject: "",
  });

  const [state, setState] = React.useState<sendingState>(sendingState.NULL);

  const propsFormInputs = {
    form,
    setForm,
    error,
    setError,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setState(() => sendingState.SENDING);
    try {
      const sendForm = await apiClient.post("api/sendEmail", form);
      if (sendForm.status == 200) {
        setState(sendingState.SUCCESS);
      }
    } catch (error: any) {
      setState(() => sendingState.ERROR);
    }
  };

  function sendState(state: React.ComponentState) {
    switch (state) {
      case sendingState.NULL:
        return <></>;
      case sendingState.SENDING:
        return (
          <h4 className="inline-block whitespace-nowrap">Enviando Email...</h4>
        );
      case sendingState.SUCCESS:
        return (
          <h4 className="inline-block whitespace-nowrap">
            Tu mensaje a sido enviado con exito!
          </h4>
        );
      case sendingState.ERROR:
        return (
          <h4 className="inline-block whitespace-nowrap">
            Ha ocurrido un error intente nuevamente!
          </h4>
        );
      default:
        return;
    }
  }

  return (
    <section className="h-screen w-screen bg-white flex flex-row gap-24 md:gap-4">
      <aside className="bg-[#0b1d40] w-1/4 h-screen py-20 flex flex-col justify-center md:justify-start md:py-0 items-center text-slate-400">
        <div className="w-full px-6 flex-col gap-12 flex md:h-full justify-around">
          <div className="md:order-3 md:flex-col md:flex md:items-center">
            <h4 className="font-light md:text-center">Mis Redes</h4>
            <div className="flex flex-row gap-2 w-full md:justify-center md:p-2 md:gap-0 md:translate-y-[2rem] md:items-center">
              <a
                href="https://www.instagram.com/miqueasledesma98/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram size={30} color="#fff" />
              </a>
              <a
                href="https://www.linkedin.com/in/miqueas-ledesma-08a106246/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size={30} color="#fff" />
              </a>
              <a
                href="https://twitter.com/_MiqueasLedesma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle size={30} color="#fff" />
              </a>
            </div>
          </div>
          <div className="md:order-2 md:rotate-90 md:flex-col md:flex md:items-center">
            <h4 className="font-light">Telefono</h4>
            <h4 className="text-white md:whitespace-nowrap">+54 3704 716194</h4>
          </div>
          <div className="md:order-1 md:rotate-90 md:flex-col md:flex md:items-center md:translate-y-[3rem]">
            <h4 className="font-light">Email</h4>
            <a
              className="text-white"
              href="mailto:miqueasledesmadev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="md:whitespace-nowrap md:text-xs">
                miqueasledesmadev@gmail.com
              </h4>
            </a>
          </div>
          <h4 className="text-sm md:text-center md:hidden">
            Made it with{" "}
            <AiFillHeart
              size={18}
              style={{ display: "inline-block", marginBottom: "-2px" }}
            />{" "}
            by Miqueas Ledesma
          </h4>
        </div>
      </aside>

      <div className="flex flex-col gap-12 w-full md:items-center md:justify-center md:pr-4">
        <div className="md:flex md:flex-col text-black md:items-center md:justify-center mt-14 xs:mt-0">
          <h1 className="text-4xl font-semibold md:text-xl">
            Enviame un mensaje:
          </h1>
          <div className="w-[2rem] h-2 rounded-md bg-blue-600 my-2"></div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-12 gap-12 md:flex md:flex-col md:items-center xs:gap-6"
        >
          {formProps &&
            formProps.map((e, index) => (
              <FieldContact key={index} {...propsFormInputs} {...e} />
            ))}
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={
                state === sendingState.SENDING || state === sendingState.SUCCESS
              }
              className={`bg-white border-[1px] p-4 w-fit h-fit rounded-lg border-blue-600 shadow-lg hover:shadow-xl hover:shadow-blue-600 transition-all ease-in shadow-blue-600 font-semibold text-blue-600 whitespace-nowrap disabled:shadow-none disabled:border-gray-300 disabled:text-gray-300`}
            >
              Enviar mensaje
            </button>
            {sendState(state)}
          </div>
        </form>
      </div>
    </section>
  );
}
