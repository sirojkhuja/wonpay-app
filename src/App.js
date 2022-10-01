import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./components/Profile";
import Home from "./components/home";
import KorUzb from "./components/KorUzb";
import UzbKor from "./components/UzbKor";
import Profilenext from "./components/ProfileNext";
import Profile2 from "./components/Profile-2";
// import Transactions from "./components/Transactions";
import Sale from "./components/Sale";
import Messages from "./components/Messages";
// import TransactionDetail from "./components/TransactionDetail";

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
