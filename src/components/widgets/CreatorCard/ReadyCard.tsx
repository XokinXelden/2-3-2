import { Button, Card, Center, Flex, Group, Image, Text } from "@mantine/core";
import ButtonPlusMinus from "../../shared/ButtonPlusMinus/ButtonPlusMinus";
import greenCart from "../../shared/pictures/Button/Green Cart.png";
import type { CardCreateProps, ClickType } from "./CreatorCard";

type handleAddItemToCartType = {
  handleAddItemToCart: (id: number, count: number) => void;
  vegetablesCount: Record<number, number>;
} & ClickType;

function ReadyCard({
  vegetables,
  vegetablesCount,
  clickPlus,
  clickMinus,
  handleAddItemToCart,
}: CardCreateProps & handleAddItemToCartType) {
  return (
    <>
      {vegetables.map((elem) => {
        return (
          <Card
            data-testid={elem.name}
            key={elem.id}
            shadow="md"
            padding="lg"
            radius="lg"
            withBorder
            w={325}
            h={422}
          >
            <Card.Section>
              <Image src={elem.image} fit="contain" />
            </Card.Section>

            <Center p="xs">
              <Group w="100%" justify="space-between">
                <Flex gap={4} align="center">
                  <Text size="16px">{elem.name}</Text>
                  <Text color="gray" size="xs">
                    {elem.weight}
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
                    handleAddItemToCart(elem.id, vegetablesCount[elem.id])
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
export default ReadyCard;
