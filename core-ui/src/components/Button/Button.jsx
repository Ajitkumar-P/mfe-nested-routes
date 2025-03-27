import React from "react";
import PropTypes from "prop-types";
import "tailwindcss";

const VARIANTS = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  danger: "bg-red-500 text-white",
};

const Button = ({ variant = "primary", children, ...props }) => {
  console.log('Button Variant:', variant);
  console.log('Tailwind Class:', VARIANTS[variant]);

  return (
    <button
      className={`px-4 py-2 rounded ${VARIANTS[variant]} border`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  children: PropTypes.node.isRequired,
};

export default Button;