import { createContext, useState } from 'react';

export type TogglerContextType = {
  navActive: boolean;
  cartActive: boolean;
  handleNavActive: () => void;
  handleCartActive: () => void;
};
type TogglerProps = {
  children: React.ReactNode;
};

const TogglerContext = createContext<TogglerContextType | null>(null);
function TogglerProvider({ children }: TogglerProps): JSX.Element {
  const [navActive, setNavActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  function handleNavActive() {
    setNavActive((prev) => !prev);
  }
  function handleCartActive() {
    setCartActive((prev) => !prev);
  }

  return (
    <TogglerContext.Provider
      value={
        {
          navActive,
          cartActive,
          handleNavActive,
          handleCartActive,
        } as TogglerContextType
      }
    >
      {children}
    </TogglerContext.Provider>
  );
}

export { TogglerContext, TogglerProvider };
