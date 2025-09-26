import { useState } from "react";
import MarketButton from "../../shared/Button/MarketButton";
import logo from "../../shared/pictures/logo.png";
import Cart from "../Cart/Cart";

export type HeadButtonType = {
  clickMinusInCart: (id: number) => void;
  clickPlusInCart: (id: number) => void;
};
type HeaderType = {
  cartValue: number;
} & HeadButtonType;

function Header({ cartValue, clickMinusInCart, clickPlusInCart }: HeaderType) {
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
        <Cart
          clickMinusInCart={clickMinusInCart}
          clickPlusInCart={clickPlusInCart}
        />
      )}
    </>
  );
}

export default Header;
