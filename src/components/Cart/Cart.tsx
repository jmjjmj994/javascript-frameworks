import { motion } from 'framer-motion';
import useCart from '../../hooks/use-cart';
import { TogglerContext } from '../../hooks/use-toggler';
import { useContext } from 'react';

function Cart() {
  const { items, incrementItem, decrementItem, removeItem } = useCart();
  const { cartActive } = useContext(TogglerContext)!;

  return (
    <motion.nav
      initial={false}
      animate={{ x: cartActive ? 0 : '100%' }}
      transition={{
        damping: 1,
        ease: 'easeIn',
        duration: 0.15,
      }}
      className={`fixed top-0 right-0 w-[50%] h-full bg-pink-400 z-[1]`}
    >
      <div className="flex flex-col h-full">
        <Button />

        <ul className="h-full "></ul>
        <div></div>
      </div>
    </motion.nav>
  );
}

function Button() {
  const { handleCartActive } = useContext(TogglerContext)!;
  return (
    <button className="self-end" onClick={handleCartActive}>
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
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

export default Cart;
