/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import { PlusIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";

import { useContext } from "react";
import { ShoppingCartContext } from "../context";

export const Card = ({ product }) => {
  // uso del contexto global
  const context = useContext(ShoppingCartContext);
  const addCounterCar = () => context.setCounterCar(context.counterCar + 1);

  const setProductDetailTags = () => {
    context.showProductDetail(true);
    context.setActiveProduct(product);
  };

  const setCarState = () => {
    addCounterCar();
    context.addProductToCar(product);
  };

  const addProductAndSetState = () => {
    setCarState();
    context.setSideMenuOpen(true);
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      {/* diseño card: relativo (padre) vs absoluto (hijos) . card ocupa 4/5 partes*/}
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
          {product.category.name}
        </span>
        <img
          src={product.images[1]}
          alt={product.images[1]}
          className="w-full h-full object-cover rounded-lg"
          onClick={setProductDetailTags}
        />
        <button
          type="button"
          onClick={addProductAndSetState}
          className={
            context.isProductAddToCar(product.id)
              ? "absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 px-2 py-1"
              : "absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 px-2 py-1"
          }
          disabled={context.isProductAddToCar(product.id)}
        >
          {context.isProductAddToCar(product.id) ? (
            <CheckIcon className="h-7 w-7 border-black cursor-pointer" />
          ) : (
            <PlusIcon className="h-8 w-8 border-whitek cursor-pointe" />
          )}
        </button>
      </figure>

      <p className="flex justify-between items-center">
        <span className="text-sm font-normal">{product.title}</span>
        <span className="text-lg font-bold">{product.price}</span>
      </p>
    </div>
  );
};
