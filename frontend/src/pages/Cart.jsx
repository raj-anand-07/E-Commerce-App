import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "../components/Title";
import CartMenu from "../components/CartMenu";
import { ArrowRight, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { products, cartItems, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {cartData.length > 0 ? (
        <CartMenu cartData={cartData} />
      ) : (
        <div className="flex flex-col justify-center py-12 items-center mt-20">
          <div className="flex justify-center items-center">
            <ShoppingBag className="w-20 h-20 mb-2" />
          </div>

          <h1 className="text-gray-700 font-medium text-2xl text-center mb-3">
            Your cart is empty
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Add products while you shop, so they'll be ready for check out later
          </p>

          <div>
            <button
              onClick={() => navigate("/collection")}
              className="bg-black text-white text-sm px-4 py-3 cursor-pointer flex items-center active:bg-gray-700"
            >
              Start Shopping
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
