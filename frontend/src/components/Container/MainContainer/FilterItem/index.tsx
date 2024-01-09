import { ButtonHTMLAttributes } from "react";

interface Props extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  content: string;
}

export default function FilterItem({ content, onClick }: Readonly<Props>) {
  return (
    <li className="cursor-pointer">
      <button onClick={onClick} type="button">
        {content}
      </button>
    </li>
  );
}
