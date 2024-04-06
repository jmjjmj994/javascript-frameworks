import { motion } from 'framer-motion';
import useCart from '../../hooks/use-cart';
import styles from './cart.module.css';

function Cart() {
  const { items, incrementItem, decrementItem, removeItem } = useCart();

  function incrementItems(id: string) {
    incrementItem(id);
  }

  function decrementItems(id: string) {
    decrementItem(id);
  }

  return (
    <div className="m-auto h-full flex items-center justify-center max-w-[90%] w-full">
      <div className="bg-blue-500 w-full">
        <div>
          <h1>Cart</h1>
        </div>

        <ul>
          {items &&
            items.map(
              ({
                id,
                image,
                amount,
                title,
                price,
                discountedPrice,
                description,
              }) => (
                <li className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="flex flex-col sm:flex-row  items-center gap-[5px]  bg-orange-500 max-w-[15rem] w-full">
                    <img
                      className="max-w-[5rem] h-[5rem] w-full object-cover aspect-auto"
                      src={image.url}
                      alt=""
                    />
                    <p>{title}</p>
                  </div>

                  <div className="flex items-center">
                    <DecrementButton decrementItems={decrementItems} id={id} />
                    <span>{amount}</span>
                    <IncrementButton incrementItems={incrementItems} id={id} />
                  </div>

                  <div className="bg-pink-500 w-[5rem]">
                    {discountedPrice && discountedPrice < price && (
                      <p>{discountedPrice}</p>
                    )}
                  </div>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
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

export default Cart;
