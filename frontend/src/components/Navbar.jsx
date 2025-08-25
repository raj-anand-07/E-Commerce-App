import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const {
    setSearch,
    search,
    showSearch,
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const logout = () => {
    navigate("/login");
    sessionStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium lg:pb-0">
      <Link to="/">
        <img src={assets.logo} className="w-36" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          onClick={() => setShowSearch(false)}
          className="flex flex-col items-center gap-1"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/collection"
          onClick={() => setShowSearch(false)}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setShowSearch(false)}
          className="flex flex-col items-center gap-1"
        >
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setShowSearch(false)}
          className="flex flex-col items-center gap-1"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center justify-end gap-6 lg:w-1/2">
        <div className="border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {setSearch(e.target.value), navigate('/collection')}}
            className="flex-1 outline-none bg-inherit text-sm font-normal"
          />
          <img src={assets.search_icon} className="w-5 cursor-pointer" />
        </div>

          <img
            src={assets.search_icon}
            onClick={() => setShowSearch(!showSearch)}
            className="w-5 cursor-pointer lg:hidden"
          />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
          />
          {/* ----- Dropdown menu ----- */}
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p onClick={() => navigate('/profile')} className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>

        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" />

          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          src={assets.menu_icon}
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer border-b"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => {
              setVisible(false), setShowSearch(false);
            }}
            className="py-2 pl-6 border-b"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false), setShowSearch(false);
            }}
            className="py-2 pl-6 border-b"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false), setShowSearch(false);
            }}
            className="py-2 pl-6 border-b"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false), setShowSearch(false);
            }}
            className="py-2 pl-6 border-b"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
