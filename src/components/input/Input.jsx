import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="rounded outline-none border border-primary py-2 px-2 hover:border-primary_hover"
    />
  );
};

export default Input;
