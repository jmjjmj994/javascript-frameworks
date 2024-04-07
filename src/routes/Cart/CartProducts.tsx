import useCart from '../../hooks/use-cart';
import { Link } from 'react-router-dom';
function CartProducts() {
  const { items, incrementItem, decrementItem, removeItem } = useCart();
  console.log(items);
  function incrementItems(id: string) {
    incrementItem(id);
  }

  function decrementItems(id: string) {
    decrementItem(id);
  }

  return (
    <div className="w-full  h-full min-h-[50vh] flex flex-col bg-white">
      <div className="">
        <h1>Shopping Cart</h1>
      </div>
      <table className="w-full h-full">
        <thead>
          <tr className="flex justify-between font-light">
            <th className="w-[33%] text-left font-light">Product</th>
            <th className="w-[33%] text-center font-light">Quantity</th>
            <th className="w-[33%] text-right font-light">Price</th>
          </tr>
        </thead>
        <tbody className="h-full">
          <tr>
            <td>
              <ul className="h-full flex flex-col gap-[7px] py-4">
                {items &&
                  items.map(
                    ({ id, image, amount, title, price, discountedPrice }) => (
                      <li className="flex flex-row justify-between items-center border px-2 py-2 rounded-md">
                        <div className="flex flex-row  items-center gap-[5px]  max-w-[100%] w-full">
                          <div className="max-w-[4rem] w-full h-[4rem] relative">
                            <img
                              className="absolute h-full  w-full object-cover aspect-auto"
                              src={image.url}
                              alt=""
                            />
                          </div>

                          <div className="max-w-[10rem] w-full ml-2">
                            <p>{title}</p>
                          </div>
                          <div className="max-w-[20rem] w-full flex flex-col justify-center items-center sm:flex-row  sm:items-center  gap-[10px]">
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
                          </div>
                        </div>

                        <div>
                          {discountedPrice && discountedPrice < price && (
                            <p>${Math.trunc(discountedPrice)}</p>
                          )}
                        </div>
                      </li>
                    )
                  )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <div className=" flex items-center gap-[25px]">
        <Link to={'/'}>Back</Link>
        <button className="bg-red-500 text-white font-button px-2 py-2 rounded-md">
          Cancel order
        </button>
      </div>
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

export default CartProducts;
