import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import ".././index.css";
import { ShoppingCartContext } from "../context";

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const productToShow = context.activeProduct
  // console.log(productToShow)

  return (
    // eslint-disable-next-line react/no-unknown-property
    <aside className="sideNav-detail flex flex-col fixed right-0 border-black rounded-lg p-2 w-1/5" transition-style="in:wipe:left">
      <div className="flex justify-between items-center px-1 pb-5 ">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => context.showProductDetail(false)}
        />
      </div>
      <figure>
        <img
          src={productToShow.images[0]}
          alt={productToShow.title}
          className="w-full h-full rounded-lg"
        />
      </figure>
      <p className="flex flex-col">
        <span className="font-medium text-1xl mb-4">$ {productToShow.price}</span>
        <span className="font-medium text-sm mb-2">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
};
