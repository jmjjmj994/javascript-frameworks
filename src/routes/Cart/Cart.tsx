import CartProducts from './CartProducts';
import CartSummary from './CartSummary';

function Cart() {
  return (
    <div className="m-auto h-full flex flex-col  gap-[10px] items-center justify-center max-w-[90%] w-full py-5">
      <CartProducts />
      <CartSummary />
    </div>
  );
}

export default Cart;
