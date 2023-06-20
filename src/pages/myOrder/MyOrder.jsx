/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../context";
import { OrderCar } from "../../components/OrderCar";
import { useParams } from "react-router-dom";

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);

  // get :id from route
  const currentParamsId = window.location.pathname.split("/").at(-1); // f1.
  let { id } = useParams(); // f2.
  const currentOrder = context.orders[id];

  id ? id : (id = context.orders.length - 1);

  return (
    <Layout>
      <div className="w-80 flex flex-col my-10 h-full border rounded-lg">
        {context.orders.length > 0 ? (
          context.orders[id].products?.map((product) => (
            <OrderCar
              key={product.id + Date.now}
              product={product}
              isAnOrder={true}
            />
          ))
        ) : (
          <h1>No hay ordenes para mostrar</h1>
        )}
      </div>
    </Layout>
  );
};
