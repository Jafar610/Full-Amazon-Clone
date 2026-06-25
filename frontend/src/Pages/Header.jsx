import React from "react";
import Location from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowDropDown from "@mui/icons-material/ArrowDropDownOutlined";
function Header() {
  return (
    <>
      <section>
        <div className="flex bg-[#131921] text-white items-center justify-between p-2">
          {/* logo */}
          <div className="">
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png"
                alt=""
                className="w-40"
              />
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <Location />
            <div>
              <p>Location</p>
              <p>Ethiopia</p>
            </div>
          </div>

          {/* search bar */}

          <div className="flex items-center gap-2">
            <div>
              <MenuOutlinedIcon />
              <select name="" id="">
                <option value="">All</option>
              </select>
            </div>

            <input type="text" />
            <SearchOutlinedIcon />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
