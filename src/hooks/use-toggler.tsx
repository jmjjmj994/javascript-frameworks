/* import { createContext, useState } from 'react';

export type TogglerContextType = {
  isActive: boolean;
  handleActive: () => void;
};
type TogglerProps = {
  children: React.ReactNode;
};

const TogglerContext = createContext<TogglerContextType | null>(null);

function TogglerProvider({ children }: TogglerProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  console.log(isActive)
  function handleActive(event: React.MouseEvent<HTMLButtonElement>) {

    setIsActive((prev) => !prev);
  }

  return (
    <TogglerContext.Provider value={{ isActive, handleActive }}>
      {children}
    </TogglerContext.Provider>
  );
}

export { TogglerContext, TogglerProvider };
 */