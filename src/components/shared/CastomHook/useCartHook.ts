import type { cartContentsType } from "../../App/App";

import { useState, useEffect } from "react";
import type { vegetableListType } from "./useLoadinHook";

export type CartHookReturn = {
  cartContents: cartContentsType[];
  clickPlusInCart: (id: number) => void;
  clickMinusInCart: (id: number) => void;
};
type addCartType = {
  addItemToCart: (id: number, count: number) => void;
  cartValue: number;
};

export default function useCartHook(
  vegetables: vegetableListType[]
): CartHookReturn & addCartType {
  const [cartContents, setCartContents] = useState<cartContentsType[]>([]);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    setCartValue(
      cartContents.reduce((value, item) => {
        return value + item.count;
      }, 0)
    );
  }, [cartContents]);
  const converterWeightToNum = (veg: vegetableListType) => {
    const weightSplit = veg.weight.split(" ");
    const [weight] = weightSplit;
    const weightNum: number = weight === "1" ? 1 : 0.25;
    return weightNum;
  };
  const newPrice = (
    sign: "-" | "+",
    veg: vegetableListType,
    item: cartContentsType
  ) => {
    return sign === "-"
      ? veg.price * Math.max(0, item.count - 1)
      : veg.price * Math.max(0, item.count + 1);
  };
  const addItemToCart = (id: number, count: number) => {
    if (count === 0) return;
    const veg = vegetables.find((item) => item.id === id);
    if (!veg) return;
    setCartContents((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === id
            ? {
                ...item,
                count: item.count + count,
                middlePrice: newPrice("+", veg, item),
              }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: veg.id,
            name: veg.name,
            image: veg.image,
            weight: `${converterWeightToNum(veg) * count} Kg`,
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
            weight: `${converterWeightToNum(veg) * (item.count + 1)} Kg`,
            count: item.count + 1,
            middlePrice: newPrice("+", veg, item),
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
              weight: `${converterWeightToNum(veg) * (item.count - 1)} Kg`,
              count: Math.max(0, item.count - 1),
              middlePrice: newPrice("-", veg, item),
            };
          }
          return item;
        })
        .filter((item: cartContentsType) => item.count > 0)
    );
  };
  return {
    cartContents,
    cartValue,
    addItemToCart,
    clickPlusInCart,
    clickMinusInCart,
  };
}
