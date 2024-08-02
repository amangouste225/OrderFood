import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => (
  <header className="flex">
    <Link to="/">Pizza Order Co.</Link>

    <SearchOrder />
  </header>
);
export default Header;
