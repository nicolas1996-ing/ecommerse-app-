import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../context";
import { routesCategories } from "../common/routes.categories";
import { routesMain } from "../common/routes.main";

export const NavBar = () => {
  // uso del contexto global
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        {routesCategories.map((route) => (
          <li key={route.name} className={route.className && route.className}>
            <NavLink
              onClick={()=> context.filterByCategory(route.name)}
              to={route.path}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-3">
        <li key="email-contact" className="text-black/30">
          nicolas@gmail.com
        </li>
        {routesMain.map((route) => (
          <li key={route.name}>
            <NavLink to={route.path}>{route.name}</NavLink>
          </li>
        ))}
        <li className="flex items-center" onClick={()=> context.setSideMenuOpen(true)}>
          <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
          <span>{context.counterCar}</span>
        </li>
      </ul>
    </nav>
  );
};
