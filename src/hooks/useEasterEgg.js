import { useContext } from "react";
import EasterEggContext from "../components/EasterEgg/EasterEggContext";


export default function useEasterEgg() {
  return useContext(EasterEggContext);
}