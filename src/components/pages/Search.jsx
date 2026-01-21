import { useEffect, useState } from "react";
import Restaurantcards, { discountComponent } from "../Restaurantcards";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";
import useRestroCards from "../../utils/hooks/useRestroCards";

const Search = () => {
  const listofrestro = useRestroCards();

  const [searchtext, setsearchtext] = useState("");
  const [filteredrestro, setfilteredrestro] = useState([]);
  const DiscountComponent = discountComponent(Restaurantcards);

  useEffect(() => {
    setfilteredrestro(listofrestro);
  }, [listofrestro]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>
        looks like you're offline !! please check your internet connection.
      </h1>
    );

  return listofrestro.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-0 md:w-[90%] lg:w-[80%] my-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Box */}
          <div className="flex w-full sm:w-auto">
            <input
              type="text"
              data-testid="searchInput"
              className="w-full sm:w-75 md:w-87.5 lg:w-100
                   border border-gray-300 py-3 px-4 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Search for restaurant or food"
              value={searchtext}
              onChange={(e) => setsearchtext(e.target.value)}
            />

            <button
              className="ml-2 px-5 py-3 bg-green-500 text-white rounded-lg
                   hover:bg-green-600 transition"
              onClick={() => {
                const filteredlist = listofrestro.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchtext.toLowerCase()),
                );
                setfilteredrestro(filteredlist);
              }}
            >
              Search
            </button>
          </div>

          {/* Top Rated Filter */}
          <button
            className="w-full sm:w-auto px-6 py-3 bg-gray-100 rounded-lg
                 hover:bg-gray-200 transition text-center"
            onClick={() => {
              const filteredlist = listofrestro.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setfilteredrestro(filteredlist);
            }}
          >
            ⭐ Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="mx-auto
    w-full
    px-4
    sm:px-6
    md:px-8
    lg:px-0
    lg:w-[80%]

    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-6">
        {filteredrestro.map((res, index) => (
          <Link
            key={`${res.info.id}-${index}`}
            to={"/resturants/" + res.info.id}
          >
            {res.info.aggregatedDiscountInfoV3.header >= "30%" ? (
              <DiscountComponent props={res} />
            ) : (
              <Restaurantcards props={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
