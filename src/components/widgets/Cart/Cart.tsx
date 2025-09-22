import { Card, Flex, Image, Text } from "@mantine/core";
import emptyCart from "../../shared/pictures/Cart Empty.png";
import "./Cart.scss";

function Cart() {
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
export default Cart;
