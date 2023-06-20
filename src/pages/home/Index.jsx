/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu";
import { InputForm } from "../../components/InputForm";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context";
import { useParams } from "react-router-dom";

export const Index = () => {
  const context = useContext(ShoppingCartContext);
  
  return (
    <Layout>
      <InputForm />

      {context.items.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-center w-4/6">
          {context.items.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="font-light">
          No hay productos para mostrar por esa busqueda, presiona{" "}
          <span className="font-bold capitalize">search</span> para mostrar todo
        </div>
      )}

      {context.isProductDetailOpen && <ProductDetail />}
      {context.isSideMenuOpen && <CheckoutSideMenu />}
    </Layout>
  );
};
