import React, { FC, MouseEventHandler, ReactElement, ReactNode } from "react";

interface ButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactElement<any> | JSX.Element;
}

const Button: FC<ButtonProps> = ({ onClick, title, icon }) => {
  return (
    <button
      onClick={onClick}
      className="text-xs bg-primary px-3 py-2 font-montserrat text-brown-900 bg-brown-300 rounded font-semibold flex justify-center items-center ease-in-out transition-transform hover:scale-[1.02] duration-500"
    >
      {icon ? (
        <div className="flex gap-x-2 items-center">
          {icon}
          <span>{title}</span>
        </div>
      ) : (
        <span>{title}</span>
      )}
    </button>
  );
};

export default Button;
