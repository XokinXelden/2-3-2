import { useState, useEffect } from "react";
import type { vegetableListType } from "../Data/Data";
import vegetableList from "../Data/Data";

type LoadingHookType = [loading: boolean, vegetables: vegetableListType[]];

export default function useLoadingHook(): LoadingHookType {
  const [loading, setLoading] = useState<boolean>(true);
  const [vegetables, setVegetables] = useState<vegetableListType[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVegetables(vegetableList);
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      setVegetables([]);
    };
  }, []);
  return [loading, vegetables];
}
