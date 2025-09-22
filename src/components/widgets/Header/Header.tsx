import { useState } from "react";
import MarketButton from "../../shared/Button/MarketButton";
import logo from "../../shared/pictures/logo.png";
import Cart from "../Cart/Cart";

function Header({ cartValue }: { cartValue: number }) {
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
      {cartShow && <Cart />}
    </>
  );
}

export default Header;
