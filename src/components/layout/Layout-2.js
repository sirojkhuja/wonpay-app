import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Layout2 = ({ children }) => {
  return (
    <Fragment>
      {children}

      <div className="layout-back">
        <img src="assets/img/icons/back.png" alt="back" />
      </div>
      <div className="layout-signal">
        <Link to="/profile-2">
          <img src="assets/img/icons/signal.png" alt="user" />
        </Link>
        <span className="signal">1</span>
      </div>
    </Fragment>
  );
};

export default Layout2;
