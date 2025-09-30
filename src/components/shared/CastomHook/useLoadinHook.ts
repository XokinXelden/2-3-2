import { useState, useEffect } from "react";

type LoadingHookType = [
  loading: boolean,
  vegetables: vegetableListType[],
  newError: string
];

type WeightForVegetables = {
  weight: string;
};
export type vegetableListType = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
} & WeightForVegetables;

export default function useLoadingHook(): LoadingHookType {
  const [loading, setLoading] = useState<boolean>(true);
  const [vegetables, setVegetables] = useState<vegetableListType[]>([]);
  const [newError, setNewError] = useState<string>("");

  useEffect(() => {
    // try {
    fetch(
      "https://res.cloudinary.com/siSvadass/raw/upload/v1535817394/json/products.json"
    )
      .then((response) => {
        if (response.ok)
          throw new Error(
            "Кажется все овощи сбежали от нас, а мы не смогли их поймать, попробуйте позже."
          );
        return response.json();
      })
      .then((json) => {
        return json.map((veg: vegetableListType) => {
          const nameWeight = veg.name.split(" - ");
          const [name, weight = "1 Kg"] = nameWeight;
          return {
            ...veg,
            name: name,
            weight: weight,
          };
        });
      })
      .then((json) => {
        setTimeout(() => {}, 2000);
        setVegetables(json);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setNewError(
            "Кажется все овощи сбежали от нас, а мы не смогли их поймать, попробуйте позже."
          );
        } else {
          setNewError("Неизвестная ошибка");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return [loading, vegetables, newError];
}
