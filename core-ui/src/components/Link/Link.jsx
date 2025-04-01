import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Link = ({ to, children, ...props }) => {
  const location = useLocation();
  console.log("Current Location:", location); // Debug location

  return (
    <RouterLink
      to={to}
      className="text-blue-600 hover:text-blue-800 font-medium"
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
