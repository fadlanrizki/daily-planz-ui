import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={"rounded bg-primary py-2 px-4 text-sm text-white transition ease-in delay-75 hover:bg-primary_hover active:bg-primary_hover"}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
