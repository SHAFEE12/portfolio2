
import { useState } from "react";
import EasterEggContext from "./EasterEggContext";

export default function EasterEggProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  const startEasterEgg = () => {
    // console.log("Provider -> startEasterEgg called");
    setIsActive(true);
  };

  const stopEasterEgg = () => {
    // console.log("Provider -> stopEasterEgg called");
    setIsActive(false);
  };

  // console.log("Provider Render -> isActive =", isActive);

  return (
    <EasterEggContext.Provider
      value={{
        isActive,
        startEasterEgg,
        stopEasterEgg,
      }}
    >
      {children}
    </EasterEggContext.Provider>
  );
}