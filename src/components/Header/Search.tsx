import { useState, useEffect } from 'react';
import useFetch from '../../hooks/use-fetch';
import { APIData } from '../../hooks/use-fetch';
import { Link } from 'react-router-dom';

function Search() {
  const { data, loading } = useFetch('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<APIData[]>([]);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    if (!loading && searchQuery) {
      const filteredResults = data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
      setSearchActive(true);
    } else if (searchQuery === '') {
      setSearchResults([]);
      setSearchActive(false);
    }
  }, [data, loading, searchQuery]);

  function handleSearchActive() {
    setSearchActive(false);
    setSearchQuery('');
  }

  return (
    <>
      <form className=" h-auto flex items-center max-w-[80%] w-full m-auto bg-red-500">
        <div className="w-full  relative bg-green-400">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-full "
            id="search"
            type="text"
            placeholder="Search item..."
          />
          <label
            className="absolute right-[5px]  top-[15%]"
            htmlFor="search"
            aria-label="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </label>
        </div>
      </form>

      {searchResults.length > 0 && searchActive ? (
        <ul className="bg-purple-500 absolute flex flex-col  top-[100%] left-[50%] transform -translate-x-1/2  min-h-0 overflow-y-scroll md:max-w-[60%] w-full  max-h-[50vh] z-[1]  pb-[10px]  px-4">
          <CloseSearch handleSearchActive={handleSearchActive} />
          {searchResults.length > 0 &&
            searchResults.map(
              ({ id, title, image, price, discountedPrice }) => (
                <li className="rounded-md relative" key={id}>
                  <Link
                    className="flex  bg-blue-500 justify-between items-center mt-1 px-4 py-2 "
                    to={''}
                  >
                    <img
                      className="h-[5rem] w-[5rem] object-cover aspect-square"
                      src={image.url}
                      alt=""
                    />
                    <p>{title}</p>
                    <div className="flex flex-col">
                      {discountedPrice < price ? (
                        <div className="flex gap-[10px]">
                          <p>${Math.trunc(discountedPrice)}</p>{' '}
                          <p>${Math.trunc(price)}</p>
                        </div>
                      ) : price === discountedPrice ? (
                        <p>{price}</p>
                      ) : null}
                    </div>
                  </Link>
                </li>
              )
            )}
        </ul>
      ) : (
        <ul></ul>
      )}
    </>
  );
}

function CloseSearch({
  handleSearchActive,
}: {
  handleSearchActive: () => void;
}) {
  return (
    <div className="flex justify-end items-center pt-[10px] pb-[10px] border-b-[0.1px]">
      <button onClick={() => handleSearchActive()} aria-label="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Search;