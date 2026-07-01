import React from "react";
import Location from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDown from "@mui/icons-material/ArrowDropDownOutlined";


function Header() {
  return (
    <>
      <section>
        <div className="flex bg-[#131921] text-white items-center justify-start gap-4 p-1 px-4">
          {/* logo */}
          <div className="hover:border-2 border-white rounded-md p-1">
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png"
                alt=""
                className="w-20"
              />
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            
            <div>
              <p className="text-gray-300 font-semibold text-xs pl-7">Deliver To</p>
              <div className="flex items-center gap-1">
                <Location />
                <p className="text-white font-medium text-sm">Ethiopia</p>
              </div>
            </div>
          </div>

          {/* search bar */}

          <div className="flex items-center  rounded-md px-2 py-1 border border-gray-300 bg- w-[50%]">
            <div className="flex items-center gap-2 text-gray-500 bg-[#e6e6e6] rounded-l-md px-1">
              <select name="" id="" className="bg-[#e6e6e6] text-black border-none outline-none px-2 py-1">
                <option value="">All</option>
              </select>
            </div>
            <input type="text" className="bg-white text-black p-1 rounded-r-md w-full " />
            <SearchOutlinedIcon className="bg-[#febd69]" />
          </div>
          {/* language */}
          <div className="flex items-center gap-2">
            <img src="" alt="" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          {/* account */}
          <div className="flex items-center gap-2">
            <p>Hello, Sign in</p>
            <p>Account & Lists</p>
          </div>
          {/* orders */}
          <div>
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          {/* cart */}
          <div>
            <p>Cart</p>
            <p>0</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
