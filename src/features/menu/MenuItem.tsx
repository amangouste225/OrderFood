import { formatCurrency } from "../../utils/helpers";

function MenuItem({ item }) {
  return (
    <li>
      <img src={item.images[1]} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <p>{item.category.name}</p>
        <div>{<p>{formatCurrency(item.price)}</p>}</div>
      </div>
    </li>
  );
}

export default MenuItem;
