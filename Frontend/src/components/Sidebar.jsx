/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiFileText,
  FiSettings,
  FiLogOut,
  FiBarChart,
  FiUser,
  FiPieChart,
  FiChevronDown,
  FiHeart,
  FiThermometer,
  FiMonitor,
  FiDroplet,
  FiFilter,
  FiActivity,
} from "react-icons/fi";
import { BsHeartPulse } from "react-icons/bs";
import { GiKidneys } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("/");
  const [statisticsDropdown, setStatisticsDropdown] = useState(false);
  const [analyticalToolsDropdown, setAnalyticalToolsDropdown] = useState(false);
  const location = useLocation();

  const [diseasePredictionDropdown, setDiseasePredictionDropdown] =
    useState(false);

  const handleLinkClick = (
    path,
    shouldToggleDropdown = false,
    dropdownToToggle = null
  ) => {
    setActiveLink(path);

    if (shouldToggleDropdown) {
      if (dropdownToToggle === "statistics") {
        setStatisticsDropdown(!statisticsDropdown);
        setAnalyticalToolsDropdown(false);
        setDiseasePredictionDropdown(false);
      } else if (dropdownToToggle === "analyticalTools") {
        setAnalyticalToolsDropdown(!analyticalToolsDropdown);
        setStatisticsDropdown(false);
        setDiseasePredictionDropdown(false);
      } else if (dropdownToToggle === "diseasePrediction") {
        setDiseasePredictionDropdown(!diseasePredictionDropdown);
        setStatisticsDropdown(false);
        setAnalyticalToolsDropdown(true); // Keep "Analytical Tools" dropdown open
      }
    } else {
      setStatisticsDropdown(false);
      setAnalyticalToolsDropdown(false);
      setDiseasePredictionDropdown(false);
    }
  };

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  const isParentLinkActive = (parentPath, childPaths) => {
    return (
      isLinkActive(parentPath) || childPaths.some((path) => isLinkActive(path))
    );
  };

  const statisticsChildPaths = [
    "/statistics/patient-summary",
    "/statistics/overall-summary",
  ];

  const analyticalToolsChildPaths = [
    "/analytical-tools/disease-prediction/heart-disease-prediction",
    "/analytical-tools/disease-prediction/diabetes-prediction",
    "/analytical-tools/disease-prediction/kidney-disease-prediction",
    "/analytical-tools/disease-prediction/generic-disease-prediction",

    "/analytical-tools/readmission-prediction",
    "/analytical-tools/treatment-outcome",
  ];
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
                      : "hover:bg-teal-500 hover:text-white transition-colors duration-300"
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
                      : "hover:bg-teal-500 transition-colors duration-300 hover:text-white"
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
                <a
                  onClick={() =>
                    handleLinkClick("/statistics", true, "statistics")
                  }
                  className={`flex items-center p-2 rounded-md ${
                    isParentLinkActive("/statistics", statisticsChildPaths)
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-teal-500 hover:text-white transition-colors duration-300"
                  }`}
                >
                  <FiBarChart2 className="ml-2" />
                  <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                    Statistics
                  </span>
                  <FiChevronDown
                    className={`ml-auto transition-transform ${
                      statisticsDropdown ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <ul
                  className={`ml-6 overflow-hidden transition-max-height duration-500 ${
                    statisticsDropdown ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <li>
                    <Link
                      to="/statistics/patient-summary"
                      onClick={() =>
                        handleLinkClick("/statistics/patient-summary")
                      }
                      className={`flex items-center p-2 rounded-md my-2 ${
                        isLinkActive("/statistics/patient-summary")
                          ? "bg-gray-200 text-gray-800"
                          : "hover:bg-teal-500 hover:text-white transition-colors duration-500"
                      }`}
                    >
                      <FiUser className="ml-2" />
                      <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                        Patient Summary
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/statistics/overall-summary"
                      onClick={() =>
                        handleLinkClick("/statistics/overall-summary")
                      }
                      className={`flex items-center p-2 rounded-md ${
                        isLinkActive("/statistics/overall-summary")
                          ? "bg-gray-200 text-gray-800"
                          : "hover:bg-teal-500 hover:text-white transition-colors duration-500"
                      }`}
                    >
                      <FiPieChart className="ml-2" />
                      <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                        Overall Summary
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/report"
                  onClick={() => handleLinkClick("/report")}
                  className={`flex items-center p-2 rounded-md ${
                    isLinkActive("/report")
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-teal-500 hover:text-white transition-colors duration-500"
                  }`}
                >
                  <FiFileText className="ml-2" />
                  <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                    Report
                  </span>
                </Link>
              </li>
              <li>
                <a
                  onClick={() =>
                    handleLinkClick(
                      "/analytical-tools",
                      true,
                      "analyticalTools"
                    )
                  }
                  className={`flex items-center p-2 rounded-md ${
                    isParentLinkActive("/analytical-tools", [
                      "/analytical-tools/disease-prediction",
                      "/analytical-tools/disease-prediction/heart-disease-prediction",
                      "/analytical-tools/disease-prediction/diabetes-prediction",
                      "/analytical-tools/disease-prediction/kidney-disease-prediction",
                      "/analytical-tools/disease-prediction/generic-disease-prediction",
                      "/analytical-tools/readmission-prediction",
                      "/analytical-tools/treatment-outcome",
                    ])
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-teal-500 hover:text-white transition-colors duration-300"
                  }`}
                >
                  <FiBarChart className="ml-2" />
                  <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                    Analytical Tools
                  </span>
                  <FiChevronDown
                    className={`ml-auto transition-transform ${
                      analyticalToolsDropdown ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <ul
                  className={`ml-6 overflow-hidden transition-max-height duration-500 ${
                    analyticalToolsDropdown ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <li>
                    <a
                      onClick={() =>
                        handleLinkClick(
                          "/analytical-tools/disease-prediction",
                          true,
                          "diseasePrediction"
                        )
                      }
                      className={`flex items-center p-2 rounded-md ${
                        isParentLinkActive(
                          "/analytical-tools/disease-prediction",
                          [
                            "/analytical-tools/disease-prediction/heart-disease-prediction",
                            "/analytical-tools/disease-prediction/diabetes-prediction",
                            "/analytical-tools/disease-prediction/kidney-disease-prediction",
                            "/analytical-tools/disease-prediction/generic-disease-prediction",
                          ]
                        )
                          ? "bg-gray-200 text-gray-800"
                          : "hover:bg-teal-500 hover:text-white transition-colors duration-300"
                      }`}
                    >
                      <FiHeart className="ml-[-5px]" />
                      <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                        Disease Prediction
                      </span>
                      <FiChevronDown
                        className={`ml-auto transition-transform ${
                          diseasePredictionDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </a>
                    <ul
                      className={`ml-6 overflow-hidden transition-max-height duration-500 ${
                        diseasePredictionDropdown ? "max-h-48" : "max-h-0"
                      }`}
                    >
                      <li>
                        <Link
                          to="/analytical-tools/disease-prediction/heart-disease"
                          onClick={() =>
                            handleLinkClick(
                              "/analytical-tools/disease-prediction/heart-disease-prediction"
                            )
                          }
                          className={`flex items-center p-2 rounded-md ${
                            isLinkActive(
                              "/analytical-tools/disease-prediction/heart-disease-prediction"
                            )
                              ? "bg-gray-200 text-gray-800"
                              : "hover:bg-teal-500 hover:text-white transition-colors duration-500"
                          }`}
                        >
                          <BsHeartPulse className="ml-[-5px]" />
                          <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                            Heart Disease
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/analytical-tools/disease-prediction/diabetes"
                          onClick={() =>
                            handleLinkClick(
                              "/analytical-tools/disease-prediction/diabetes-prediction"
                            )
                          }
                          className={`flex items-center p-2 rounded-md ${
                            isLinkActive(
                              "/analytical-tools/disease-prediction/diabetes-prediction"
                            )
                              ? "bg-gray-200 text-gray-800"
                              : "hover:bg-teal-500 hover:text-white transition-colors duration-500"
                          }`}
                        >
                          <FiDroplet className="ml-[-5px]" />
                          <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                            Diabetes
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/analytical-tools/disease-prediction/kidney-disease"
                          onClick={() =>
                            handleLinkClick(
                              "/analytical-tools/disease-prediction/kidney-disease-prediction"
                            )
                          }
                          className={`flex items-center p-2 rounded-md ${
                            isLinkActive(
                              "/analytical-tools/disease-prediction/kidney-disease-prediction"
                            )
                              ? "bg-gray-200 text-gray-800"
                              : "hover:bg-teal-500 hover:text-white transition-colors duration-500"
                          }`}
                        >
                          <GiKidneys className="ml-[-5px]" />
                          <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                            Kidney Disease
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/analytical-tools/disease-prediction/generic-disease-prediction"
                          onClick={() =>
                            handleLinkClick(
                              "/analytical-tools/disease-prediction/generic-disease-prediction"
                            )
                          }
                          className={`flex items-center p-2 rounded-md ${
                            isLinkActive(
                              "/analytical-tools/disease-prediction/generic-disease-prediction"
                            )
                              ? "bg-gray-200 text-gray-800"
                              : "hover:bg-teal-500 hover:text-white transition-colors duration-500"
                          }`}
                        >
                          <FiActivity className="ml-[-5px]" />
                          <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                            Generic Disease
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="/analytical-tools/readmission-prediction"
                      onClick={() =>
                        handleLinkClick(
                          "/analytical-tools/readmission-prediction"
                        )
                      }
                      className={`flex items-center p-2 rounded-md ${
                        isLinkActive("/analytical-tools/readmission-prediction")
                          ? "bg-gray-200 text-gray-800"
                          : "hover:bg-teal-500 hover:text-white transition-colors duration-500"
                      }`}
                    >
                      <FiThermometer className="ml-[-5px]" />
                      <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                        Readmission Prediction
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/analytical-tools/treatment-outcome"
                      onClick={() =>
                        handleLinkClick("/analytical-tools/treatment-outcome")
                      }
                      className={`flex items-center p-2 rounded-md ${
                        isLinkActive("/analytical-tools/treatment-outcome")
                          ? "bg-gray-200 text-gray-800"
                          : "hover:bg-teal-500 hover:text-white transition-colors duration-500"
                      }`}
                    >
                      <FiMonitor className="ml-[-5px]" />
                      <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                        Treatment Outcome
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <hr className="mx-4" />
              <li>
                <Link
                  to="/settings"
                  onClick={() => handleLinkClick("/settings")}
                  className={`flex items-center p-2 rounded-md ${
                    isLinkActive("/settings")
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-teal-500 hover:text-white transition-colors duration-300"
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
                      : "hover:bg-teal-500 hover:text-white transition-colors duration-300"
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
