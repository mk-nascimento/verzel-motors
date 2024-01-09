import { ButtonHTMLAttributes } from "react";

interface Props extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  tip: string;
  content: string;
}

export default function HeaderTips({ tip, content, onClick }: Readonly<Props>) {
  return (
    <p className="small-tip">
      {tip}{" "}
      <button type="button" onClick={onClick} className="small-tip__button">
        {content}
      </button>
    </p>
  );
}
