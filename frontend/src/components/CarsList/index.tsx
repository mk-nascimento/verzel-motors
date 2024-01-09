import { HTMLAttributes } from "react";
import { Vehicle } from "src/interfaces";
import CarCard from "./CardCar";

interface Props extends Omit<HTMLAttributes<HTMLUListElement>, "className"> {
  cars: Vehicle[];
}
export default function CarList({ cars, ..._props }: Readonly<Props>) {
  return (
    <ul className="gap grid h-full grid-cols-2 gap-5 overflow-y-auto p-8 md:grid-cols-3" {..._props}>
      {cars.map((car) => (
        <CarCard key={car.id} make={car.make} model={car.model} name={car.name} photo={car.photo} price={car.price} />
      ))}
    </ul>
  );
}
