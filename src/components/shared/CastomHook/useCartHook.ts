import type { cartContentsType } from "../../App/App";
import type { vegetableListType } from "../Data/Data";
import { useState, useEffect } from "react";

type CartHookReturn = [
  cartContentsType[],
  number,
  (id: number, count: number) => void,
  (id: number) => void,
  (id: number) => void
];

export default function useCartHook(
  vegetables: vegetableListType[]
): CartHookReturn {
  const [cartContents, setCartContents] = useState<cartContentsType[]>([]);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    setCartValue(
      cartContents.reduce((value, item) => {
        return value + item.count;
      }, 0)
    );
  }, [cartContents]);
  const addItemToCart = (id: number, count: number) => {
    if (count === 0) return;
    const veg = vegetables.find((v) => v.id === id);
    if (!veg) return;

    setCartContents((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === id
            ? {
                ...item,
                count: item.count + count,
                middlePrice: veg.price * (item.count + count),
              }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: veg.id,
            vegetableName: veg.vegetableName,
            image: veg.image,
            middlePrice: veg.price * count,
            count: count,
          },
        ];
      }
    });
  };
  const clickPlusInCart = (id: number) => {
    const veg = vegetables.find((item) => {
      return item.id === id;
    });
    if (!veg) return;
    setCartContents((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
            middlePrice: veg.price * (item.count + 1),
          };
        }
        return item;
      })
    );
  };

  const clickMinusInCart = (id: number) => {
    const veg = vegetables.find((item) => {
      return item.id === id;
    });
    if (!veg) return;
    setCartContents((prev) =>
      prev
        .map((item: cartContentsType) => {
          if (item.id === id) {
            return {
              ...item,
              count: Math.max(0, item.count - 1),
              middlePrice: veg.price * Math.max(0, item.count - 1),
            };
          }
          return item;
        })
        .filter((item: cartContentsType) => item.count > 0)
    );
  };
  return [
    cartContents,
    cartValue,
    addItemToCart,
    clickPlusInCart,
    clickMinusInCart,
  ];
}
