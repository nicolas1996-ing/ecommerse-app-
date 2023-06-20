/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../context";

export const InputForm = () => {

  const context = useContext(ShoppingCartContext);
  const [inputValue, setInputValue] = useState("");
  const onInputChanges = (ev) => {
    setInputValue(ev.target.value); // udp input value
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    context.filterItemsFunction(inputValue)
    setInputValue("")
  };

  return (
    <form onSubmit={onSubmit} className="mb-5 w-1/3">
      <label className="mb-2 text-sm font-medium text-white-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white-500 dark:text-white-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          value={inputValue}
          onChange={onInputChanges}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-white-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};
