import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

// import { loader as MenuLoader } from "./features/menu/menuLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: async () => {
          return fetch("https://api.escuelajs.co/api/v1/products");
        },
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
