/* eslint-disable react/prop-types */
export const Layout = ({ children }) => {
  // componente para manejar un mismo estilo para todos los demas componentes
  // componente padre
  return <div className="flex flex-col mt-20 items-center">{children}</div>;
};
