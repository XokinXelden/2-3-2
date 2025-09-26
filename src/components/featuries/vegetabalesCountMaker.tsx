// import { useEffect, useState } from "react";

// export default function vegetablesCountMaker() {
//   const [vegetablesCount, setVegetablesCount] = useState<
//     Record<number, number>
//   >({});
//   //  useEffect(() => {
//   //   const initCountVeg = vegetables.reduce((acc, veg) => {
//   //     acc[veg.id] = 0;
//   //     return acc;
//   //   }, {});
//   //   setVegetablesCount({ ...initCountVeg });
//   // }, [vegetables]);
//   function clickPlus(id: number) {
//     setVegetablesCount((prev) => {
//       return { ...prev, [id]: prev[id] + 1 };
//     });
//   }
//   function clickMinus(id: number) {
//     setVegetablesCount((prev) => {
//       return { ...prev, [id]: Math.max(0, prev[id] - 1) };
//     });
//     return {vegetablesCount,setVegetablesCount, clickPlus, clickMinus}
//   }
// }
