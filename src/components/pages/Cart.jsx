import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "../MenuItemList";
import { clearCart } from "../../utils/store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center px-4 py-6">
      <h1 className="font-bold text-2xl md:text-3xl mb-4">Cart</h1>

      {cartItems.length > 0 && (
        <div className="mb-4">
          <button
            onClick={handleClearCart}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Clear Cart
          </button>
        </div>
      )}

      {cartItems.length === 0 && (
        <div className="flex flex-col items-center gap-4 mt-6">
          <img
            className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt="Empty Cart"
          />
          <h1 className="text-gray-600 text-sm md:text-base">
            Your cart is empty. Go to home page to add items 🍽️
          </h1>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mx-auto w-full sm:w-[90%] md:w-[75%] lg:w-[55%] mt-6">
          <MenuItemList data={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
