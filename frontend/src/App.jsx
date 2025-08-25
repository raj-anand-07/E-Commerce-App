import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import { useContext, useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Profile from "./pages/Profile";
import { ShopContext } from "./context/shopContext";

const App = () => {
  const {token} = useContext(ShopContext);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("login")) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [location]);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      {!token ? (
        <Login />
      ) : (
        <>
          {visible && (
            <div>
              <Navbar />
              <SearchBar />
            </div>
          )}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          {visible && (
            <div>
              <Footer />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
