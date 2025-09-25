import {
  Button,
  Card,
  Center,
  Container,
  Flex,
  Image,
  ActionIcon,
  Text,
  Group,
} from "@mantine/core";
import type { vegetableListType } from "../../shared/Data/Data";
import greenCart from "../../shared/pictures/Button/Green Cart.png";
import plus from "../../shared/pictures/Button/Plus.png";
import minus from "../../shared/pictures/Button/Minus.png";
import "./CreatorCart.scss";

function CreatorCard({ vegetables }: { vegetables: vegetableListType[] }) {
  if (vegetables.length === 0) {
    return <h2>Не удалось найти товары :С</h2>;
  }
  return (
    <Container>
      <Flex gap={25}>
        {vegetables.map((elem) => {
          return (
            <Card
              key={elem.id}
              shadow="md"
              padding="lg"
              radius="lg"
              withBorder
              w={300}
              h={412}
            >
              <Card.Section>
                <Image src={elem.image} fit="contain" />
              </Card.Section>

              <Center p="xs">
                <Group w="100%" justify="space-between">
                  <Flex gap={10} align="center">
                    <Text size="md">{elem.vegetableName}</Text>
                    <Text color="gray" size="xs">
                      {elem.minWeight}
                    </Text>
                  </Flex>
                  <div>
                    <Flex align="center" gap={12} style={{ fontSize: "15px" }}>
                      <ActionIcon
                        className="count-button"
                        variant="light"
                        color="black"
                        size="xs"
                        radius="md"
                      >
                        <img src={minus} />
                      </ActionIcon>
                      {0}
                      <ActionIcon
                        className="count-button"
                        variant="light"
                        color="black"
                        size="xs"
                        radius="md"
                      >
                        <img src={plus} />
                      </ActionIcon>
                    </Flex>
                  </div>
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
                  >
                    add to cart
                  </Button>
                </Group>
              </Center>
            </Card>
          );
        })}
      </Flex>
    </Container>
  );
}
export default CreatorCard;
