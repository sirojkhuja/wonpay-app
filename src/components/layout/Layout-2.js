import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Layout2 = ({ children }) => {
    const navigate = useNavigate();
    return (
        <Fragment>
            {children}

            <div onClick={() => navigate(-1)} className="layout-back">
                <img src="assets/img/icons/back.png" alt="back" />
            </div>
            <div
                onClick={() => navigate("/profile-2")}
                className="layout-signal"
            >
                <Link to="/profile-2">
                    <img src="assets/img/icons/signal.png" alt="user" />
                </Link>
                <span className="signal">1</span>
            </div>
        </Fragment>
    );
};

export default Layout2;
