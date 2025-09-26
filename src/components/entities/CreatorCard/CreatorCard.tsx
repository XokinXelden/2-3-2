import { Button, Card, Center, Flex, Image, Text, Group } from "@mantine/core";
import type { vegetableListType } from "../../shared/Data/Data";
import greenCart from "../../shared/pictures/Button/Green Cart.png";

import "./CreatorCart.scss";
import ButtonPlusMinus from "../../shared/ButtonPlusMinus/ButtonPlusMinus";

export type ClickType = {
  clickPlus: (id: number) => void;
  clickMinus: (id: number) => void;
  setCartContents: () => void;
};
type CardCreateProps = {
  vegetables: vegetableListType[];
  vegetablesCount: Record<number, number>;
  addItemToCart: (id: number, count: number) => void;
} & ClickType;

function CreatorCard({
  vegetables,
  clickPlus,
  clickMinus,
  vegetablesCount,
  addItemToCart,
}: CardCreateProps) {
  if (vegetables.length === 0) {
    return <h2>Все товары были бесцеремонно украдены :С</h2>;
  }
  return (
    <>
      {vegetables.map((elem) => {
        return (
          <Card
            key={elem.id}
            shadow="md"
            padding="lg"
            radius="lg"
            withBorder
            w={312}
            h={412}
          >
            <Card.Section>
              <Image src={elem.image} fit="contain" />
            </Card.Section>

            <Center p="xs">
              <Group w="100%" justify="space-between">
                <Flex gap={4} align="center">
                  <Text size="16px">{elem.vegetableName}</Text>
                  <Text color="gray" size="xs">
                    {elem.minWeight}
                  </Text>
                </Flex>
                <ButtonPlusMinus
                  id={elem.id}
                  clickPlus={clickPlus}
                  clickMinus={clickMinus}
                  count={vegetablesCount[elem.id]}
                />
              </Group>
            </Center>
            <Center>
              <Group justify="space-between" w="94%">
                <Text size="xl" fw="bold">
                  $ {elem.price}
                </Text>
                <Button
                  variant="light"
                  color="green"
                  rightSection={<img src={greenCart} />}
                  style={{ width: "172px" }}
                  onClick={() =>
                    addItemToCart(elem.id, vegetablesCount[elem.id])
                  }
                >
                  add to cart
                </Button>
              </Group>
            </Center>
          </Card>
        );
      })}
    </>
  );
}
export default CreatorCard;
