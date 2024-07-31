export type TItemsProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  updatedAt: string;
  category: string[];
};

export type TItems = {
  item: TItemsProps[];
};
