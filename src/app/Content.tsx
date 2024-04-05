import ProductCard from './ProductCard';
import useFetch from '../hooks/use-fetch';
import { APIData } from '../hooks/use-fetch';
import { useEffect, useState } from 'react';
function Content() {
  const { data, loading, error } = useFetch('');
  const [product, setProduct] = useState<APIData[]>([]);

  useEffect(() => {
    setProduct(data);
  }, [data]);

  return (
    <div>
      <div className="grid">
        {product.map(
          ({
            id,
            title,
            description,
            price,
            discountedPrice,
            image,
            rating,
            tags,
          }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              description={description}
              price={price}
              discountedPrice={discountedPrice}
              image={image}
              rating={rating}
              tags={tags}
            />
          )
        )}
      </div>
    </div>
  );
}
export default Content;
