import React from "react";
import { HomeOutlined, LoginOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import "./navbar.css";
import TextArea from "antd/lib/input/TextArea";

interface LogoProps {
  text: string;
}
const Logo = (props: LogoProps) => {
  const textArray = props.text.split("");
  console.log(textArray);
  const logo = textArray.map((value, index) => {
    return (
      <motion.h1
        className="logoletter"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          // times: [0, 0.5, 1],
          repeatDelay: textArray.length - 1,
          delay: index,
        }}
      >
        {value}
      </motion.h1>
    );
  });
  return <motion.div className="navlogo">{logo}</motion.div>;
};

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
      <Logo text="GroceryList" />

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
