import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AddCurerModal from "../modals/AddCurerModal";

const Curers = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="curer-page">
            <AddCurerModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="home-header">
                <div className="logo">
                    <img src="assets/img/icons/logo.png" alt="logo" />
                </div>
            </div>

            <div className="curer-body">
                <h3>Kuryerlar</h3>
                <div className="curer-item">
                    <div className="row">
                        <div className="col-3">
                            <img src="assets/img/icons/profile.png" alt="" />
                        </div>
                        <div className="col-6">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>$28.000</span>
                                <span>+$28.000</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <p>Uzbekistan</p>
                            <span>-$2000</span>
                        </div>
                    </div>
                </div>
                <div className="curer-item korea">
                    <div className="row">
                        <div className="col-3">
                            <img src="assets/img/icons/profile.png" alt="" />
                        </div>
                        <div className="col-6">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>$28.000</span>
                                <span>+$28.000</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <p>Korea</p>
                            <span>-$2000</span>
                        </div>
                    </div>
                </div>
                <div className="curer-item korea">
                    <div className="row">
                        <div className="col-3">
                            <img src="assets/img/icons/profile.png" alt="" />
                        </div>
                        <div className="col-6">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>$28.000</span>
                                <span>+$28.000</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <p>Korea</p>
                            <span>-$2000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curer-footer">
                <Link to="/">
                    <img src="assets/img/icons/home2.png" alt="user" />
                </Link>
                <button onClick={() => setModalShow(true)}>
                    Curer Qo'shish
                </button>
                <img
                    onClick={() => navigate(-1)}
                    src="assets/img/icons/back.png"
                    alt="back"
                />
            </div>
        </div>
    );
};

export default Curers;
