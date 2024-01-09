import { AxiosError, isAxiosError } from "axios";
import { ProviderProps, createContext, useCallback, useMemo } from "react";
import Endpoints from "src/enums/Endpoins";
import { VehicleListResponse } from "src/interfaces";
import api from "src/services/api";

interface VehicleContextValues {
  getVehicles(): Promise<VehicleListResponse>;
}
interface Props extends Pick<ProviderProps<VehicleContextValues>, "children"> {}

export const VehicleContext = createContext({} as VehicleContextValues);

export default function VehicleProvider({ children }: Readonly<Props>) {
  const getVehicles = useCallback(async function () {
    try {
      return (await api.get<VehicleListResponse>(Endpoints.Vehicles)).data;
    } catch (error) {
      if (isAxiosError<VehicleListResponse>(error))
        throw new AxiosError(error.message, error.code, error.config, error.request, error.response);
      else throw new Error(`unknown error: ${error}`);
    }
  }, []);

  const values = useMemo(() => ({ getVehicles }), [getVehicles]);
  return <VehicleContext.Provider value={values}>{children}</VehicleContext.Provider>;
}
