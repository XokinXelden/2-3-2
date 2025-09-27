import "@mantine/core/styles.css";
import { Container, Flex } from "@mantine/core";
import "./App.scss";
import Header from "../widgets/Header/Header";
import CreatorCard from "../widgets/CreatorCard/CreatorCard";
import cartContentsContext from "../features/cartCountersContext";
import useCartHook from "../shared/CastomHook/useCartHook";
import useLoadingHook from "../shared/CastomHook/useLoadinHook";
import useVegetablesCount from "../shared/CastomHook/useVegetablesCount";

export type cartContentsType = {
  id: number;
  vegetableName: string;
  image: string;
  middlePrice: number;
  count: number;
};

function App() {
  const [loading, vegetables] = useLoadingHook();
  const [vegetablesCount, clickPlus, clickMinus, resetCounter] =
    useVegetablesCount(vegetables);
  const [
    cartContents,
    cartValue,
    addItemToCart,
    clickPlusInCart,
    clickMinusInCart,
  ] = useCartHook(vegetables);

  const handleAddItemToCart = (id: number, count: number) => {
    addItemToCart(id, count);
    resetCounter(id);
  };

  return (
    <>
      <cartContentsContext.Provider
        value={[cartContents, clickMinusInCart, clickPlusInCart]}
      >
        <Header cartValue={cartValue} />
      </cartContentsContext.Provider>
      <Container size="100%" mt={90} pl={145} bg="#e9ecef">
        <h2 className="head-catalog">Catalog</h2>
        <Container size="100%" p={0}>
          <Flex gap={20} wrap="wrap" w="100%">
            <CreatorCard
              vegetables={vegetables}
              clickPlus={clickPlus}
              clickMinus={clickMinus}
              vegetablesCount={vegetablesCount}
              handleAddItemToCart={handleAddItemToCart}
              loading={loading}
            />
          </Flex>
        </Container>
      </Container>
    </>
  );
}

export default App;
