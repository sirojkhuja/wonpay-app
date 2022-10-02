import React, { useState } from "react";
import Layout from "../layouts/Layout";
import PutMoneyModal from "../modals/PutMoneyModal";

const UzbKor = () => {
  const [inputValue, setInputValue] = useState("");
  const [slectedType, setSelectedType] = useState("");
  const [modalShow, setModalShow] = useState(false);
  console.log(slectedType);
  return (
    <Layout>
      <PutMoneyModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="put-money">
        <div className="black-line"></div>
        <div className="put-money-input">
          <label htmlFor="put_money">Kerakli Summani Kiriting:</label>
          <input
            type="number"
            id="put_money"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <span className="korean-won">
            <img src="assets/img/icons/won.png" alt="won" />
          </span>
        </div>
        <div
          className={
            inputValue.length > 0 ? "put-money-radio active" : "put-money-radio"
          }
        >
          <div className="radio-group">
            <input
              onChange={() => setSelectedType("cash")}
              type="radio"
              id="radio-1"
              name="type"
            />
            <label htmlFor="radio-1">Naqd</label>
          </div>
          <div className="radio-group">
            <input
              onChange={() => setSelectedType("card")}
              type="radio"
              id="radio-1"
              name="type"
            />
            <label htmlFor="radio-1">Karta</label>
          </div>
        </div>
        <div
          className={
            slectedType === "cash"
              ? "put-money-details active"
              : "put-money-details"
          }
        >
          <div className="state-details">
            <h6>Koreyadagi manzilingizni kiriting:</h6>
            <div className="detail-group">
              <label className="col-3" htmlFor="address-1">
                Shahar:
              </label>
              <input className="col-6" type="text" />
            </div>
            <div className="detail-group">
              <label className="col-3" htmlFor="address-1">
                Telefon:
              </label>
              <input className="col-6" type="number" />
            </div>
          </div>
          <div className="state-details">
            <h6>O'zbekistonda pulni oluvchi:</h6>
            <div className="detail-group">
              <label className="col-3" htmlFor="address-1">
                Ism:
              </label>
              <input className="col-6" type="text" />
            </div>
            <div className="detail-group">
              <label className="col-3" htmlFor="address-1">
                Telefon:
              </label>
              <input className="col-6" type="number" />
            </div>
          </div>
        </div>
        <div
          className={
            slectedType === "card" ? "card-group-u active" : "card-group-u"
          }
        >
          <h6>SMS:</h6>
          <div className="card-group-body">
            <input type="file" id="upload-1" />
            <div
              onClick={() => document.getElementById("upload-1").click()}
              className="file-upload"
            >
              <img src="assets/img/icons/upload.png" alt="upload" />
              <span>Joylashtirish</span>
            </div>
            <p>Yoki</p>
            <input type="file" id="upload-2" />
            <button
              onClick={() => document.getElementById("upload-2").click()}
              className="money-btn"
            >
              Rasm Yuklash
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setModalShow(true)}
        className={slectedType !== "" ? "confirm-btn active" : "confirm-btn"}
      >
        Tasdiqlash
      </div>
    </Layout>
  );
};

export default UzbKor;
