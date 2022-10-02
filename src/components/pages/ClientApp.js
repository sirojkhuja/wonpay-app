import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "../Profile";
import Home from "../home";
import KorUzb from "../KorUzb";
import UzbKor from "../UzbKor";
import Profilenext from "../ProfileNext";
import Profile2 from "../Profile-2";
// import Transactions from "../Transactions";
import Sale from "../Sale";
import Messages from "../Messages";
// import TransactionDetail from "../TransactionDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile-2" element={<Profile2 />} />
                <Route path="/profilenext" element={<Profilenext />} />
                <Route path="/uzb-kor" element={<UzbKor />} />
                <Route path="/kor-uzb" element={<KorUzb />} />
                <Route path="/sale" element={<Sale />} />
                <Route path="/message" element={<Messages />} />
            </Routes>
        </Router>
    );
}

export default App;