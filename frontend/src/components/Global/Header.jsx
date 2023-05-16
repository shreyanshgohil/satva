import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200  px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center order-2"></div>
          <div
            className=" justify-between items-center w-full flex  order-1"
            id="mobile-menu-2"
          >
            <ul className="flex font-medium flex-row space-x-8 mt-0">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700  dark:text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700  dark:text-white"
                  aria-current="page"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700  dark:text-white"
                  aria-current="page"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
