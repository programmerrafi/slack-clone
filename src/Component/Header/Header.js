import { Avatar } from "@mui/material";
import React from "react";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="md rafi" src="" />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search Rafi Programmer Lover" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
