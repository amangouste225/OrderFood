import { TItemsProps } from "../../types";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ item }: { item: TItemsProps }) {
  return (
    <li>
      <img src={item.category.image} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <p>{item.category.name}</p>
        <div>{<p>{formatCurrency(item.price)}</p>}</div>
      </div>
    </li>
  );
}

export default MenuItem;
