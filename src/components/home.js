import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-header">
                <div className="logo">
                    <img src="assets/img/icons/logo.png" alt="logo" />
                </div>
                <div className="home-profile">
                    <img src="assets/img/icons/profile-mini.png" alt="pro" />
                    <span>Anvar Sobirov</span>
                </div>
            </div>
            <div className="home-body">
                <div className="home-money">
                    <span>Sizning Xisobingiz:</span>
                    <span>$0.0</span>
                </div>
                <div className="home-category">
                    <div className="category-card">
                        <div className="home-category-img">
                            <img
                                src="assets/img/icons/calendar.png"
                                alt="calendar"
                            />
                        </div>
                        <div className="home-category-text">
                            <span>O'tkazmalar tarixi</span>
                        </div>
                    </div>
                    <div className="category-card">
                        <div className="home-category-img">
                            <img
                                src="assets/img/icons/refresh.png"
                                alt="calendar"
                            />
                        </div>
                        <div className="home-category-text">
                            <span>Oldi-Berdilar</span>
                        </div>
                    </div>
                    <div className="category-card">
                        <div className="home-category-img">
                            <img
                                src="assets/img/icons/bullhorn.png"
                                alt="calendar"
                            />
                        </div>
                        <div className="home-category-text">
                            <span>Xabarlar</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-buttons">
                <Link to="/uzb-kor">
                    <button className="money-btn">Uzb {">>"} Kor</button>
                </Link>
                <Link to="/kor-uzb">
                    <button className="money-btn">Kor {">>"} Uzb</button>
                </Link>
            </div>
            <div className="home-footer">
                <img src="assets/img/icons/home.png" alt="home" />
            </div>
        </div>
    );
};

export default Home;
