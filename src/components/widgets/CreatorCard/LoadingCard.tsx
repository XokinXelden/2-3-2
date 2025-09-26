import { Card, Center, Group, Loader, Skeleton, Box } from "@mantine/core";

function LoadingCard() {
  return [...Array(10)].map((_, i) => {
    return (
      <Card
        key={"skeleton_" + i}
        shadow="md"
        padding="lg"
        radius="lg"
        withBorder
        w={325}
        h={422}
      >
        {" "}
        <Box pos="relative" h={375}>
          <Skeleton height={275} radius="md" animate />
          <Center pos="absolute" top={0} left={0} right={0} bottom={0}>
            <Loader size="sm" type="bars" color="gray" opacity={0.5} />
          </Center>
        </Box>
        <Group justify="space-between" mt={10}>
          <Skeleton height={30} mt="md" width="25%" radius="sm" />
          <Skeleton height={30} mt="md" width="10%" radius="sm" />
          <Skeleton height={36} width="120px" radius="sm" />
        </Group>
        <Group justify="space-between" mt={10}>
          <Skeleton height={24} width="30%" radius="sm" />
          <Skeleton height={36} width="170px" radius="sm" />
        </Group>
      </Card>
    );
  });
}

export default LoadingCard;
