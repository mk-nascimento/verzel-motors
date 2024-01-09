import { useEffect, useState } from "react";
import CarList from "src/components/CarsList";
import useVehicle from "src/hooks/useVehicle";
import { Vehicle } from "src/interfaces";
import FilterItem from "./FilterItem";

interface Base {
  id: number;
}

interface Make extends Base {
  make: string;
}

interface Model extends Base {
  model: string;
}

export default function MainContainer() {
  const { getVehicles } = useVehicle();
  const [cars, setCars] = useState<Vehicle[]>([]);

  useEffect(
    function () {
      async function fetch() {
        const { vehicles } = await getVehicles();
        setCars(vehicles ?? []);
      }

      fetch();
    },
    [getVehicles],
  );
  const brands: Make[] = cars.reduce((arr, { id, make }) => {
    if (!arr.some((brand) => brand.make === make)) arr.push({ id, make });

    return arr.sort((a, b) => a.make.localeCompare(b.make));
  }, [] as Make[]);

  const models: Model[] = cars.reduce((arr, { id, model }) => {
    if (!arr.some((brand) => brand.model === model)) arr.push({ id, model });

    return arr.sort((a, b) => a.model.localeCompare(b.model));
  }, [] as Model[]);

  return (
    <div
      id="main-container"
      aria-label="main content container"
      className="z-[2] flex h-[calc(100vh-6rem)] w-full flex-row gap-4 px-8 shadow-md"
    >
      <aside
        aria-label="car filter"
        id="filter"
        className="flex flex-[1] flex-col gap-4 overflow-y-auto bg-gray-100 p-8 shadow-md"
      >
        <details className="details">
          <summary className="summary">Marca</summary>
          <ul className="flex flex-col gap-1" aria-label="filter options">
            {brands.map(({ id, make }) => (
              <FilterItem key={id} content={make} onClick={() => console.log(make)} />
            ))}
          </ul>
        </details>

        <details className="details">
          <summary className="summary">Modelo</summary>
          <ul className="flex flex-col gap-1" aria-label="filter options">
            {models.map(({ id, model }) => (
              <FilterItem key={id} content={model} onClick={() => console.log(model)} />
            ))}
          </ul>
        </details>
      </aside>
      <main className="flex-[2] bg-gray-100">{<CarList cars={cars} />}</main>
    </div>
  );
}
