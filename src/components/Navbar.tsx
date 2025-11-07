import React, { useState } from "react";
import {
  IoPersonOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoSearchOutline,
  IoChevronDownOutline,
} from "react-icons/io5";

import { HiOutlineShoppingBag } from "react-icons/hi2";


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Our Products",
      dropdown: [
        { label: "All Products", href: "/products" },
        { label: "A2 Desi Cow Ghee", href: "/a2-ghee" },
        { label: "Cow & Buffalo Bilona Ghee", href: "/a2-ghee" },
        { label: "Cold Pressed Oil", href: "/a2-ghee" },
        { label: "Pickle", href: "/a2-ghee" },
        { label: "Natural Honey", href: "/a2-ghee" },
      ],
    },
    { label: "Our Story", href: "/story" },
    { label: "Contact", href: "/contact" },
    { label: "Track Order", href: "/trackyourorder" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop & Mobile Layout */}
        <div className="flex items-center justify-between h-16   lg:h-20">

          {/* LEFT: Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 hover:text-green-700"
            >
              {mobileOpen ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
            </button>
          </div>

          {/* LEFT: Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1 ">
            {navLinks.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-green-700 font-bold transition-colors"
                    onMouseEnter={() => setDropdownOpen(!dropdownOpen) }
                    onClick={() => setDropdownOpen(!dropdownOpen) }
                  >
                    {item.label}
                    <IoChevronDownOutline
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      size={16}
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-green-700 font-bold transition-colors"
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown */}
                {item.dropdown && dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg py-2 z-20 border">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-amber-400 hover:bg-green-50 hover:text-green-700"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CENTER: Logo */}
          <div className="flex-shrink-0 mx-4 lg:mx-0 ">
            <a href="/">
              <img
                src="/Logo.png"
                alt="Brand Logo"
                className="h-10 w-auto lg:h-20"
              />
            </a>
          </div>

          {/* RIGHT: Search + Icons */}
          <div className="flex items-center gap-3 lg:gap-4 flex-1 justify-end">

            {/* Desktop Search */}
            <div className="hidden lg:w-[70%] lg:flex items-center border rounded-full px-4 py-3 w-64 focus-within:ring-2 focus-within:ring-green-500">
              <input
                type="text"
                placeholder="Search product..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <IoSearchOutline className="text-gray-500 ml-2" size={20} />
            </div>

            {/* Mobile Search Button */}
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-green-700"
            >
              <IoSearchOutline size={24} />
            </button>

            {/* Login */}
            <a href="/login" className="p-2 text-gray-700 hover:text-green-700">
              <IoPersonOutline size={26} />
            </a>

            {/* Cart */}
            <a href="/cart" className="relative p-2 text-gray-700 hover:text-green-700">
              <HiOutlineShoppingBag size={26} />
              <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Search Bar (Expanded) */}
        {searchOpen && (
          <div className="lg:hidden pb-3 border-t pt-3">
            <div className="flex items-center border rounded-full px-4 py-2 mx-2 focus-within:ring-2 focus-within:ring-green-500">
              <input
                type="text"
                placeholder="Search product..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <IoSearchOutline className="text-gray-500 ml-2" size={20} />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="lg:hidden border-t pt-3 pb-4">
            {navLinks.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full text-left px-4 py-2 font-bold text-gray-700 hover:text-green-700 flex items-center justify-between"
                    >
                      {item.label}
                      <IoChevronDownOutline
                        className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                        size={16}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="pl-6 pb-2">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-1.5 text-sm text-gray-600 hover:text-green-700"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-2 font-bold text-gray-700 hover:text-green-700"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;