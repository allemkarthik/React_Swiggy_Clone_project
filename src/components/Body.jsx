import { useEffect, useState } from "react";
import Restaurantcards, { discountComponent } from "./Restaurantcards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useRestroCards from "../utils/hooks/useRestroCards";

const Body = () => {
  const listofrestro = useRestroCards();


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
    <div className="body">
      
      <div className="grid grid-cols-4 gap-6 px-16 mx-16">
        {filteredrestro.map((res, index) => (
          <Link
            key={`${res.info.id}-${index}`}
            to={"/resturants/" + res.info.id}
          >
            {res.info.aggregatedDiscountInfoV3.header>="30%" ? (
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

export default Body;
