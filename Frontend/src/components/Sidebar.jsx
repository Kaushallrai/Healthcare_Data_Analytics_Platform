import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  // FiArrowLeft,
  // FiArrowRight,
  FiHome,
  FiUsers,
  FiBarChart2,
  FiFileText,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`bg-white text-gray-600 flex fixed ${
        isOpen ? "w-64" : "w-20"
      } transition-width duration-75 h-screen`}
    >
      <div
        className={`${
          isOpen ? "w-72" : "w-24"
        } bg-white p-4 flex flex-col justify-between transition-width duration-300 shadow-md`}
      >
        <div>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center">
              <span
                className={`${
                  isOpen ? "block" : "hidden"
                } ml-2 font-semibold text-xl`}
              >
                Heathcare Analytics
              </span>
            </div>
            {/* <button
              className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiArrowLeft /> : <FiArrowRight />}
            </button> */}
          </div>
          <nav>
            <ul className={`space-y-2 flex flex-col gap-4 h-full`}>
              <li>
                <Link
                  to="/"
                  onClick={() => handleLinkClick("/")}
                  className={`flex items-center p-2 rounded-md ${
                    isLinkActive("/")
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-gray-200 transition-colors duration-300"
                  }`}
                >
                  <FiHome className="ml-2" />
                  <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/patient-management"
                  onClick={() => handleLinkClick("/patient-management")}
                  className={`flex items-center p-2 rounded-md ${
                    isLinkActive("/patient-management")
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-gray-200 transition-colors duration-300"
                  }`}
                >
                  <FiUsers className="ml-2" />
                  <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                    Patient Management
                  </span>
                </Link>
              </li>
              <hr className="mx-4" />
              <li>
                <Link
                  to="/statistics"
                  onClick={() => handleLinkClick("/statistics")}
                  className={`flex items-center p-2 rounded-md ${
                    isLinkActive("/statistics")
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-gray-200 transition-colors duration-300"
                  }`}
                >
                  <FiBarChart2 className="ml-2" />
                  <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                    Statistics
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/report"
                  onClick={() => handleLinkClick("/report")}
                  className={`flex items-center p-2 rounded-md ${
                    isLinkActive("/report")
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-gray-200 transition-colors duration-300"
                  }`}
                >
                  <FiFileText className="ml-2" />
                  <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                    Report
                  </span>
                </Link>
              </li>
              <hr className="mx-4 " />
              <li>
                <Link
                  to="/settings"
                  onClick={() => handleLinkClick("/settings")}
                  className={`flex items-center p-2 rounded-md ${
                    isLinkActive("/settings")
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-gray-200 transition-colors duration-300"
                  }`}
                >
                  <FiSettings className="ml-2" />
                  <span className={isOpen ? "ml-2" : "hidden"}>Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  onClick={() => handleLinkClick("/logout")}
                  className={`flex items-center p-2 rounded-md ${
                    isLinkActive("/logout")
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-gray-200 transition-colors duration-300"
                  }`}
                >
                  <FiLogOut className="ml-2" />
                  <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                    Logout
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
