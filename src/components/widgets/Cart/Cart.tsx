import { Card, Divider, Flex, Group, Image, Text } from "@mantine/core";
import type { HeadButtonType } from "../Header/Header";
import type { cartContentsType } from "../../App/App";
import React, { useEffect, useState } from "react";
import ButtonPlusMinus from "../../shared/ButtonPlusMinus/ButtonPlusMinus";
type PriceType = {
  cartContents: cartContentsType[];
};

function Cart({
  cartContents,
  clickMinusInCart,
  clickPlusInCart,
}: HeadButtonType & PriceType) {
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
