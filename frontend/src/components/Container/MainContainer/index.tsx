import CarList from "src/components/CarsList";
import mock from "src/local/mock";

interface Base {
  id: string;
}

interface Make extends Base {
  make: string;
}

interface Model extends Base {
  model: string;
}

interface Year extends Base {
  year: number;
}

export default function MainContainer() {
  const brands: Make[] = mock.vehicles.reduce((acc, { id, make }) => {
    if (!acc.some((brand) => brand.make === make)) acc.push({ id, make });

    return acc.sort((a, b) => a.make.localeCompare(b.make));
  }, [] as Make[]);

  const models: Model[] = mock.vehicles.reduce((acc, { id, model }) => {
    if (!acc.some((brand) => brand.model === model)) acc.push({ id, model });

    return acc.sort((a, b) => a.model.localeCompare(b.model));
  }, [] as Model[]);

  const years: Year[] = mock.vehicles.reduce((acc, { id, year }) => {
    if (!acc.some((brand) => brand.year === year)) acc.push({ id, year });

    return acc.sort((a, b) => a.year - b.year);
  }, [] as Year[]);

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
          <ul className="" aria-label="filter options">
            {brands.map(({ id, make }) => (
              <li key={id}>{make}</li>
            ))}
          </ul>
        </details>

        <details className="details">
          <summary className="summary">Modelo</summary>
          <ul className="" aria-label="filter options">
            {models.map(({ id, model }) => (
              <li key={id}>{model}</li>
            ))}
          </ul>
        </details>

        <details className="details">
          <summary className="summary">Ano</summary>
          <ul className="" aria-label="filter options">
            {years.map(({ id, year }) => (
              <li key={id}>{year}</li>
            ))}
          </ul>
        </details>
      </aside>
      <main className="flex-[2] bg-gray-100">{<CarList />}</main>
    </div>
  );
}
