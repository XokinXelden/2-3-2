import "@mantine/core/styles.css";
import { Container, Flex } from "@mantine/core";
import "./App.scss";
import { useEffect, useState } from "react";
import Header from "../widgets/Header/Header";
import CreatorCard from "../entities/CreatorCard/CreatorCard";
import vegetableList, { type vegetableListType } from "../shared/Data/Data";

export type cartContentsType = {
  id: number;
  vegetablesName: string;
  image: string;
  middlePrice: number;
  count: number;
};

function App() {
  const [cartContents, setCartContents] = useState<cartContentsType | null[]>(
    []
  );
  const [cartValue, setCartValue] = useState(0);
  const [vegetables, setVegetables] = useState<vegetableListType[]>([]);
  const [vegetablesCount, setVegetablesCount] = useState<
    Record<number, number>
  >({});

  useEffect(() => {
    const initCountVeg = vegetables.reduce((acc, veg) => {
      acc[veg.id] = 0;
      return acc;
    }, {});
    setVegetablesCount({ ...initCountVeg });
  }, [vegetables]);

  useEffect(() => {
    setVegetables(vegetableList);
    return () => {
      setVegetables([]);
    };
  }, []);
  // useEffect(() => {
  //   if (cartContents === null) return;
  //   const filtered = cartContents.filter(
  //     (item: cartContentsType) => item.count > 0
  //   );
  //   if (filtered.length === cartContents.length) setCartContents(filtered);
  // }, [cartContents]);
  function clickPlus(id: number) {
    setVegetablesCount((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  }
  function clickMinus(id: number) {
    setVegetablesCount((prev) => {
      return { ...prev, [id]: Math.max(0, prev[id] - 1) };
    });
  }
  function addItemToCart(id: number, count: number) {
    const veg = vegetables.find((elem: vegetableListType) => {
      return elem.id === id;
    });
    if (veg === undefined) return;
    if (count === 0) return;

    const copy = cartContents.some((elem) => {
      return elem.id === id;
    });
    if (copy) {
      setCartContents((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            const newCount = item.count + count;
            return {
              ...item,
              middlePrice: veg.price * newCount,
              count: newCount,
            };
          }
          return item;
        })
      );
    } else {
      setCartContents((prev) => {
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
      });
    }
    setVegetablesCount((prev) => {
      return { ...prev, [id]: 0 };
    });
  }

  function clickPlusInCart(id: number) {
    const veg = vegetables.find((item) => {
      return item.id === id;
    });
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
  }

  function clickMinusInCart(id: number) {
    const veg = vegetables.find((item) => {
      return item.id === id;
    });
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
  }

  return (
    <>
      <Header
        cartValue={cartValue}
        cartContents={cartContents}
        clickPlusInCart={clickPlusInCart}
        clickMinusInCart={clickMinusInCart}
      />
      <Container size="100%" mt={90} pl={145} bg="#e9ecef">
        <h2 className="head-catalog">Catalog</h2>
        <Container size="100%" p={0}>
          <Flex gap={20} wrap="wrap" w="100%">
            <CreatorCard
              vegetables={vegetables}
              clickPlus={clickPlus}
              clickMinus={clickMinus}
              vegetablesCount={vegetablesCount}
              addItemToCart={addItemToCart}
            />
          </Flex>
        </Container>
      </Container>
    </>
  );
}

export default App;
