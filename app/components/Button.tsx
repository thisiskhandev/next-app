import React from "react";

interface ButtonProps {
  label?: string;
  style?: string;
}

const ButtonComp = ({ label }: ButtonProps) => {
  return (
    <button className="btn bg-teal-300 w-11">{label || "Get A Quote"}</button>
  );
};

export default ButtonComp;
