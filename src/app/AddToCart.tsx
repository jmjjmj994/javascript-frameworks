import useCart from '../hooks/use-cart';

function AddToCart({ id }: { id: string }) {
  const { addItem } = useCart();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/online-shop/${id}`
      );
      const data = await response.json();
      addItem(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <button
      onClick={() => fetchData()}
      className=" bg-primary-bg-clr font-headers py-2 px-3 text-sm tracking-wider"
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
