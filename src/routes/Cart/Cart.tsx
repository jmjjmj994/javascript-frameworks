import CartProducts from './CartProducts';
import CartSummary from './CartSummary';
import useCart from '../../hooks/use-cart';
function Cart() {
  const { items } = useCart();
  return (
    <div className="m-auto   min-h-[100vh] flex flex-col md:flex-row  gap-[10px] items-center justify-center max-w-[90%] w-full py-5">
      <CartProducts />
      {items.length === 0 ? null : <CartSummary />}
    </div>
  );
}

export default Cart;
