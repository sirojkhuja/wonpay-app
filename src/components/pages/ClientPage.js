import React from "react";
import { Link } from "react-router-dom";
import MenuCards from "../menu/MenuCards";

const ClientPage = () => {
    return (
        <div className="home-page">
            <div className="home-header">
                <div className="logo">
                    <img src="assets/img/icons/logo.png" alt="logo" />
                </div>
                <div className="home-profile">
                    <span className="balance-item">-$5 800</span>
                    <div className="line">|</div>
                    <span className="balance-item">$23 600</span>
                    <div className="line">|</div>
                    <span className="balance-item">+$3 200</span>
                    <img src="assets/img/icons/profile-mini.png" alt="pro" />
                </div>
            </div>
            <div className="home-body">
                <div className="home-money">
                    <span>Sizning Xisobingiz:</span>
                    <span>$0.0</span>
                </div>
                <MenuCards app="client" />
            </div>
            <div className="home-buttons">
                <Link to="/uzb-kor">
                    <button className="money-btn">Uzb {">>"} Kor</button>
                </Link>
                <Link to="/kor-uzb">
                    <button className="money-btn yellow">Kor {">>"} Uzb</button>
                </Link>
            </div>
        </div>
    );
};

export default ClientPage;
