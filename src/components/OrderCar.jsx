/* eslint-disable react/prop-types */
import { TrashIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../context";

export const OrderCar = ({ product, isAnOrder = false }) => {
  const context = useContext(ShoppingCartContext);

  // delete a product
  const handleDelete = () => {
    const newProducts = context.carProducts.filter((p) => p.id !== product.id);
    context.setCarProducts(newProducts);
    context.setCounterCar(newProducts.length);
  };

  return (
    <div className="flex justify-between items-center m-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-15">
          <img
            src={product.images[1]}
            alt={product.images[1]}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>

        <div className="flex flex-col">
          <p className="text-xs font-light">{product.title}</p>
          <p className="text-sm font-medium pt-1">$ {product.price}</p>
        </div>
      </div>

      {!isAnOrder && (
        <div className="flex items-center gap-1">
          <TrashIcon
            className="h-4 w-4 cursor-pointer"
            onClick={handleDelete}
          />
        </div>
      )}
    </div>
  );
};
