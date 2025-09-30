import "./Cart.scss";
import { useEffect, useRef } from "react";

import EmptyCart from "./EmptyCart";
import Cart from "./Cart";
import type { CartHookReturn } from "../../shared/CastomHook/useCartHook";

type CartShowerType = {
  setCartShow: (bool: boolean) => void;
};
export type RefType = {
  dropdownRef: React.Ref<HTMLDivElement>;
};

function CartShower({
  setCartShow,
  cartContents,
  clickMinusInCart,
  clickPlusInCart,
}: CartShowerType & CartHookReturn) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickMarkerDown(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCartShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickMarkerDown);
    return () => {
      document.removeEventListener("mousedown", handleClickMarkerDown);
    };
  }, []);

  if (cartContents.length === 0) {
    return <EmptyCart dropdownRef={dropdownRef} />;
  }
  return (
    <Cart
      dropdownRef={dropdownRef}
      cartContents={cartContents}
      clickMinusInCart={clickMinusInCart}
      clickPlusInCart={clickPlusInCart}
    />
  );
}
export default CartShower;
