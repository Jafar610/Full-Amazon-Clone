import React from "react";
import Location from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDown from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
                className="w-28"
              />
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <div>
              <p className="text-gray-300 font-semibold text-xs pl-6">
                Deliver To
              </p>
              <div className="flex items-center gap-1">
                <Location />
                <p className="text-white font-medium text-sm">Ethiopia</p>
              </div>
            </div>
          </div>

          {/* search bar */}

          <div className="flex items-center outline-none  rounded-md   w-[50%] hover:border-2 border-[#febd69] hover:rounded-md">
            <div className="bg-[#e6e6e6] text-black border-none outline-none px-2 py-2 rounded-l-md">
               <select
              name=""
              id=""
            >
              <option value="">All</option>
            </select>
            </div>

            <div className=" bg-white text-black flex items-center outline-none w-full py-[6px]">
               <input
              type="text"
              className="w-full outline-none text-lg px-2"
              placeholder="Search Amazon"
              />
            </div>
            <div className="bg-[#febd69] text-black flex items-center justify-center px-2 py-2 rounded-r-md">
                <SearchOutlinedIcon className="bg-[#febd69]" />
            </div>
          </div>
          {/* language */}
          <div className="flex items-center gap-1">
            <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" alt="usa flag" className="w-6" />
            <select name="" id="" className="font-semibold">
              <option value="EN">
                EN
              </option>
            </select>
          </div>
          {/* account */}
          <div className="flex flex-col items-start">
            <p className="text-sm text-gray-300 font-semibold">Hello, Sign in</p>
            <select name="" id="" className="font-semibold">
              <option value="">Account & Lists</option>
            </select>
          </div>
          {/* orders */}
          <div className="flex flex-col items-start">
            <p className="text-sm text-gray-300 font-semibold">Returns</p>
            <p className="font-semibold">& Orders</p>
          </div>
          {/* cart */}
          <div className="flex items-center gap-1">
            <ShoppingCartOutlinedIcon className="text-[50px]" />
            <span className="font-semibold ">0</span>
            <p>Cart</p>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
