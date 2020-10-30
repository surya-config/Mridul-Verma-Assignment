import React from "react";
import "./Comp2.css";
import CloseIcon from "@material-ui/icons/Close";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";

function Comp2() {
  return (
    <div className="comp2">
      <h5>
        Fill in the details of the hosts you wish to setup the installer on
      </h5>
      <div className="comp2__container">
        <div className="comp2__containerTitle">
          <h6>Add Host</h6>
        </div>
        <div className="comp2__container__innerContainer">
          <div className="comp2__containerSelectCategory">
            <h5>Select Category</h5>
          </div>
          <div className="comp2__containerInput">
            <input type="text" placeholder="Type host details" />
          </div>
          <div className="comp2__containerIcons">
            <CloseIcon />
            <CheckOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp2;
