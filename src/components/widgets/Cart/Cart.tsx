import { Card, Flex, Image, Text, Group, Divider } from "@mantine/core";
import emptyCart from "../../shared/pictures/Cart Empty.png";
import "./Cart.scss";
import ButtonPlusMinus from "../../shared/ButtonPlusMinus/ButtonPlusMinus";
import type { HeadButtonType } from "../Header/Header";
import React, { useContext, useEffect, useState } from "react";
import type { cartContentsType } from "../../App/App";
import cartContentsContext from "../../features/cartCountersContext";

function Cart({ clickMinusInCart, clickPlusInCart }: HeadButtonType) {
  const cartContents: cartContentsType[] = useContext(cartContentsContext);
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
        data-testid="cart"
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
      data-testid="cart"
      className="cart"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      w={445}
      mih={225}
      pt={45}
    >
      <Card.Section mb={6}>
        {cartContents.map((elem, i) => {
          return (
            <React.Fragment key={elem.id}>
              <Flex justify="space-between" pl={15} pr={25}>
                <Group>
                  <Image src={elem.image} h={75} w={75} fit="contain" />
                  <Flex direction="column" align="center">
                    <Text>{elem.vegetableName}</Text>
                    <Text>$ {elem.middlePrice}</Text>
                  </Flex>
                </Group>
                <Group align="center" pt={20}>
                  <ButtonPlusMinus
                    id={elem.id}
                    clickPlus={clickPlusInCart}
                    clickMinus={clickMinusInCart}
                    count={elem.count}
                  />
                </Group>
              </Flex>
              {i < cartContents.length - 1 && (
                <Divider w="75%" ml="auto" mr={25} />
              )}
            </React.Fragment>
          );
        })}
      </Card.Section>
      <Divider mt="auto" mr={5} ml={5} />
      <Group justify="space-between" w="100%" mt={5} pl={10} pr={10} pt={10}>
        <Text>Total</Text>
        <Text>${fullPrice}</Text>
      </Group>
    </Card>
  );
}
export default Cart;
