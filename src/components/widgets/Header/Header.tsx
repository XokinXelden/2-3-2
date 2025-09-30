import { useState } from "react";
import MarketButton from "../../shared/Button/MarketButton";
import logo from "../../shared/pictures/logo.png";
import CartShower from "../Cart/CartShower";
import type { cartContentsType } from "../../App/App";

export type HeadButtonType = {
  clickMinusInCart: (id: number) => void;
  clickPlusInCart: (id: number) => void;
  cartContents: cartContentsType[];
};
type ValueType = { cartValue: number };

function Header({
  cartContents,
  cartValue,
  clickPlusInCart,
  clickMinusInCart,
}: HeadButtonType & ValueType) {
  const [cartShow, setCartShow] = useState<boolean>(false);
  function onCart() {
    setCartShow(!cartShow);
  }

  return (
    <>
      <header>
        <img src={logo}></img>
        <MarketButton
          cartValue={cartValue}
          buttonName="Cart"
          buttonVariant="filled"
          onClick={onCart}
        />
      </header>
      {cartShow && (
        <CartShower
          setCartShow={setCartShow}
          cartContents={cartContents}
          clickMinusInCart={clickMinusInCart}
          clickPlusInCart={clickPlusInCart}
        />
      )}
    </>
  );
}

export default Header;
