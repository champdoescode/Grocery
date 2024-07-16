import{ useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faShoppingCart,
  faPhone,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, Outlet } from "react-router-dom";
import HomePage from "../../pages/HomePage";

const Navbar = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [showFruitsItems, setShowFruitsItems] = useState(false);
  const [showSnacksItems, setShowSnacksItems] = useState(false);
  const [showJuicesItems, setShowJuicesItems] = useState(false);
  const [showButton, setShowButton] = useState(true); 
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenuDropdown = () => {
    setMenuDropdown(!menuDropdown);
    setShowItems(true);
    setShowFruitsItems(false);
    setShowSnacksItems(false);
    setShowJuicesItems(false);
  };

  const handleButtonClick = () => {
    setShowItems(!showItems);
    setShowFruitsItems(false);
    setShowSnacksItems(false);
    setShowJuicesItems(false);
  };

  const handleFruitsClick = () => {
    setShowItems(false);
    setShowFruitsItems(!showFruitsItems);
    setShowSnacksItems(false);
    setShowJuicesItems(false);
  };

  const handleSnacksClick = () => {
    setShowItems(false);
    setShowFruitsItems(false);
    setShowSnacksItems(!showSnacksItems);
    setShowJuicesItems(false);
  };

  const handleJuicesClick = () => {
    setShowItems(false);
    setShowFruitsItems(false);
    setShowSnacksItems(false);
    setShowJuicesItems(!showJuicesItems);
  };

  
  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth > 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <header className="fixed w-full z-50">
      <div className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-auto">
          <div className="flex items-center">
            <NavLink to="" className="flex items-center">
              <img
                src="../../../../public/images/2.png"
                alt="Logo"
                className="h-16 mr-4"
              />
            </NavLink>
          </div>
          <div className="flex-grow mx-4 lg:mx-28">
            <div className="relative">
              <input
                type="text"
                placeholder="Search For items..."
                className="w-full px-4 py-2 text-gray-900 border border-gray-300"
              />
              <button className="absolute right-0 top-0 bg-teal-500 text-white px-6 py-2 md:px-4 md:py-2">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <div
              className="relative group"
              onMouseEnter={() => setAccountDropdown(true)}
              onMouseLeave={() => setAccountDropdown(false)}
            >
              <a
                href="#"
                className="flex items-center ml-20 space-x-2 hover:text-teal-500"
              >
                <FontAwesomeIcon icon={faUser} className="text-xl" />
                <span>Account</span>
              </a>
              {accountDropdown && (
                <div
                  className="absolute left-0 mt-0 w-40 bg-white shadow-lg rounded-md z-50"
                  onMouseEnter={() => setAccountDropdown(true)}
                  onMouseLeave={() => setAccountDropdown(false)}
                >
                  <NavLink
                    to="/signup"
                    className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
                  >
                    Registration
                  </NavLink>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
                  >
                    Checkout
                  </a>
                  <NavLink
                    to='login'
                    className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
                  >
                    Login
                  </NavLink>
                </div>
              )}
            </div>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-teal-500"
            >
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
              <span>Wishlist</span>
            </a>
            <Link to="/mycart" className="flex items-center space-x-2 hover:text-teal-500">
    <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
    <span>Cart</span>
  </Link>
          </div>
          <div className="lg:hidden flex items-center space-x-4">
            <a href="#" className="hover:text-teal-500">
              <FontAwesomeIcon icon={faUser} className="text-xl" />
            </a>
            <a href="#" className="hover:text-teal-500">
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
            </a>
            <a href="#" className="hover:text-teal-500">
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 h-0.5 mx-auto"></div>

      <div className="bg-white text-gray-900 py-2 shadow-lg mx-auto ">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="relative group">
            {showButton && (
              <button
                className="text-gray-900 border border-gray-300 rounded-md p-2"
                onClick={toggleMenuDropdown}
              >
                <FontAwesomeIcon icon={faBars} className="text-2xl" />
              </button>
            )}
            {menuDropdown && (
              <div className="absolute left-0 mb-14 w-auto bg-white shadow-lg rounded-md z-50 text-left space-y-3 pt-5 ">
                <div className="relative">
                  <button
                    onClick={handleButtonClick}
                    className="block px-4 py-2 text-teal-600 w-48 text-left border border-teal-600 rounded-md"
                  >
                    Dairy & Bakery
                  </button>
                  {showItems && (
                    <div className="absolute left-full top-0 mt-0 w-auto bg-white shadow-lg rounded-md z-50 text-left space-y-3 h-64 pt-5">
                      <div className="grid grid-cols-2 gap-4 w-96">
                        {/* Column 1 - Dairy */}
                        <div>
                          <h3 className="text-lg font-bold text-center">
                            Dairy
                          </h3>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Milk
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Ice Cream
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Cheese
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Frozen Custard
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Frozen Yogurt
                          </button>
                        </div>

                        {/* Column 2 - Bakery */}
                        <div>
                          <h3 className="text-lg font-bold text-center">
                            Bakery
                          </h3>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Cake And Pastry
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Rusk Toast
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Bread & Buns
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Rusk Toast
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Pizza Base
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={handleFruitsClick}
                    className="block px-4 py-2 text-teal-600 w-48 text-left border border-teal-600 rounded-md mt-2"
                  >
                    Fruits & Vegetables
                  </button>
                  {showFruitsItems && (
                    <div className="absolute left-full top-0 mt-0 w-auto bg-white shadow-lg rounded-md z-50 text-left space-y-3 h-64">
                      <div className="grid grid-cols-2 gap-4 w-96">
                        {/* Column 1 - Fruits */}
                        <div>
                          <h3 className="text-lg font-bold text-center">
                            Fruits
                          </h3>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Apple
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Mango
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Orange
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Banana
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Pineapple
                          </button>
                        </div>

                        {/* Column 2 - Vegetables */}
                        <div>
                          <h3 className="text-lg font-bold text-center">
                            Vegetables
                          </h3>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Cabbage
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Onion
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Potato
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Carrot
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Tomato
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={handleSnacksClick}
                    className="block px-4 py-2 text-teal-600 w-48 text-left border border-teal-600 rounded-md mt-2"
                  >
                    Snacks & Chocolates
                  </button>
                  {showSnacksItems && (
                    <div className="absolute left-full top-0 mt-0 w-auto bg-white shadow-lg rounded-md z-50 text-left space-y-3 h-64">
                      <div className="grid grid-cols-2 gap-4 w-96">
                        {/* Column 1 - Snacks */}
                        <div>
                          <h3 className="text-lg font-bold text-center">
                            Snacks
                          </h3>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Lay's Chips
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Kurkure
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Cornitos
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Haldiram's Snacks
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Wafers
                          </button>
                        </div>

                        {/* Column 2 - Chocolates */}
                        <div>
                          <h3 className="text-lg font-bold text-center">
                            Chocolates
                          </h3>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Dairy Milk
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            KitKat
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Ferrero Rocher
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            5 Star
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Snickers
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={handleJuicesClick}
                    className="block px-4 py-2 text-teal-600 w-48 text-left border border-teal-600 rounded-md mt-2"
                  >
                    Juices & Energy Drinks
                  </button>
                  {showJuicesItems && (
                    <div className="absolute left-full top-2 mt-0 w-auto bg-white shadow-lg rounded-md z-50 text-left space-y-3 h-64 pt-5">
                      <div className="grid grid-cols-2 gap-4 w-96">
                        {/* Column 1 - Juices */}
                        <div>
                          <h3 className="text-lg font-bold text-center">
                            Juices
                          </h3>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Real Juice
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Tropicana
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Paper Boat
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Minute Maid
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Kissan
                          </button>
                        </div>

                        {/* Column 2 - Energy Drinks */}
                        <div>
                          <h3 className="text-lg font-bold text-center">
                            Energy Drinks
                          </h3>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Red Bull
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Monster
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Gatorade
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Cloud 9
                          </button>
                          <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                            Mountain Dew
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <a href="#" className="block px-4 py-2 text-teal-600 w-48 text-left border border-teal-600 rounded-md mt-2" >
                    View All
                  </a>
                </div>
              </div>
            )}
          </div>

            
    <div className="flex text-center py-auto">     
    <div className="flex items-center justify-between h-auto">
      <div className="flex items-center">
        <div className=" hidden md:flex">
          <div className="ml-10 flex  space-x-4 items-center">
            <a
              href="#"
              className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
            >
              About Us
            </a>
            <NavLink
              to='contactus'
              href="#"
              className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
            >
              Contact Us
            </NavLink>
            <a
              href="#"
              className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
            >
              Categories
            </a>
          </div>
        </div>
      </div>
      <div className="-mr-2 flex md:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 focus:text-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a
        href="#"
        className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
      >
        Home
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
      >
        About Us
      </a>
      <NavLink
        to='contactus'
        href="#"
        className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
      >
        Contact Us
      </NavLink>
      <a
        href="#"
        className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white"
      >
        Categories
      </a>
    </div>
  </div>

    <a href="#" className="flex items-center space-x-2 hover:text-teal-500">
      <FontAwesomeIcon icon={faPhone} className="text-xl" />
      <span className="hidden sm:block">+123 ( 456 ) ( 7890 )</span>
    </a>
  </div>
  </div>
</header>
  <div>
    <Outlet/>
  </div>
  </>

  );
};

export default Navbar;
