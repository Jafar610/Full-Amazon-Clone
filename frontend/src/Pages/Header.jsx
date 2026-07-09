import { useState } from "react";
import Location from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <section className="bg-[#131921]">
        {/* Main Header */}
        <div className="flex bg-[#131921] text-white items-center justify-between gap-2 md:gap-5 p-2 md:p-1 px-2 md:px-4">
          {/* Logo */}
          <div className="flex-shrink-0 hover:border-1 border-white rounded-md p-1 transition">
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png"
                alt="Amazon Logo"
                className="w-20 md:w-28 h-auto"
              />
            </a>
          </div>

          {/* Location - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <div className="hover:border-1 rounded-md p-1 transition">
              <p className="text-gray-300 font-semibold text-xs">Deliver To</p>
              <div className="flex items-center gap-1">
                <Location className="text-lg" />
                <p className="text-white font-medium text-sm">Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Search Bar - Responsive width */}
          <div className="hidden sm:flex items-center flex-1 md:flex-none md:w-[50%] hover:border-2 border-[#febd69] rounded-md transition">
            <div className="bg-[#e6e6e6] text-black px-2 py-2 rounded-l-md hidden sm:block">
              <select
                name="category"
                id="category"
                className="text-xs md:text-sm outline-none"
              >
                <option value="">All</option>
              </select>
            </div>
            <div className="bg-white text-black flex items-center w-full">
              <input
                type="text"
                className="w-full outline-none text-xs md:text-[18px] sm:text-[18px] px-2 py-2  "
                placeholder="Search Amazon"
              />
            </div>
            <div className="bg-[#febd69] text-black flex items-center justify-center px-2 py-2 rounded-r-md hover:bg-[#f0c14c] transition">
              <SearchOutlinedIcon />
            </div>
          </div>

          {/* Language - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-1 flex-shrink-0 hover:border-1 border-white rounded-md p-1 transition">
            <img
              src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
              alt="USA flag"
              className="w-5 h-auto"
            />
            <select
              name="language"
              id="language"
              className="text-sm font-semibold outline-none bg-[#131921] text-white"
            >
              <option value="EN">EN</option>
            </select>
          </div>

          {/* Account - Hidden on mobile */}
          <div className="hidden lg:flex flex-col items-start flex-shrink-0 hover:border-1 border-white rounded-md p-1 transition">
            <p className="text-xs md:text-xs text-gray-300 font-semibold">
              Hello, Sign in
            </p>
            <select
              name="account"
              id="account"
              className="font-semibold outline-none bg-[#131921] text-white text-sm"
            >
              <option value="">Account & Lists</option>
            </select>
          </div>

          {/* Orders - Hidden on mobile */}
          <div className="hidden lg:flex flex-col items-start flex-shrink-0 hover:border-1 border-white rounded-md p-1 transition">
            <p className="text-xs text-gray-300 font-semibold">Returns</p>
            <p className="font-semibold text-sm">& Orders</p>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-1 flex-shrink-0 hover:border-1 border-white rounded-md p-1 transition">
            <div className="relative flex items-center justify-center w-10 h-10">
              <ShoppingCartOutlinedIcon style={{ fontSize: "28px" }} />
              <span className="absolute -top-1 -right-1 bg-[#febd69] text-black text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
            <p className="font-semibold text-sm hidden sm:block pt-2">Cart</p>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <CloseIcon style={{ fontSize: "28px" }} />
            ) : (
              <MenuIcon style={{ fontSize: "28px" }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#232f3e] border-t border-gray-600">
            <div className="flex flex-col gap-0 p-3">
              {/* Search on mobile */}
              <div className="flex items-center mb-3 hover:border-2 border-[#febd69] rounded-md">
                <input
                  type="text"
                  className="w-full outline-none text-sm px-3 py-2 bg-white text-black rounded-l-md"
                  placeholder="Search Amazon"
                />
                <div className="bg-[#febd69] text-black flex items-center justify-center px-3 py-2 rounded-r-md">
                  <SearchOutlinedIcon style={{ fontSize: "20px" }} />
                </div>
              </div>

              {/* Mobile Menu Items */}
              <div className="border-b border-gray-600 py-3 pb-3">
                <div className="flex items-center gap-2 mb-3">
                  <Location className="text-gray-300" />
                  <div>
                    <p className="text-xs text-gray-300 font-semibold">
                      Deliver To
                    </p>
                    <p className="text-white font-medium text-sm">Ethiopia</p>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="py-2 text-gray-100 text-sm hover:text-[#febd69] transition"
              >
                Hello, Sign in
              </a>
              <a
                href="#"
                className="py-2 text-gray-100 text-sm font-semibold hover:text-[#febd69] transition"
              >
                Account & Lists
              </a>
              <a
                href="#"
                className="py-2 text-gray-100 text-sm hover:text-[#febd69] transition"
              >
                Returns & Orders
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Header;
