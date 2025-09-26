import { useEffect, useState } from "react";
import type { vegetableListType } from "../Data/Data";

type vegetablesCountType = [
  vegetablesCount: Record<number, number>,
  clickPlus: (id: number) => void,
  clickMinus: (id: number) => void,
  resetCounter: (id: number) => void
];

export default function useVegetablesCount(
  vegetables: vegetableListType[]
): vegetablesCountType {
  const [vegetablesCount, setVegetablesCount] = useState<
    Record<number, number>
  >({});

  useEffect(() => {
    const initCountVeg = vegetables.reduce<Record<number, number>>(
      (acc, veg) => {
        acc[veg.id] = 0;
        return acc;
      },
      {}
    );
    setVegetablesCount(initCountVeg);
  }, [vegetables]);

  const clickPlus = (id: number) => {
    setVegetablesCount((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };
  const clickMinus = (id: number) => {
    setVegetablesCount((prev) => {
      return { ...prev, [id]: Math.max(0, prev[id] - 1) };
    });
  };
  const resetCounter = (id: number) => {
    setVegetablesCount((prev) => {
      return { ...prev, [id]: 0 };
    });
  };
  return [vegetablesCount, clickPlus, clickMinus, resetCounter];
}
