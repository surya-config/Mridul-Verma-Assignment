import React from "react";
import "./Comp1.css";

import LinkIcon from "@material-ui/icons/Link";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

function Comp1() {
  return (
    <div className="comp1__container">
      <div className="linkIcon">
        <LinkIcon />
      </div>
      <div className="comp1__containerContent">
        <h5>Installation Script</h5>
        <p>Run this installation script on your device you wish to monitor</p>
      </div>
      <div className="comp1__containerCopyLink">
        <div className="copyLink__container">
          <FileCopyOutlinedIcon />
          <h5>Copy Link </h5>
        </div>
      </div>
    </div>
  );
}

export default Comp1;
