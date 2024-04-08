import { Link } from 'react-router-dom';
function CheckoutSuccess() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className=" px-2 py-2 rounded-md text-center ">
        <h1 className="text-xl font-headers py-1">
          Thank you for your purchase!
        </h1>
        <Link to={'/'} className="text-blue-300 underline">
          Click here to go home
        </Link>
      </div>
    </div>
  );
}
export default CheckoutSuccess;
