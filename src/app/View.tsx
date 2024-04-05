import { Link } from 'react-router-dom';
function View({ id }: {id:string}) {
  return (
    <Link
      to={`/product/${id}`}
      className="bg-primary-bg-clr font-headers py-2 px-3 text-sm tracking-wider"
    >
      Read more
    </Link>
  );
}

export default View;
