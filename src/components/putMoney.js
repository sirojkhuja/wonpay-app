import React, { useState } from "react";
import Layout from "./layout/Layout";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const PutMoney = () => {
  const [inputValue, setInputValue] = useState("");
  const [slectedType, setSelectedType] = useState("");
  const [modalShow, setModalShow] = useState(false);

  return (
    <Layout>
      <PutMoneyModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="put-money">
        <div className="black-line"></div>
        <div className="put-money-input">
          <label htmlFor="put_money">Mavjud Summani Kiriting:</label>
          <input
            type="number"
            id="put_money"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
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
            slectedType === "card" ? "card-group active" : "card-group"
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

export default PutMoney;

function PutMoneyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {" "}
        <h3>Sizning so'rovingiz qabul qilindi</h3>{" "}
      </Modal.Header>
      <Modal.Body>
        <div className="my-modal">
          <p>Iltimos kuryerimiz aloqaga chiqishini kuting</p>

          <Link to="/profile">
            <button>Mening Sahifam</button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}
