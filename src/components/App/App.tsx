import "@mantine/core/styles.css";
import "./App.scss";
import { useEffect, useState } from "react";
import Header from "../widgets/Header/Header";
import CreatorCard from "../entities/CreatorCard/CreatorCard";
import vegetableList, { type vegetableListType } from "../shared/Data/Data";

function App() {
  const [cartValue, setCartValue] = useState(0);
  const [vegetables, setVegetables] = useState<vegetableListType[]>([]);

  useEffect(() => {
    setVegetables(vegetableList);
    return () => {
      setVegetables([]);
    };
  }, []);

  return (
    <>
      <Header cartValue={cartValue} />
      <main>
        <h2 className="head-catalog">Catalog</h2>
        <CreatorCard vegetables={vegetables} />
      </main>
    </>
  );
}

export default App;
