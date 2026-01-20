import { CDN_URL } from "../utils/constants";
import { restro_imges } from "../utils/constants";

const Restaurantcards = ({ props }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    locality,
    sla,
    areaName,
    cuisines,
  } = props.info;

  return (
    <div
      data-testid="resCard"
      className="
        relative
        m-2 p-4
        sm:m-3 sm:p-5
        md:m-4 md:p-6
        lg:p-6
        bg-gray-200
        rounded-xl
        hover:bg-gray-300
        transition-all
        duration-300
      "
    >
      {/* Image */}
      <img
        className="
          w-full
          h-40
          sm:h-44
          md:h-48
          lg:h-52
          object-cover
          rounded-lg
        "
        src={restro_imges + cloudinaryImageId}
        alt={name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "data:image/svg+xml;utf8,\
            <svg xmlns='http://www.w3.org/2000/svg' width='300' height='200'>\
              <rect width='100%' height='100%' fill='%23f3f4f6'/>\
              <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' \
                font-size='16' fill='%239ca3af'>🍽️ Image not available</text>\
            </svg>";
        }}
      />

      {/* Name */}
      <h3 className="font-bold py-2 text-lg sm:text-xl md:text-2xl">
        {name}
      </h3>

      {/* Rating & Cost */}
      <div className="flex justify-between text-sm sm:text-base md:text-lg">
        <span className="flex items-center gap-1">
          ⭐ {avgRating}
        </span>
        <span>{costForTwo}</span>
      </div>

      {/* Location & Time */}
      <div className="flex justify-between text-sm sm:text-base mt-1">
        <span>{locality}</span>
        <span>{sla?.slaString}</span>
      </div>

      {/* Cuisines */}
      <p className="text-sm text-gray-700 mt-2 line-clamp-2">
        Cuisines: {cuisines.join(", ")}
      </p>

      {/* Area */}
      <h5 className="text-sm text-gray-600 mt-1">
        Nearby: {areaName}
      </h5>
    </div>
  );
};


export const discountComponent = (RestaurantCards) => {
  return ({ props }) => {
    const discount = props.info.aggregatedDiscountInfoV3?.header;

    return (
      <div className="relative">
        {discount && (
          <label
            className="
              absolute
              top-2
              left-2
              bg-black
              text-white
              text-xs
              sm:text-sm
              px-2
              py-1
              rounded-lg
              z-10
            "
          >
            {discount}
          </label>
        )}

        <RestaurantCards props={props} />
      </div>
    );
  };
};


export default Restaurantcards;
