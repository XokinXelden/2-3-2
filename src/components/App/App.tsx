import "@mantine/core/styles.css";
import { Container, Flex } from "@mantine/core";
import "./App.scss";
import Header from "../widgets/Header/Header";
import CreatorCard from "../widgets/CreatorCard/CreatorCard";
import useCartHook from "../shared/CastomHook/useCartHook";
import useLoadingHook from "../shared/CastomHook/useLoadinHook";

export type cartContentsType = {
  id: number;
  name: string;
  image: string;
  middlePrice: number;
  weight: string;
  count: number;
};

function App() {
  const [loading, vegetables, newError] = useLoadingHook();
  const {
    addItemToCart,
    cartContents,
    cartValue,
    clickPlusInCart,
    clickMinusInCart,
  } = useCartHook(vegetables);

  return (
    <>
      <Header
        cartContents={cartContents}
        cartValue={cartValue}
        clickPlusInCart={clickPlusInCart}
        clickMinusInCart={clickMinusInCart}
      />

      <Container size="100%" mt={90} pl={145} bg="#e9ecef">
        <h2 className="head-catalog">Catalog</h2>
        <Container size="100%" p={0}>
          <Flex gap={20} wrap="wrap" w="100%">
            <CreatorCard
              vegetables={vegetables}
              addItemToCart={addItemToCart}
              loading={loading}
              newError={newError}
            />
          </Flex>
        </Container>
      </Container>
    </>
  );
}

export default App;
