import { useState } from "react";
import MarketButton from "../../shared/Button/MarketButton";
import logo from "../../shared/pictures/logo.png";
import CartShower from "../Cart/CartShower";

export type HeadButtonType = {
  clickMinusInCart: (id: number) => void;
  clickPlusInCart: (id: number) => void;
};
type HeaderType = {
  cartValue: number;
};

function Header({ cartValue }: HeaderType) {
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
      {cartShow && <CartShower />}
    </>
  );
}

export default Header;
