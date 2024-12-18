import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "./Auth/AuthContext/AuthContext";
import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logout success");
        navigate("/");
      })
      .catch((errr) => {
        console.log("error", errr);
      });
  };
  return (
    <div className="lg:max-w-[1024px] md:max-w-[768px] max-w-[425px] mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pr-2 pl-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-2"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-md font-semibold hover:text-red-700 hover:bg-white ${
                    isActive ? "text-[#4335A7]" : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/allReviews"
                className={({ isActive }) =>
                  `text-md font-semibold hover:text-red-700 hover:bg-white ${
                    isActive ? "text-[#4335A7]" : ""
                  }`
                }
              >
                AllReviews
              </NavLink>
              <NavLink
                to="/addReview"
                className={({ isActive }) =>
                  `text-md font-semibold hover:text-red-700 hover:bg-white ${
                    isActive ? "text-[#4335A7]" : ""
                  }`
                }
              >
                AddReview
              </NavLink>
              <NavLink
                to="/myReview"
                className={({ isActive }) =>
                  `text-md font-semibold hover:text-red-700 hover:bg-white ${
                    isActive ? "text-[#4335A7]" : ""
                  }`
                }
              >
                MyReviews
              </NavLink>
              <NavLink
                to="/gameWatchList"
                className={({ isActive }) =>
                  `text-md font-semibold hover:text-red-700 hover:bg-white ${
                    isActive ? "text-[#4335A7]" : ""
                  }`
                }
              >
                GameWatchlist
              </NavLink>
            </ul>
          </div>
          <NavLink to="/" className="flex text-xl font-semibold">
            {/* <img className="lg:w-8 w-6 rounded-[50%]" src={logo} alt="" /> */}
            GameHive
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 hover:bg-white ${
                  isActive ? "text-[#4335A7]" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/allReviews"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 hover:bg-white ${
                  isActive ? "text-[#4335A7]" : ""
                }`
              }
            >
              AllReviews
            </NavLink>
            <NavLink
              to="/addReview"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 hover:bg-white ${
                  isActive ? "text-[#4335A7]" : ""
                }`
              }
            >
              AddReview
            </NavLink>
            <NavLink
              to="/myReview"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 hover:bg-white ${
                  isActive ? "text-[#4335A7]" : ""
                }`
              }
            >
              MyReviews
            </NavLink>
            <NavLink
              to="/gameWatchList"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 hover:bg-white ${
                  isActive ? "text-[#4335A7]" : ""
                }`
              }
            >
              GameWatchlist
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          {user ? (
            <>
              <button>
                {user?.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-[50%]"
                    src={user?.photoURL}
                    alt={user?.name}
                  />
                ) : (
                  <FaRegUserCircle className="w-10 h-10 text-gray-500" />
                )}
              </button>
              <button
                onClick={() => {
                  handleLogout();
                }}
                className="btn btn-outline btn-primary"
              >
                LogOut
              </button>
            </>
          ) : (
            <div className="flex gap-1">
              <button className="btn btn-outline btn-primary">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn btn-outline btn-primary">
                <Link to="/register">Register</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
