import { ButtonHTMLAttributes } from "react";

interface Props extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  tip: string;
  buttonText: string;
}

export default function HeaderTips({ tip, buttonText, onClick }: Readonly<Props>) {
  return (
    <p className="small-tip">
      {tip}{" "}
      <button type="button" {...onClick} className="small-tip__button">
        {buttonText}
      </button>
    </p>
  );
}
