import { createContext } from "react";
import type { cartContentsType } from "../App/App";

export type cartContentsAllType = [
  cartContents: cartContentsType[],
  clickMinusInCart: (id: number) => void,
  clickPlusInCart: (id: number) => void
];

const cartContentsContext = createContext<cartContentsAllType>([
  [],
  () => {},
  () => {},
]);

export default cartContentsContext;
