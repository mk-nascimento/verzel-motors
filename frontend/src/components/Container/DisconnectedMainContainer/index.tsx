import { useState } from "react";
import Form, { TTitle } from "src/components/Forms/Form";

export default function DisconnectedContainer() {
  const [title, setTitle] = useState<TTitle>("Iniciar Sessão");
  return (
    <div
      id="disconnected-container"
      aria-label="main disconnected content container"
      className="z-[2] flex h-[calc(100vh-6rem)] w-full flex-row px-4 shadow-md md:px-8"
    >
      <aside
        aria-label="background image"
        id="background-image"
        className="hidden flex-[1] flex-col gap-4 overflow-y-auto bg-[url(/src/assets/background-car.svg)] bg-cover bg-right-bottom p-8 shadow-md md:flex"
      />
      <main className="flex flex-[2] items-center justify-center bg-gray-100">
        {<Form title={title} setTitle={setTitle} />}
      </main>
    </div>
  );
}
