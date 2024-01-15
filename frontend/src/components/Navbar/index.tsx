import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import StorageKeys from "src/enums/LocalStorage";
import Pathnames from "src/enums/Pathnames";
import useLogged from "src/hooks/useLogged";
import { SessionStorage } from "src/interfaces";

interface Props {}
export default function Navbar({ ..._props }: Readonly<Props>) {
  const [signin, setSignin] = useState<boolean>(false);
  const { logged } = useLogged();

  const storage = localStorage.getItem(StorageKeys.session);
  let username: string = "";
  if (storage) username = (JSON.parse(storage) as SessionStorage).uname;

  const pathname = location.pathname;
  useEffect(
    function () {
      if (pathname === Pathnames.Session) setSignin(true);
      else setSignin(false);
    },
    [pathname],
  );

  return (
    <div aria-label="navbar container" className="sticky left-0 top-0 z-[1] h-24 w-full bg-brand-100 px-8 py-4">
      <nav {..._props} className="flex h-full w-full items-center justify-between">
        <Link className="h-full" to={Pathnames.Homepage}>
          <img className="h-full" src="/src/assets/verzel.svg" alt="verzel-motors logo" />
        </Link>

        {signin && (
          <Link
            className="inline-flex border-spacing-2 items-center gap-2 rounded border border-gray-500 px-3 py-1 text-base font-semibold text-white"
            to={Pathnames.Homepage}
          >
            <BsPersonCircle />
            Homepage
          </Link>
        )}

        {!signin && !logged && (
          <Link
            className="inline-flex border-spacing-2 items-center gap-2 rounded border border-gray-500 px-3 py-1 text-base font-semibold text-white"
            to={Pathnames.Session}
          >
            <BsPersonCircle />
            Iniciar sessão
          </Link>
        )}

        {logged && (
          <p className="inline-flex items-center gap-2 capitalize text-white">
            <BsPersonCircle size={24} /> <span className="underline">{username}</span>
          </p>
        )}
      </nav>
    </div>
  );
}
