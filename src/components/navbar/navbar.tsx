import React from "react";
import { HomeOutlined, LoginOutlined } from "@ant-design/icons";
import "./navbar.css";
import Home from "../../pages/home/home_page";

interface Props {
  path: string;
  icon: any;
}

const Navlink = ({ path, icon }: Props) => {
  return (
    <li className="links">
      <a href={path}>{icon}</a>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="nav">
      <h1 className="navlogo">Grocery List</h1>

      <ul className="navlinks">
        <Navlink
          path="/"
          icon={<HomeOutlined style={{ fontSize: "30px" }} />}
        />
        <Navlink
          path="/login"
          icon={<LoginOutlined style={{ fontSize: "30px" }} />}
        />
      </ul>
    </div>
  );
};

export default Navbar;
