import { useEffect, useState } from "react";
import Restaurantcards, { discountComponent } from "./Restaurantcards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useRestroCards from "../utils/hooks/useRestroCards";
import biryani from "../assets/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.avif";
import cakes from "../assets/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.avif";
import pizzas from "../assets/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.avif";
import icecream from "../assets/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.avif";
import burger from "../assets/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.avif";
import noodles from "../assets/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.avif";
import dosa from "../assets/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.avif";

const Body = () => {
  const listofrestro = useRestroCards();

  const [filteredrestro, setfilteredrestro] = useState([]);
  const [TopFoodChain, setTopFoodChain] = useState([]);
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
    <div>
      <div className="mx-auto w-full md:w-[80%] lg:w-[80%] my-14">
        <h1 className="text-2xl font-bold">What's on your mind?</h1>
        <div className="flex justify-evenly">
          <div>
            <img src={biryani} alt="" />
          </div>
          <div>
            <img src={cakes} alt="" />
          </div>
          <div>
            <img src={pizzas} alt="" />
          </div>
          <div>
            <img src={icecream} alt="" />
          </div>
          <div>
            <img src={burger} alt="" />
          </div>
          <div>
            <img src={noodles} alt="" />
          </div>
          <div>
            <img src={dosa} alt="" />
          </div>
        </div>

        <hr className="border-gray-400 "></hr>
      </div>

      <div className="body mx-auto w-full md:w-[80%] lg:w-[80%] my-14">
        <h1 className="text-2xl font-bold">Top restaurant chains in Hyderabad</h1>

        <div
          className="grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4 
    gap-4
  "
        >
          {listofrestro
            .filter((res) => res.info.avgRating > 4.5)
            .map((res,index) => (
              <Link key={`${res.info.id}-${index}`} to={"/resturants/" +res.info.id}><Restaurantcards key={res.info.id} props={res} /></Link>
            ))}
        </div>
        <hr className="border-gray-400 my-4"></hr>
      </div>

      <div className="body mx-auto w-full md:w-[80%] lg:w-[80%] ">
        <h1 className="text-2xl font-bold">
          Restaurants with online food delivery in Banglore
        </h1>
        <div
          className="grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4 
    gap-4
  "
        >
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
    </div>
  );
};

export default Body;
