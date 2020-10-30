import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <h1>SecurizzA</h1>
        </div>
        <div className="header__right">
          <div className="header__search">
            <SearchOutlinedIcon />
            <input
              type="text"
              placeholder="Search e.g. hosts, configurations ..."
            />
          </div>
          <div className="header__options">
            <NotificationsNoneOutlinedIcon
              style={{ color: "grey", fontSize: "27px" }}
            />
            <Avatar src="images/avatar.jpg" style={{ marginRight: "-35px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
