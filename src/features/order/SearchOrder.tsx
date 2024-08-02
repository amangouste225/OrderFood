import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  console.log(query);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search clothes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
