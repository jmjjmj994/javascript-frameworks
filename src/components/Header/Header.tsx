import Navigation from '../Navigation/Navigation';
import { TogglerContext, TogglerProvider } from '../../hooks/use-toggler';
import { useContext } from 'react';
import CartIcon from './CartIcon';
import Cart from '../../routes/Cart';

function Header() {
  return (
    <TogglerProvider>
      <header className="flex flex-col items-between relative">
        <div className=" wrapper bg-orange-500 w-full h-[50%] flex  justify-between items-center">
          <div>
            <b>Logo</b>
          </div>
          <Navigation />
          <div className="flex gap-[10px]">
            <CartIcon />
            <Hamburger />
          </div>
        </div>

        <div className="bg-blue-500 h-[50%] "></div>
      </header>
    </TogglerProvider>
  );
}

function Hamburger() {
  const { handleNavActive } = useContext(TogglerContext)!;
  return (
    <button aria-label="open" onClick={() => handleNavActive()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
    </button>
  );
}

export default Header;
