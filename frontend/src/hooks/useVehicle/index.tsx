import { useContext } from "react";
import { VehicleContext } from "src/context/Vehicles";

export default function useVehicle() {
  return useContext(VehicleContext);
}
