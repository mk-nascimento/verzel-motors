import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import CookiesKeys from "src/enums/Cookies";
import StorageKeys from "src/enums/LocalStorage";
import Pathnames from "src/enums/Pathnames";
import useLogged from "src/hooks/useLogged";
import { SessionStorage } from "src/interfaces";
export const UnAuthenticated = () => {
  const { logged } = useLogged();

  useEffect(function () {
    const token = Cookies.get(CookiesKeys.Token);
    let session: SessionStorage;
    session = JSON.parse(localStorage.getItem(StorageKeys.session)!) ?? {};

    if (token) {
      const { exp, sub } = jwtDecode(token);

      if (exp && Date.now() < exp * 10000) {
        session = { ...session, [StorageKeys.logged]: true, [StorageKeys.username]: String(sub) };

        localStorage.setItem(StorageKeys.session, JSON.stringify(session));
      }
    } else localStorage.setItem(StorageKeys.session, JSON.stringify({ ...session }));
  });

  return logged ? <Navigate to={Pathnames.Homepage} /> : <Outlet />;
};
