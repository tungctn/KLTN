import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoTodaySharp,
  IoCalendarSharp,
  IoPersonSharp,
  IoBookmarksSharp,
} from "react-icons/io5";

const NavigationBar = () => {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(location.pathname);
  const linkClass =
    "flex-1 text-center py-4 mx-2 border-black border-2 rounded-lg text-3xl font-medium  flex items-center justify-center";
  const activeClass = "bg-sky-400";
  const inactiveClass = "hover:bg-sky-400 bg-sky-200";
  return (
    <div className="w-full mt-2 fixed top-0 z-10">
      <nav className="text-black w-full">
        <ul className="flex">
          <Link
            to="/"
            className={`${linkClass} ${
              currentTab === "/" ? activeClass : inactiveClass
            }`}
            onClick={() => setCurrentTab("/")}
          >
            <IoTodaySharp className="mr-2" size={30} />
            TODAY
          </Link>

          <Link
            to="/calendar"
            className={`${linkClass} ${
              currentTab === "/calendar" ? activeClass : inactiveClass
            }`}
            onClick={() => setCurrentTab("/calendar")}
          >
            <IoCalendarSharp
              className="align-baseline inline-block mr-2"
              size={30}
            />
            CALENDAR
          </Link>
          <Link
            to="/profile"
            className={`${linkClass} ${
              currentTab === "/profile" ? activeClass : inactiveClass
            }`}
            onClick={() => setCurrentTab("/profile")}
          >
            <IoPersonSharp
              className="align-baseline inline-block mr-2"
              size={30}
            />
            PROFILE
          </Link>
          <Link
            to="/notes"
            className={`${linkClass} ${
              currentTab === "/notes" ? activeClass : inactiveClass
            }`}
            onClick={() => setCurrentTab("/notes")}
          >
            <IoBookmarksSharp
              className="align-baseline inline-block mr-2"
              size={30}
            />
            NOTES
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
