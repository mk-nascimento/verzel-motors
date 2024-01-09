import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CookiesKeys from "src/enums/Cookies";
export const Authenticated = () => {
  const [authToken, setAuthToken] = useState<{ token: string }>();

  useEffect(function () {
    const token = Cookies.get(CookiesKeys.Token);
    if (token) setAuthToken({ token });
    else localStorage.clear();
  }, []);

  useEffect(
    function () {
      if (authToken) axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    },
    [authToken],
  );

  return <Outlet />;
};
