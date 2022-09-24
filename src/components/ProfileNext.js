import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Profilenext = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="profile-next">
        <div className="content-1">
          <h4>Taklif qilingan valyuta kursi:</h4>
          <div className="content-1-body">
            <h3>$1 = W 1.200 </h3>
            <h3>W 12 000 = $ 1000 </h3>
          </div>
        </div>
        <div className="content-2">
          <h4>Koreadan Pulni qabul qiluvchi:</h4>
          <div className="content-1-body">
            <h3>Alisher Alimov </h3>
            <h3>Woori Bank (1002-565-86986)</h3>
          </div>
        </div>
        <div className="content-3">
          <h4>O’zbekistonda pulni yetkazuvchi::</h4>
          <div className="content-1-body">
            <h3>Javohir Turaev </h3>
            <h3>Tashkent. +998 98 998 99 99</h3>
          </div>
        </div>
      </div>
      <div className="profile-next-footer">
        <img src="assets/img/icons/user.png" alt="user" />
        <button>Bekor Qilish</button>
        <button onClick={() => setModalShow(true)}>Tasdiqlash</button>
        <img src="assets/img/icons/back.png" alt="back" />
      </div>
    </>
  );
};

export default Profilenext;

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="my-modal">
          <p>Biz bilan hamkorlik qilganingiz uchun minnatdormiz.</p>
          <p>Yana kutamiz</p>
          <button>Mening Sahifam</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
