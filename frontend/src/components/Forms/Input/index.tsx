import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label: string;
  register?: UseFormRegisterReturn<string>;
}

export default function Input({ error, label, register, ..._props }: Readonly<Props>) {
  return (
    <label className="relative cursor-pointer capitalize text-gray-600">
      {label}: <span className="inline-flex text-red-500">* {error ? error.message : null}</span>{" "}
      <input {..._props} {...register} maxLength={_props.type == "password" ? 16 : undefined} />
    </label>
  );
}
