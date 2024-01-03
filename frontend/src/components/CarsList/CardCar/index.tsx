import { LiHTMLAttributes } from "react";
import { Vehicles } from "src/local/mock";

interface Props
  extends Omit<LiHTMLAttributes<HTMLLIElement>, "className">,
    Omit<Vehicles, "id" | "user_id"> {}

export default function CarCard({
  make,
  model,
  photo,
  price,
  year,
  ..._props
}: Props) {
  return (
    <li
      className="flex flex-col rounded-lg border-[0.75] border-black shadow-lg"
      {..._props}
    >
      <img className="flex-[1] object-cover" src={photo} alt={model} />

      <div className="p flex flex-[2] flex-col gap-2 p-4">
        <p className="text-lg font-semibold text-gray-800">
          {make} -{" "}
          <span className="text-base font-medium text-gray-700">{model}</span>
        </p>

        <p className="font-medium">
          Preço à vista <br />
          <span className="font-semibold">{price}</span>
        </p>

        <p className="font-medium">
          Ano - <span className="font-semibold">{year}</span>
        </p>
      </div>
    </li>
  );
}
