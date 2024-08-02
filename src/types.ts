export type TItemsProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  updatedAt: string;
  category: {
    id: number;
    name: string;
    updatedAt: string;
    creationAt: string;
    image: string;
  };
};

export type TItems = {
  item: TItemsProps[];
};
