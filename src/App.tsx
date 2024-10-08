import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, { Action } from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
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
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: async ({ params }) => {
          return fetch(
            `https://react-fast-pizza-api.onrender.com/api/order/${params.orderID}`
          );
        },
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: Action,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
