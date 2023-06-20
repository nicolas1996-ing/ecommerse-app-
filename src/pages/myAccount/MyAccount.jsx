import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../context";

export const MyAccount = () => {
  const context = useContext(ShoppingCartContext);

  console.log(context);

  return <Layout>my account</Layout>;
};
