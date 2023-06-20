/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// estado global de la app: centralización de info
export const ShoppingCartContext = createContext();

const BASE_URL = " https://api.escuelajs.co/api/v1";

export const ShoppingCartContextProvider = ({ children }) => {
  // order ...

  // estado 1.
  const [counterCar, setCounterCar] = useState(0);

  // estado 2.
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const showProductDetail = (show = true | false) => {
    setIsProductDetailOpen(show);
    setSideMenu(false);
  };

  // estado 3.
  const [activeProduct, setActiveProduct] = useState([]);

  // estado 4.
  const [carProducts, setCarProducts] = useState([]);
  const addProductToCar = (product) => {
    setCarProducts([...carProducts, product]);
  };

  const totalValueProducts = () => {
    return carProducts.reduce((acc, { price }) => acc + +price, 0);
  };

  // estado 5. checkout side menu
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const setSideMenuOpen = (state) => {
    setSideMenu(state);
    setIsProductDetailOpen(false);
  };

  // is a product add
  const isProductAddToCar = (productId) => {
    return carProducts.some((productCar) => productCar.id === productId);
  };

  // ======================orders======================
  const [orders, setOrders] = useState([]);
  const addOrder = (order) => {
    setOrders([...orders, order]);
    setCounterCar(0);
    setCarProducts([]);
    setSideMenu(false);
  };

  // ======================items======================
  const [items, setItems] = useState([]);

  const getProductByFetch = async () => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((products) => setItems(products))
      .catch((err) => console.log * err);
  };

  const getProductByAsynAwait = async () => {
    try {
      const resp = await fetch(`${BASE_URL}/products`);
      const products = await resp.json();
      setItems(products.slice(3));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getProductByFetch();
    getProductByAsynAwait();
  }, []);

  // ======================filter-items======================
  const filterItemsFunction = (inputValue) => {
    if (inputValue) {
      setItems(
        items.filter((item) =>
          item.title.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    } else {
      getProductByAsynAwait();
    }
  };

  const filterByCategory = async (category) => {
    if (category) {
      const itemsFilterList = items.filter((item) =>
        item.category.name.toLowerCase().includes(category.toLowerCase())
      );
      console.log(itemsFilterList.length)

      itemsFilterList.length > 0
        ? setItems(itemsFilterList)
        : await getProductByAsynAwait();
    } else {
      getProductByAsynAwait();
    }
  };

  return (
    // se provee en el punto de entrada de la app [app.jsx]
    <ShoppingCartContext.Provider
      value={{
        counterCar,
        setCounterCar,
        isProductDetailOpen,
        showProductDetail,
        activeProduct,
        setActiveProduct,
        carProducts,
        addProductToCar,
        isSideMenuOpen,
        setSideMenuOpen,
        isProductAddToCar,
        setCarProducts,
        totalValueProducts,
        orders,
        addOrder,
        items,
        setItems,
        filterItemsFunction,
        filterByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
