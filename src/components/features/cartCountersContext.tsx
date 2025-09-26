import { createContext } from "react";
import type { cartContentsType } from "../App/App";

const cartContentsContext = createContext<cartContentsType[]>([]);

export default cartContentsContext;
