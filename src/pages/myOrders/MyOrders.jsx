import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../context";
import { OrdersCar } from "../../components/ordersCar";
import { Link } from "react-router-dom";

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context);

  return (
    <Layout>
      <h1 className="mb-6 text-bold text-xl">My orders</h1>

      {context.orders.map((order, idx) => (
        <Link key={order.date} to={`/my-order/${idx}`}>
          <OrdersCar order={order} />
        </Link>
      ))}
    </Layout>
  );
};
