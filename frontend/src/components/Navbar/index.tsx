import { useEffect, useRef } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Pathnames from "src/enums/Pathnames";

interface Props {
  signin?: boolean;
}
export default function Navbar({ signin }: Readonly<Props>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(
    function () {
      const { current: nav } = ref;
      let dataset: DOMStringMap | undefined;

      if (nav) dataset = nav.dataset;
      else return;

      if (dataset.signin) nav.className = "flex h-full w-full items-center justify-start";
      else nav.className = "flex h-full w-full items-center justify-between";
    },
    [ref],
  );

  return (
    <div aria-label="navbar container" className="sticky left-0 top-0 z-[1] h-24 w-full bg-brand-100 px-8 py-4">
      <nav ref={ref} data-signin={signin}>
        <Link className="h-full" to={Pathnames.Homepage}>
          <img className="h-full" src="/src/assets/verzel.svg" alt="verzel-motors logo" />
        </Link>

        {!signin && (
          <Link
            className="inline-flex border-spacing-2 items-center gap-2 rounded border border-gray-500 px-3 py-1 text-base font-semibold text-white"
            to={Pathnames.Session}
          >
            <BsPersonCircle />
            Iniciar sessão
          </Link>
        )}
      </nav>
    </div>
  );
}
