import React from "react";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  htmlFor: string;
};

export const FieldContact = (props: Props) => {
  const { label, type, placeholder, htmlFor } = props;
  return (
    <fieldset className="flex flex-col gap-2 col-span-6">
      <label className="text-lg font-light" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={htmlFor}
        className="border-b-[0.2px] border-slate-600 py-2 text-slate-600 focus:outline-none w-[250px]"
      />
    </fieldset>
  );
};
