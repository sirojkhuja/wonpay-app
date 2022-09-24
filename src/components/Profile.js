import React from "react";
import Layout2 from "./layout/Layout-2";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Layout2>
      <div className="profile-page">
        <div className="profile-navbar">
          <div className="profile-img">
            <img src="assets/img/icons/money-img.png" alt="img" />
            <img src="assets/img/icons/money.png" alt="img" />
          </div>
        </div>
        <div className="profile-avatar">
          <div className="profile-author">
            <div className="col-4">
              <img src="assets/img/icons/profile.png" alt="" />
            </div>
            <div className="col-8">
              <h3>Anvar Sobirov</h3>
              <h5>+99 897 705 12 56</h5>
            </div>
          </div>
          <div className="profile-avatar-footer">
            <div className="col-8">
              <span>Sizning hisobingiz:</span>
            </div>
            <div className="col-4">$4.00</div>
          </div>
        </div>
        <div className="not-finish">
          <h5>Yakunlanmaganlar</h5>
          <div className="money-cart">
            <h6>Ko'rib chiqilmoqda</h6>
            <Link to="/profilenext">
              <div className="cart-body">
                <div className="col-3 body-1">
                  <span>Uzb {">>"} Kor</span>
                </div>
                <div className="col-6 body-2">
                  <span>W 13,000</span>
                </div>
                <div className="col-3 body-3">
                  <span>Alisher Alimov</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="history">
          <h5>Tarix</h5>
          <div className="history-cart">
            <span className="show-time">25.08.2022</span>
            <div className="money-cart">
              <h6>Yakunlangan</h6>
              <div className="cart-body">
                <div className="col-3 body-1">
                  <span>Uzb {">>"} Kor</span>
                </div>
                <div className="col-6 body-2">
                  <span>W 13,000</span>
                  <span>$ 1,000</span>
                </div>
                <div className="col-3 body-3">
                  <span className="body-3-money">1 $ = 1350 W</span>
                  <span>Alisher Alimov</span>
                </div>
              </div>
            </div>
          </div>
          <div className="history-cart">
            <span className="show-time">25.08.2022</span>
            <div className="money-cart">
              <h6>Yakunlangan</h6>
              <div className="cart-body">
                <div className="col-3 body-1">
                  <span>Uzb {">>"} Kor</span>
                </div>
                <div className="col-6 body-2">
                  <span>W 13,000</span>
                  <span>$ 1,000</span>
                </div>
                <div className="col-3 body-3">
                  <span className="body-3-money">1 $ = 1350 W</span>
                  <span>Alisher Alimov</span>
                </div>
              </div>
            </div>
          </div>
          <div className="history-cart">
            <span className="show-time">25.08.2022</span>
            <div className="money-cart">
              <h6>Yakunlangan</h6>
              <div className="cart-body">
                <div className="col-3 body-1">
                  <span>Uzb {">>"} Kor</span>
                </div>
                <div className="col-6 body-2">
                  <span>W 13,000</span>
                  <span>$ 1,000</span>
                </div>
                <div className="col-3 body-3">
                  <span className="body-3-money">1 $ = 1350 W</span>
                  <span>Alisher Alimov</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default Profile;
