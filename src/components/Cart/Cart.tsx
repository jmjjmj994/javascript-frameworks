import { motion } from 'framer-motion';
import useCart from '../../hooks/use-cart';
import { TogglerContext } from '../../hooks/use-toggler';
import { useContext } from 'react';
import styles from './cart.module.css';

function Cart() {
  const { items, incrementItem, decrementItem, removeItem } = useCart();
  const { cartActive } = useContext(TogglerContext)!;

  function incrementItems(id: string) {
    incrementItem(id);
  }

  function decrementItems(id: string) {
    decrementItem(id);
  }

  return (
    <motion.nav
      initial={false}
      animate={{ x: cartActive ? 0 : '100%' }}
      transition={{
        damping: 1,
        ease: 'easeIn',
        duration: 0.15,
      }}
      className={`fixed top-0 right-0 w-[50%] h-full bg-secondary z-[1]`}
    >
      <div className="flex flex-col h-full">
        <div className=" flex justify-between">
          <p>Cart</p>
          <CloseButton />
        </div>

        <ul className="h-full ">
          {items?.length > 0 &&
            items.map(
              ({ id, image, amount, title, discountedPrice, price }) => (
                <li
                  className="flex justify-between items-center h-auto bg-gray-500 px-5"
                  key={id}
                >
                  <div className="flex max-w-[15rem] w-full">
                    <div className="max-h-[7vh] w-[7rem] py-2 px-2 bg-gray-500">
                      <img
                        className="rounded-md h-full w-full object-cover aspect-auto"
                        src={image.url}
                        alt=""
                      />
                    </div>

                    <div className="flex items-center w-full">
                      <p>{title}</p>
                    </div>
                  </div>

                  <div className="bg-pink-500 flex justify-between w-[5rem] px-1 rounded-md ">
                    <DecrementButton decrementItems={decrementItems} id={id} />
                    {amount}
                    <IncrementButton incrementItems={incrementItems} id={id} />
                  </div>

                  <div className="bg-orange-500 ml-auto">
                    {price > discountedPrice ? (
                      <p>{discountedPrice}</p>
                    ) : (
                      <p>{price}</p>
                    )}
                  </div>
                  <div></div>
                </li>
              )
            )}
        </ul>
        <div className="bg-orange-500 h-[20rem]">
          <div></div>
          <div className="flex flex-col">
            <button className="bg-primary-bg-clr">Proceed to checkout</button>
            <button className={`${styles.outlined}`}>Continue shopping</button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function IncrementButton({ ...args }) {
  return (
    <button aria-label="add item" onClick={() => args.incrementItems(args.id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
}

function DecrementButton({ ...args }) {
  return (
    <button
      aria-label="remove item"
      onClick={() => args.decrementItems(args.id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      </svg>
    </button>
  );
}

function CloseButton() {
  const { handleCartActive } = useContext(TogglerContext)!;
  return (
    <button onClick={handleCartActive} aria-label="close">
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
