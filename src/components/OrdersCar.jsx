/* eslint-disable react/prop-types */
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export const OrdersCar = ({ order }) => {
  console.log(order)
  return (
    <div className="flex flex-col justify-between  mb-3 border border-black rounded-xl bg-gradient-to-br from-blue-200 to-purple-200 hover:bg-gradient-to-br hover:from-blue-400 hover:to-purple-400">
      <div className="flex flex-col p-3 w-full">
        <p className="flex gap-1 font-semibold text-xs">
          <CalendarDaysIcon className="h-4 w-4 border-black cursor-pointer" />
          <span className="font-light text-xs">{order.date}</span>{" "}
        </p>
        <p className="flex gap-1 font-semibold text-xs">
          <ShoppingCartIcon className="h-4 w-4 border-black cursor-pointer" />
          <span className="font-light text-xs">
            {order.totalCountProducts} Products
          </span>{" "}
        </p>
        <p className="font-bold text-xs mt-1 text-center">
          <span className="text-2xl">${order.totalPrice}</span>{" "}
        </p>
      </div>
      <div className="flex justify-end font-medium text-xs mb-1 mr-1">
        <span className="mr-1 text-blue-400">Abrir orden</span>
        <ArrowRightIcon className="h-4 w-4 border-black cursor-pointer" />
      </div>
    </div>
  );
};
