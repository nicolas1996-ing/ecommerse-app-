import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ".././index.css";
import { ShoppingCartContext } from "../context";
import { OrderCar } from "./OrderCar";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const addOrder = () => {
    console.log("add order on")
    context.addOrder({
      date: new Date(Date.now()).toISOString(),
      products: context.carProducts,
      totalCountProducts: context.carProducts.length, 
      totalPrice: context.totalValueProducts(),
    });

    console.log(context.orders);
  };

  return (
    <aside
      className="sideNav-detail flex flex-col fixed right-0 border-black rounded-lg p-2 w-1/5 overflow-scroll"
      // eslint-disable-next-line react/no-unknown-property
      transition-style="in:wipe:left"
    >
      {/* btn add new order */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center px-1 pb-1 ">
          <h2 className="font-medium text-xl">My order</h2>
          <XMarkIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => context.setSideMenuOpen(false)}
          />
        </div>

        <div className="flex justify-between">
          <span className="font-light text-xs">Total order</span>{" "}
          <span className="font-medium text-xs underline">
            $ {context.totalValueProducts()}
          </span>
        </div>
      </div>

      {context.carProducts.length >= 8 && (
        <Link to="my-order">
          <button
            type="button"
            className="text-white bg-black font-medium rounded-lg text-sm p-2 m-3 h-8 flex justify-center items-center"
            onClick={addOrder}
          >
            Add order
          </button>
        </Link>
      )}

      <div>
        {context.carProducts &&
          context.carProducts.map((product) => (
            <OrderCar key={product.id + Date.now} product={product} />
          ))}
      </div>

      {/* enviar el siguiente elemento al final */}
      <div className="flex-1"></div>

      {/* btn add new order */}
      {context.carProducts.length < 8 && (
        <Link to="my-order" className="text-white bg-black font-medium rounded-lg text-sm p-2 m-3 h-8 flex justify-center items-center">
          <button
            type="button"
            onClick={addOrder}
          >
            Add order
          </button>
        </Link>
      )}
    </aside>
  );
};
