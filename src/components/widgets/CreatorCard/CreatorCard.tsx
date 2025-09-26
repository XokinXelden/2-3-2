import type { vegetableListType } from "../../shared/Data/Data";
import "./CreatorCart.scss";
import LoadingCard from "./LoadingCard";
import ReadyCard from "./ReadyCard";

type loadingType = {
  loading: boolean;
};
export type ClickType = {
  clickPlus: (id: number) => void;
  clickMinus: (id: number) => void;
};
export type CardCreateProps = {
  vegetables: vegetableListType[];
  vegetablesCount: Record<number, number>;
  handleAddItemToCart: (id: number, count: number) => void;
} & ClickType;

function CreatorCard({
  loading,
  vegetables,
  clickPlus,
  clickMinus,
  vegetablesCount,
  handleAddItemToCart,
}: CardCreateProps & loadingType) {
  if (loading) {
    return <LoadingCard />;
  }
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
