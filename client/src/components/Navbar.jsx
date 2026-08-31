import { Mail, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Search, Heart, ShoppingBag, UserRound, X, Menu } from "lucide-react";

import logo from "../assets/logo.webp";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = ({ onCartClick, onProfileClick }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);

  //console.log(user);

  return (
    <div className="w-full">
      <div className="h-10 bg-linear-to-r from-[#7e51a2] to-[#d62b90] flex flex-wrap justify-center md:justify-end items-center gap-5 px-6">
        <div className="flex items-center gap-2 text-white text-sm">
          <Mail size={18} />
          <Link>suavzuwa@zuwacosmetics.com</Link>
        </div>
        <div className="flex items-center gap-2 text-white text-sm">
          <MessageCircle size={18} className="text-white" />
          <Link>+9779841329273</Link>
        </div>
      </div>

      <header className="w-full border-b border-gray-100 bg-white">
        <nav className="mx-auto flex h-[80px] w-full max-w-[1600px] items-center py-12 px-6 sm:px-8 lg:px-6">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex w-[150px]  shrink-0 cursor-pointer items-center lg:w-[180px]"
          >
            <img
              src={logo}
              alt="ZuwaCosmetics"
              className="lg:h-[70px] h-auto w-full max-w-[150px]  object-contain lg:max-w-[170px]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center gap-6 xl:gap-10 lg:flex">
            <Link
              to="/products"
              className="whitespace-nowrap  transition-colors text-[14px] font-semibold text-[#3d3d3d] hover:text-[#d62b90] xl:text-base"
            >
              ALL PRODUCTS
            </Link>

            <Link
              to="/about"
              className="whitespace-nowrap text-[14px] font-semibold text-[#3d3d3d] hover:text-[#d62b90]  text-transition-colors  xl:text-base"
            >
              ABOUT US
            </Link>

            <Link
              to="/shop"
              className="whitespace-nowrap transition-colors text-[14px] font-semibold text-[#3d3d3d] hover:text-[#d62b90]  xl:text-base"
            >
              SHOP
            </Link>

            <Link
              to="/affiliate"
              className="whitespace-nowrap  transition-colors text-[14px] font-semibold text-[#3d3d3d] hover:text-[#d62b90]  xl:text-base"
            >
              AFFILIATE PROGRAM
            </Link>

            <Link
              to="/blogs"
              className="whitespace-nowrap text-[14px] font-semibold text-[#3d3d3d] hover:text-[#d62b90]  transition-colors xl:text-base"
            >
              BLOGS
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            {/* Search */}
            <div className="flex h-12 w-[220px] items-center rounded-full border border-gray-200 xl:w-[280px]">
              <div className="ml-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-50">
                <Search size={18} />
              </div>

              <input
                type="text"
                placeholder="Search Products"
                className="min-w-0 w-full bg-transparent px-3 text-sm outline-none placeholder:text-gray-400 xl:text-base"
              />
            </div>

            {/* Wishlist */}
            <button
              onClick={() => navigate("/wishlist")}
              className="shrink-0 transition-transform duration-200 hover:scale-110"
            >
              <Heart size={25} strokeWidth={1.6} />
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="shrink-0 transition-transform duration-200 hover:scale-110"
            >
              <ShoppingBag size={26} strokeWidth={1.4} />
            </button>

            {/* Login */}
            <button
              onClick={onProfileClick}
              className="flex shrink-0 items-center gap-1.5 text-[14px] font-normal text-[#3d3d3d] hover:text-[#d62b90]  xl:text-base"
            >
              <UserRound size={24} strokeWidth={1.6} />
              <span>
                {
                  user && user.name || "LOGIN"
                }
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-5">
              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                ALL PRODUCTS
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                ABOUT US
              </Link>

              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                SHOP
              </Link>

              <Link
                to="/affiliate"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                AFFILIATE PROGRAM
              </Link>

              <Link
                to="/blogs"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                BLOGS
              </Link>

              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 text-left text-sm font-medium"
              >
                <UserRound size={22} />
                Login
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
