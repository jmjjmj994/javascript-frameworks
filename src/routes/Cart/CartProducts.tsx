import { useState } from 'react';
import useCart from '../../hooks/use-cart';
import { Link } from 'react-router-dom';
function CartProducts() {
  const { items, incrementItem, decrementItem, removeItem } = useCart();

  function incrementItems(id: string) {
    incrementItem(id);
  }

  function decrementItems(id: string) {
    decrementItem(id);
  }

  function removeProduct(id: string) {
    removeItem(id);
  }

  return (
    <div
      className={`w-full  max-w-[50rem] h-[65vh] flex flex-col bg-white px-2  rounded-md ${
        items.length === 0 ? 'items-center justify-center' : null
      }`}
    >
      {items.length === 0 ? null : (
        <div className="border-b-[0.1px] my-2">
          <h1 className=" py-2">Shopping Cart</h1>
        </div>
      )}
      {items.length === 0 ? (
        <EmptyCartUI />
      ) : (
        <>
          <ul className="h-full flex flex-col gap-[7px] py-4 overflow-y-scroll">
            {items &&
              items.map(
                ({ id, image, amount, title, price, discountedPrice }) => (
                  <li
                    key={id}
                    className="flex flex-row justify-between items-center border px-2 py-2 rounded-md"
                  >
                    <div className="flex flex-row  items-center gap-[5px]  max-w-[100%]  w-full">
                      <div className="max-w-[4rem] w-full h-[4rem] relative">
                        <img
                          className="absolute h-full  w-full object-cover aspect-auto"
                          src={image.url}
                          alt=""
                        />
                      </div>

                      <div className="max-w-[10rem]  w-full ml-2">
                        <p>{title}</p>
                      </div>
                      <div className="max-w-[15rem] w-full flex flex-col justify-center items-center   sm:items-center  gap-[10px]  ">
                        <div className="flex  bg-slate-100 rounded-md  gap-[10px]">
                          <RemoveProducts
                            decrementItems={decrementItems}
                            id={id}
                          />
                          <span className="  text-center">{amount}</span>
                          <AddProducts
                            incrementItems={incrementItems}
                            id={id}
                          />
                        </div>
                        <div>
                          <button
                            onClick={() => removeProduct(id)}
                            className=" font-button text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-[2px]">
                      {discountedPrice < price && (
                        <p>${Math.trunc(discountedPrice)}</p>
                      )}

                      {price === discountedPrice && <p>${Math.trunc(price)}</p>}
                    </div>
                  </li>
                )
              )}
          </ul>
          <div className=" flex items-center gap-[25px] mb-0 ">
            <ClearCart />
          </div>
        </>
      )}
    </div>
  );
}

function ClearCart() {
  const { deleteItem } = useCart();
  const [promptConfirmation, setPromptConfirmation] = useState(false);

  function displayConfirmation() {
    setPromptConfirmation((prev) => !prev);
  }

  return (
    <div>
      {!promptConfirmation ? (
        <button
          onClick={() => displayConfirmation()}
          className="bg-red-500 text-white font-button px-2 py-2 my-2 rounded-md"
        >
          Empty cart
        </button>
      ) : (
        <div className="flex gap-[10px] py-2">
          <div>
            <p>Are you sure ?</p>
          </div>
          <div className="flex gap-[20px]">
            <button
              onClick={() => deleteItem()}
              className="bg-blue-500 px-2 text-white font-button rounded-md"
            >
              Yes
            </button>
            <button
              onClick={() => displayConfirmation()}
              className="bg-red-500 px-2 text-white font-button rounded-md"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function AddProducts({ ...args }) {
  return (
    <button
      className=" w-[1.5rem] flex items-center justify-center border-l-2"
      aria-label="add item"
      onClick={() => args.incrementItems(args.id)}
    >
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

function RemoveProducts({ ...args }) {
  return (
    <button
      className=" w-[1.5rem]  flex items-center justify-center border-r-2"
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

function EmptyCartUI() {
  return (
    <>
      <h1>Looks like your cart is empty. </h1>
      <Link className="text-blue-400 underline" to={'/'}>
        Click here to browse products
      </Link>
    </>
  );
}

export default CartProducts;
