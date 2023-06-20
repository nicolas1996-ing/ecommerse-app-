import { useRoutes, BrowserRouter } from "react-router-dom";
import { Index } from "../home/Index";
import { NoFound } from "../404/NoFound";
import { MyAccount } from "../MyAccount/MyAccount";
import { MyOrder } from "../MyOrder/MyOrder";
import { MyOrders } from "../MyOrders/MyOrders";
import { SignIn } from "../SignIn/SignIn";
import "./App.css";
import { NavBar } from "../../components/NavBar";
import { ShoppingCartContextProvider } from "../../context";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/:id",
      element: <Index />,
    },
    {
      path: "/:id",
      element: <Index />,
    },
    {
      path: "/:id",
      element: <Index />,
    },
    {
      path: "/:id",
      element: <Index />,
    },
    {
      path: "/:id",
      element: <Index />,
    },
    {
      path: "/:id",
      element: <Index/>
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-order/:id",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },

    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
   
    {
      path: "*",
      element: <NoFound />,
    },
  ]);
};

function App() {
  return (
    /* proporcionar un estado global para toda la app */
    <ShoppingCartContextProvider>
      {/* rutas */}
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </ShoppingCartContextProvider>
  );
}

export default App;
