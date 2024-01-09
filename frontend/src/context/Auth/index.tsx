import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import Cookies from "js-cookie";
import { ProviderProps, createContext, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CookiesKeys from "src/enums/Cookies";
import Endpoints from "src/enums/Endpoins";
import Pathnames from "src/enums/Pathnames";
import { LoginRequest, TokenResponse } from "src/interfaces";
import api from "src/services/api";

interface AuthContextValues {
  login(data: LoginRequest): Promise<void>;
  logout(): void;
}
interface Props extends Pick<ProviderProps<AuthContextValues>, "children"> {}

export const AuthContext = createContext({} as AuthContextValues);

export default function AuthProvider({ children }: Readonly<Props>) {
  const navigate = useNavigate();

  const login = useCallback(
    async function (data: LoginRequest): Promise<void> {
      try {
        const { data: response }: AxiosResponse<TokenResponse> = await api.post<TokenResponse>(Endpoints.Login, data);

        const [ckey, cvalue]: [string, string] = [CookiesKeys.Token, response.access_token];
        Cookies.set(ckey, cvalue, { path: "/", sameSite: "Lax", secure: true });
        navigate(Pathnames.Homepage);
      } catch (error) {
        if (isAxiosError<TokenResponse>(error))
          throw new AxiosError(error.message, error.code, error.config, error.request, error.response);
        else throw new Error(`unknown error: ${error}`);
      }
    },
    [navigate],
  );

  const logout = useCallback(async function () {
    Cookies.remove(CookiesKeys.Token);
  }, []);

  const values = useMemo(() => ({ login, logout }), [login, logout]);
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
