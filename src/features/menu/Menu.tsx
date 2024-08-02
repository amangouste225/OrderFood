import { useLoaderData } from "react-router-dom";

import MenuItem from "./MenuItem";
import { TItemsProps } from "../../types";

function Menu() {
  const menu = useLoaderData();

  console.log(menu);
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-6 gap-2 md:grid-cols-4">
      {menu.map((item: TItemsProps) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Menu;
