import { Card, Container, Flex, Image, Text } from "@mantine/core";
import type { vegetableListType } from "../../shared/Data/Data";

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
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              w={300}
              h={412}
            >
              <Card.Section>
                <Image src={elem.image} fit="contain" />
              </Card.Section>
              <Text>{elem.vegetableName}</Text>
            </Card>
          );
        })}
      </Flex>
    </Container>
  );
}
export default CreatorCard;
