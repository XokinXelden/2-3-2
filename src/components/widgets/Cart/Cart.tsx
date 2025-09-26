import { Card, Flex, Image, Text, Group } from "@mantine/core";
import emptyCart from "../../shared/pictures/Cart Empty.png";
import "./Cart.scss";
import ButtonPlusMinus from "../../shared/ButtonPlusMinus/ButtonPlusMinus";
import type { HeadButtonType } from "../Header/Header";
import { useEffect, useState } from "react";
import type { cartContentsType } from "../../App/App";

function Cart({
  cartContents,
  clickMinusInCart,
  clickPlusInCart,
}: HeadButtonType) {
  const [fullPrice, setFullPrice] = useState<number>(0);

  useEffect(() => {
    const newPrice = cartContents.reduce(
      (sum: number, item: cartContentsType) => {
        return sum + item.middlePrice;
      },
      0
    );
    setFullPrice(newPrice);
  }, [cartContents]);

  if (cartContents.length === 0) {
    return (
      <Card
        className="cart"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        w={300}
        h={225}
      >
        <Flex direction="column" align="center">
          <Card.Section>
            <Image src={emptyCart} h="105" w="115px" fit="contain" />
          </Card.Section>
          <Text style={{ color: "#a4aab0", fontSize: "14px" }}>
            Your cart is empty!
          </Text>
        </Flex>
      </Card>
    );
  }
  return (
    <Card
      className="cart"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      w={445}
      mih={225}
    >
      <Card.Section>
        {cartContents.map((elem) => {
          return (
            <Flex key={elem.id} justify="space-between" pl={15} pr={25}>
              <Group>
                <Image src={elem.image} h={75} w={75} fit="contain" />
                <Flex direction="column">
                  <Text>{elem.vegetableName}</Text>
                  <Text>$ {elem.middlePrice}</Text>
                </Flex>
              </Group>
              <Group>
                <ButtonPlusMinus
                  id={elem.id}
                  clickPlus={clickPlusInCart}
                  clickMinus={clickMinusInCart}
                  count={elem.count}
                />
              </Group>
            </Flex>
          );
        })}
      </Card.Section>
      <Group justify="space-between" w="100%">
        <Text>Total</Text>
        <Text>${fullPrice}</Text>
      </Group>
    </Card>
  );
}
export default Cart;
