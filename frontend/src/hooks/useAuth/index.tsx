import { useContext } from "react";
import { AuthContext } from "src/context/Auth";

export default function useAuth() {
  return useContext(AuthContext);
}
