import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      {children}

      <div onClick={() => navigate(-1)} className="layout-back">
        <img src="assets/img/icons/back.png" alt="back" />
      </div>
      <div onClick={() => navigate("/profile")} className="layout-user">
        <img src="assets/img/icons/user.png" alt="user" />
      </div>
    </Fragment>
  );
};

export default Layout;
