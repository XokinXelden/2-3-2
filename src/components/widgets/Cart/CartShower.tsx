import "./Cart.scss";
import { useContext } from "react";
import cartContentsContext from "../../features/cartCountersContext";
import EmptyCart from "./EmptyCart";
import Cart from "./Cart";

function CartShower() {
  const [cartContents, clickMinusInCart, clickPlusInCart] =
    useContext(cartContentsContext);

  if (cartContents.length === 0) {
    return <EmptyCart />;
  }
  return (
    <Cart
      cartContents={cartContents}
      clickMinusInCart={clickMinusInCart}
      clickPlusInCart={clickPlusInCart}
    />
  );
}
export default CartShower;
