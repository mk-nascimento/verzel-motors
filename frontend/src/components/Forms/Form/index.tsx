import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TUserBaseData, userBase } from "src/schemas";
import Input from "../Input";

export type TTitle = "Iniciar Sessão" | "Cadastre-se";
interface Props {
  title: TTitle;
  setTitle: React.Dispatch<React.SetStateAction<TTitle>>;
}

export default function Form({ title, setTitle }: Readonly<Props>) {
  const useFormMethods = useForm<TUserBaseData>({ resolver: zodResolver(userBase) });
  const { formState, handleSubmit, register } = useFormMethods;
  const { errors } = formState;

  function renderLoginOptions() {
    switch (title) {
      case "Iniciar Sessão":
        return (
          <p className="small-tip">
            Ainda não é cadastrado ?{" "}
            <button type="button" onClick={() => setTitle("Cadastre-se")} className="small-tip__button">
              cadastre-se
            </button>
          </p>
        );
      case "Cadastre-se":
        return (
          <p className="small-tip">
            Já possui uma conta?{" "}
            <button type="button" onClick={() => setTitle("Iniciar Sessão")} className="small-tip__button">
              iniciar sessão
            </button>
          </p>
        );
    }
  }

  return (
    <form className="flex w-96 flex-col items-center gap-6" onSubmit={handleSubmit(console.log)}>
      <div className="">
        <h2 className="w-full text-center text-xl font-semibold capitalize text-gray-600">{title}</h2>

        {renderLoginOptions()}
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
