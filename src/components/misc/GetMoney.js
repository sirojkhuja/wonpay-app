import React, { useState } from "react";
import CurerModal from "../modals/CurerModal";
import { useNavigate, Link } from "react-router-dom";

const GetMoney = () => {
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="curer-page">
            <CurerModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="home-header">
                <div className="logo">
                    <img src="assets/img/icons/logo.png" alt="logo" />
                </div>

                <div className="home-profile">
                    <span>
                        $3.200 <b>(4)</b>{" "}
                    </span>
                    <span>$3.200</span>
                    <span>
                        $3.200 <b>(2)</b>
                    </span>
                    <img src="assets/img/icons/profile-mini.png" alt="pro" />
                </div>
            </div>
            <div className="admin-header">
                <span>Pul Olish:</span>
                <span>$3 200 (4)</span>
            </div>
            <div className="curer-body">
                <h5>Bugun</h5>
                <div className="curer-item">
                    <div className="row">
                        <div className="col-6 givemoney-item1">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>+99 899 400 12 00</span>
                            </div>
                        </div>
                        <div className="col-6 givemoney-item2">
                            <p>+2265$</p>
                            <span>11/02/2022 12:20</span>
                        </div>
                    </div>
                </div>
                <div className="curer-item">
                    <div className="row">
                        <div className="col-6 givemoney-item1">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>+99 899 400 12 00</span>
                            </div>
                        </div>
                        <div className="col-6 givemoney-item2">
                            <p>+2265$</p>
                            <span>11/02/2022 12:20</span>
                        </div>
                    </div>
                </div>
                <div className="curer-item">
                    <div className="row">
                        <div className="col-6 givemoney-item1">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>+99 899 400 12 00</span>
                            </div>
                        </div>
                        <div className="col-6 givemoney-item2">
                            <p>+2265$</p>
                            <span>11/02/2022 12:20</span>
                        </div>
                    </div>
                </div>
                <div className="curer-item">
                    <div className="row">
                        <div className="col-6 givemoney-item1">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>+99 899 400 12 00</span>
                            </div>
                        </div>
                        <div className="col-6 givemoney-item2">
                            <p>+2265$</p>
                            <span>11/02/2022 12:20</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curer-footer">
                <Link to="/">
                    <img src="assets/img/icons/home2.png" alt="user" />
                </Link>
                <button onClick={() => setModalShow(true)}>Tasdiqlash</button>
                <img
                    onClick={() => navigate(-1)}
                    src="assets/img/icons/back.png"
                    alt="back"
                />
            </div>
        </div>
    );
};
export default GetMoney;
