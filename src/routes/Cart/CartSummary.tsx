import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/use-cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaypal,
  faGooglePay,
  faApplePay,
  faCcVisa,
} from '@fortawesome/free-brands-svg-icons';
const paypal = <FontAwesomeIcon icon={faPaypal} />;
const googlePay = <FontAwesomeIcon icon={faGooglePay} />;
const applePay = <FontAwesomeIcon icon={faApplePay} />;
const visaCard = <FontAwesomeIcon icon={faCcVisa} />;

function CartSummary() {
  const { items, deleteItem } = useCart();
  const [total, setTotal] = useState(0);

  function clearCart() {
    deleteItem();
  }

  useEffect(() => {
    let initial = 0;
    items.forEach((product) => {
      if (product.discountedPrice < product.price) {
        initial += product.discountedPrice * product.amount;
      } else {
        initial += product.price * product.amount;
      }
    });
    setTotal(initial);
  }, [total, items]);

  return (
    <div className="md:max-w-[20rem] w-full min-h-[65vh]  h-full flex flex-col justify-between  gap-[10px]  ">
      <div className="bg-white grow  py-2 px-2 my-2">
        <div className="border-b-[0.1px]">
          <h2 className="tracking-widest">Summary</h2>
        </div>
        <div className=" flex justify-between items-center">
          <p className="text-xs">Discount</p>
          <p>$0</p>
        </div>
        <div className=" flex justify-between items-center">
          <p className="text-xs">Delivery</p>
          <p>$0</p>
        </div>
        <div className=" flex justify-between items-center">
          <p className="text-xs">Tax</p>
          <p>$0</p>
        </div>

        <div className=" flex justify-between items-center">
          <p className="text-xs">Total</p>
          <p>${Math.trunc(total)}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-[7.5px] h-[25vh]  bg-white px-2">
        <div className="bg-white ">
          <h3 className="border-b-[0.1px]">Payment Method</h3>
        </div>
        <div className="flex gap-[5px] w-full">
          <span className="grow  bg-slate-100 text-center py-1 rounded-md">
            {visaCard}
          </span>
          <span className="grow bg-slate-100 text-center py-1 rounded-md">
            {paypal}
          </span>
          <span className="grow  bg-slate-100 text-center py-1 rounded-md">
            {googlePay}
          </span>
          <span className="grow bg-slate-100 text-center py-1 rounded-md">
            {applePay}
          </span>
        </div>
        <Link
          to={'/success'}
          role="button"
          onClick={() => clearCart()}
          className="w-full py-2 bg-blue-600 text-white font-button my-2 rounded-md text-center"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartSummary;
