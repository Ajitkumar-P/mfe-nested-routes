import React, { lazy } from "react";


// Import MFEs dynamically
const MFE1 = lazy(() => import("mfe1/App"));
const MFE2 = lazy(() => import("mfe2/App"));

const routes = [
  { path: "/", element: <h2>Home Page</h2> },
  { path: "/mfe1/*", element: <MFE1 /> }, // MFE1 handles its own sub-routes
  { path: "/mfe2/*", element: <MFE2 /> }, // MFE2 handles its own sub-routes
];

export default routes;
