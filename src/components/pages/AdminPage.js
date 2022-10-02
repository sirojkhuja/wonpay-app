import React from "react";
import Layout from "../layouts/Layout";
import MenuCards from "../menu/MenuCards";

const AdminPage = () => {
    return (
        <Layout>
            <div className="admin-page">
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
                        <img
                            src="assets/img/icons/profile-mini.png"
                            alt="pro"
                        />
                    </div>
                </div>
                <MenuCards app="admin" />
            </div>
        </Layout>
    );
};

export default AdminPage;
