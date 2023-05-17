import React from "react";
import { FormContact } from "../contact/Contact";
import { FormErrors, LoginValidate } from "@/utils/inputField";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  htmlFor: string;
  form: React.ComponentState;
  setForm: React.Dispatch<React.SetStateAction<FormContact>>;
  error: React.ComponentState;
  setError: React.Dispatch<React.SetStateAction<FormErrors>>;
};

export const FieldContact = (props: Props) => {
  const { label, type, placeholder, htmlFor, form, setForm, setError, error } =
    props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm((prevForm: FormContact) => {
      const updateForm = { ...prevForm, [name]: value };
      return updateForm;
    });
    setError(LoginValidate({ ...form, [name]: value }));
  };

  return (
    <fieldset className="flex flex-col gap-2 col-span-6">
      <label className="text-lg font-light" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        name={htmlFor}
        onChange={handleChange}
        value={form[htmlFor]}
        type={type}
        placeholder={placeholder}
        id={htmlFor}
        className="border-b-[0.2px] border-slate-600 py-2 text-slate-600 focus:outline-none w-[250px]"
      />
      <p className="text-red-500 text-xs">{error[htmlFor]}</p>
    </fieldset>
  );
};
