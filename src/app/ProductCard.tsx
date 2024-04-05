import styles from './app.module.css';
import { APIData } from '../hooks/use-fetch';
import View from './View';
import AddToCart from './AddToCart';

function ProductCard({
  title,
  id,
  description,
  price,
  discountedPrice,
  image,
  tags,
}: APIData) {
  return (
    <article
      className={`${styles.darkHover} bg-card-bg-clr relative max-h-[30rem] h-[25rem]`}
    >
      <div className={`${styles.darkOverlay} absolute w-full h-full`}>
        <img
          className="w-full h-full object-cover aspect-auto"
          src={image.url}
          alt=""
        />
      </div>
      <div className="flex  flex-col gap-[20px] pl-5 py-4 absolute bottom-0 ">
        <h2 className="font-headers text-white tracking-wider">{title}</h2>
        <div className="flex gap-[10px] text-white tracking-wider">
          <>
            {discountedPrice < price ? (
              <>
                <p className={`${styles.discounted} font-headers`}>{price}</p>
                <p className={` font-headers`}>{discountedPrice}</p>
              </>
            ) : (
              <p>{price}</p>
            )}
          </>

          {/*   <p className="font-headers ">{price}</p>
          <p className={`${styles.discounted} font-headers`}>
            {discountedPrice}
          </p> */}
        </div>
        <div>
          <p className="font-body text-white tracking-wide">{description}</p>
          <div className="flex gap-[10px]">
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="flex gap-[25px] ">
          <View id={id} />
          <AddToCart id={id} />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
