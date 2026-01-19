import { useDispatch } from "react-redux";
import { restro_imges } from "../utils/constants";
import { addItem } from "../utils/store/cartSlice";

const MenuItemList = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    
    
  };
  return (
    <div>
      {data.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-500 text-left flex justify-between"
        >
          <div className="9/12">
            <div className="py-2">
              <span>{item.card?.info?.name} </span>
              <span> -₹ {item.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button
                className="px-2 my-28 rounded-lg bg-black text-white"
                onClick={() => handleAddItem(item)}
              >
                ADD+
              </button>
            </div>
            <img
              src={restro_imges + item.card?.info?.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuItemList;
