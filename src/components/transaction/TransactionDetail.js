import React, { useState } from "react";

const TransactionDetail = () => {
    return (
        <>
            <div className="transaction-page">
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                    <div className="home-profile">
                        <span>+$3200</span>
                        <img
                            src="assets/img/icons/profile-mini.png"
                            alt="pro"
                        />
                    </div>
                </div>
                <div className="transaction-detail-header">
                    <p>Taklif Qilingan Valyuta kursi:</p>
                    <h3>$1= ￦1.200</h3>
                    <h3>￦12.000.000 = $10.000 </h3>
                </div>
                <div className="component71-item">
                    <span>Koreada pulni qabul qiluvchi:</span>
                    <h3>Alisher Alimov</h3>
                    <p>Woori Bank (1002-565-86986)</p>
                    <h3>Qabul Qilingan</h3>
                </div>
                <div className="component71-item">
                    <span>O’zbekistonda pulni yetkazuvchi:</span>
                    <h3>Javohir Turaev</h3>
                    <p>Tashkent. +998 98 998 99 99</p>
                </div>
                <div className="component71-item">
                    <span>Pulni yetkazib berish vaqti:</span>
                    <input type="datetime-local" />
                </div>
            </div>
            <div className="profile-next-footer">
                <img src="assets/img/icons/user.png" alt="user" />
                <button>Bekor Qilish</button>
                <button>Tasdiqlash</button>
                <img src="assets/img/icons/back.png" alt="back" />
            </div>
        </>
    );
};

export default TransactionDetail;
