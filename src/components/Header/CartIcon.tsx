import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/use-cart';
function CartIcon() {
  const { items } = useCart();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    function calculateAmount() {
      let initial = 0;
      for (const amount in items) {
        initial += items[amount].amount;
      }
      setAmount(initial);
    }
    calculateAmount();
  }, [items]);

  return (
    <div className=" relative">
      <Link to={'/cart'}>
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
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </Link>
      <span className="absolute flex items-center justify-center top-[-7px] bg-red-50 h-[1rem] w-[1rem]  rounded-full right-[-4px]">
        {amount}
      </span>
    </div>
  );
}
export default CartIcon;
