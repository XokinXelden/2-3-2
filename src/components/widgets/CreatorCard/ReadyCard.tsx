import { Button, Card, Center, Flex, Group, Image, Text } from "@mantine/core";
import ButtonPlusMinus from "../../shared/ButtonPlusMinus/ButtonPlusMinus";
import greenCart from "../../shared/pictures/Button/Green Cart.png";
import type { CardCreateProps } from "./CreatorCard";

function ReadyCard({
  vegetables,
  vegetablesCount,
  clickPlus,
  clickMinus,
  handleAddItemToCart,
}: CardCreateProps) {
  return (
    <>
      {vegetables.map((elem) => {
        return (
          <Card
            data-testid={elem.vegetableName}
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
