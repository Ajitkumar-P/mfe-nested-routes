import React from "react";
import PropTypes from "prop-types";
import "tailwindcss";

const NAV_VARIANTS = {
  light: "bg-gray-100 text-gray-700",
  dark: "bg-gray-800 text-white",
};

const Nav = ({ variant = "light", children, ...props }) => {
  console.log("Nav Variant:", variant);
  console.log("Tailwind Class:", NAV_VARIANTS[variant]);

  return (
    <nav className={`p-4 ${NAV_VARIANTS[variant]} flex space-x-4`} {...props}>
      {children}
    </nav>
  );
};

Nav.propTypes = {
  variant: PropTypes.oneOf(["light", "dark"]),
  children: PropTypes.node.isRequired,
};

export default Nav;
