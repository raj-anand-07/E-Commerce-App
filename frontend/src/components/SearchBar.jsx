import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, navigate } =
    useContext(ShopContext);

  return (
    showSearch && (
      <div className="border-t border-b bg-gray-50 text-center">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value), navigate("/collection");
            }}
            className="flex-1 outline-none bg-inherit text-sm"
          />
          <img src={assets.search_icon} className="w-4" />
        </div>
        <img
          src={assets.cross_icon}
          className="inline w-3 cursor-pointer"
          onClick={() => setShowSearch(false)}
        />
      </div>
    )
  );
};

export default SearchBar;
