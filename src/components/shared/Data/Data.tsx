const image = import.meta.glob("../pictures/Vegetable/*.png", {
  eager: true,
}) as ImageType;
type ImageType = {
  [key: string]: {
    default: string;
  };
};

export type vegetableListType = {
  id: number;
  vegetableName: string;
  image: string;
  price: number;
  minWeight: string;
  availability: boolean;
};

const vegetableList = [
  {
    id: 1,
    vegetableName: "Carrot",
    image: image["../pictures/Vegetable/Carrot.png"].default,
    price: 100,
    minWeight: "1kg",
    availability: true,
  },
  {
    id: 2,
    vegetableName: "Potato",
    image: image["../pictures/Vegetable/Potato.png"].default,
    price: 100,
    minWeight: "1kg",
    availability: true,
  },
];

export default vegetableList;
