import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <footer>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </footer>
  );
}

export default CartOverview;
