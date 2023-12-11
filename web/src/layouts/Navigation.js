import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="w-full">
      <Menu mode="horizontal" className="flex bg-blue-600 text-white">
        <Menu.Item key="today" className="flex-1 hover:bg-blue-700">
          <Link to="/today">TODAY</Link>
        </Menu.Item>
        <Menu.Item key="calendar" className="flex-1 hover:bg-blue-700">
          <Link to="/calendar">CALENDAR</Link>
        </Menu.Item>
        <Menu.Item key="profile" className="flex-1 hover:bg-blue-700">
          <Link to="/profile">PROFILE</Link>
        </Menu.Item>
        <Menu.Item key="notes" className="flex-1 hover:bg-blue-700">
          <Link to="/notes">NOTES</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavigationBar;
