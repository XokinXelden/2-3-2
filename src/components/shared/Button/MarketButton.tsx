import { Button } from "@mantine/core";
import whiteCart from "../../shared/pictures/Button/White Cart.png";
import "./MarketButton.scss";

type ButtonsFunction = {
  onClick: () => void;
};
export type Buttons = {
  cartValue?: number;
  buttonName: string;
  buttonVariant: string;
} & ButtonsFunction;

function MarketButton({
  cartValue,
  buttonName,
  buttonVariant,
  onClick,
}: Buttons) {
  return (
    <Button
      size="sm"
      variant={buttonVariant}
      color="#54B46A"
      style={{ width: "144px", height: "38px" }}
      leftSection={
        cartValue
          ? cartValue > 0 && <div className="cart-badge">{cartValue}</div>
          : null
      }
      rightSection={<img src={whiteCart} />}
      onClick={() => onClick()}
    >
      <p>{buttonName}</p>
    </Button>
  );
}
export default MarketButton;
