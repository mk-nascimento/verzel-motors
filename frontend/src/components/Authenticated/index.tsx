import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";
import Pathnames from "src/enums/Pathnames";
export const Authenticated = () => {
  axios.defaults.headers.common.Authorization = `Bearer `;
  const bool = true;

  return bool ? <Outlet /> : <Navigate to={Pathnames.Session} />;
};
