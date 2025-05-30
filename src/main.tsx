import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import Home from "./Home.tsx";
import FrequencyCalculator from "./frequency-calculator/FrequencyCalculator.tsx";
import PrimeFactorizer from "./prime-factorizer/PrimeFactorizer.tsx";

const router = createHashRouter([
  { path: "/", Component: Home },
  { path: "/frequency-calculator", Component: FrequencyCalculator },
  { path: "/prime-factorizer", Component: PrimeFactorizer },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
