import { Alert, Center } from "@mantine/core";
import type { vegetableListType } from "../../shared/CastomHook/useLoadinHook";
import useVegetablesCount from "../../shared/CastomHook/useVegetablesCount";
import "./CreatorCart.scss";
import LoadingCard from "./LoadingCard";
import ReadyCard from "./ReadyCard";

type loadingType = {
  loading: boolean;
  newError: string;
};
type addItemToCartType = {
  addItemToCart: (id: number, count: number) => void;
};
export type ClickType = {
  clickPlus: (id: number) => void;
  clickMinus: (id: number) => void;
};
export type CardCreateProps = {
  vegetables: vegetableListType[];
};

function CreatorCard({
  loading,
  newError,
  vegetables,
  addItemToCart,
}: CardCreateProps & loadingType & addItemToCartType) {
  const [vegetablesCount, clickPlus, clickMinus, resetCounter] =
    useVegetablesCount(vegetables);
  const handleAddItemToCart = (id: number, count: number) => {
    addItemToCart(id, count);
    resetCounter(id);
  };

  if (loading) {
    return <LoadingCard />;
  }
  if (newError)
    return (
      <Center w="80vw">
        <Alert w={450} h={120} variant="filled" color="red" title="Ошибка :С">
          {newError}
        </Alert>
      </Center>
    );
  return (
    <ReadyCard
      vegetables={vegetables}
      clickPlus={clickPlus}
      clickMinus={clickMinus}
      vegetablesCount={vegetablesCount}
      handleAddItemToCart={handleAddItemToCart}
    />
  );
}
export default CreatorCard;
