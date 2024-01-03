import { HTMLAttributes } from "react";
import mock from "src/local/mock";
import CarCard from "./CardCar";

interface Props extends Omit<HTMLAttributes<HTMLUListElement>, "className"> {}
export default function CarList(_props: Props) {
  const cars = mock.vehicles.sort(
    (a, b) =>
      +a.price.split(" ")[1].split(",")[0].replace(".", "") -
      +b.price.split(" ")[1].split(",")[0].replace(".", ""),
  );
  return (
    <ul
      className="gap grid h-full grid-cols-2 gap-5 overflow-y-auto p-8 md:grid-cols-3"
      {..._props}
    >
      {cars.map((car) => (
        <CarCard
          key={car.id}
          make={car.make}
          model={car.model}
          photo={car.photo}
          price={car.price}
          year={car.year}
        />
      ))}
    </ul>
  );
}
