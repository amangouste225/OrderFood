import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex">
      <Link to="/">Pizza Order Co.</Link>

      <p>Amangoua</p>
    </header>
  );
}
