import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import useAuth from "src/hooks/useAuth";
import { LoginRequest } from "src/interfaces";
import { TUserBaseData, userBase } from "src/schemas";
import Input from "../Input";
import HeaderTips from "./HeaderTips";

export type TTitle = "Iniciar Sessão" | "Cadastre-se";
interface Props {
  title: TTitle;
  setTitle: React.Dispatch<React.SetStateAction<TTitle>>;
}

export default function Form({ title, setTitle }: Readonly<Props>) {
  const { login } = useAuth();
  const useFormMethods = useForm<TUserBaseData>({ resolver: zodResolver(userBase) });
  const { formState, handleSubmit, register } = useFormMethods;
  const { errors } = formState;

  function submit(data: LoginRequest) {
    switch (title) {
      case "Iniciar Sessão":
        return login(data);
      default:
        return console.log(data);
    }
  }

  const handleTitle = useCallback(
    function () {
      setTitle((prev) => (prev == "Cadastre-se" ? "Iniciar Sessão" : "Cadastre-se"));
    },
    [setTitle],
  );

  const HeaderTip = useMemo(
    function () {
      switch (title) {
        case "Iniciar Sessão":
          return <HeaderTips buttonText="cadastre-se" tip="Já possui uma conta ?" onClick={handleTitle} />;

        case "Cadastre-se":
          return <HeaderTips buttonText="iniciar sessão" tip="Ainda não é cadastrado ?" onClick={handleTitle} />;
      }
    },
    [handleTitle, title],
  );

  return (
    <form className="flex w-96 flex-col items-center gap-6" onSubmit={handleSubmit(submit)}>
      <div>
        <h2 className="w-full text-center text-xl font-semibold capitalize text-gray-600">{title}</h2>

        {HeaderTip}
      </div>

      <Input className="input" label="username" register={register("username")} error={errors.username} />
      <Input
        className="input"
        label="password"
        register={register("password")}
        error={errors.password}
        type="password"
      />

      <button
        className="w-full rounded-lg border border-[2] border-gray-200 bg-gray-100 px-6 py-4 capitalize hover:bg-gray-200 focus:bg-gray-200"
        type="submit"
      >
        {title}
      </button>
    </form>
  );
}
