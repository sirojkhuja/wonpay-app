import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CurerPage from "./components/CurerPage";
import CurerSale from "./components/CurerSale";
import GetMoney from "./components/GetMoney";
import GiveMoney from "./components/GiveMoney";

function Apc() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CurerPage />} />
                <Route path="/givemoney" element={<GiveMoney />} />
                <Route path="/getmoney" element={<GetMoney />} />
                <Route path="/curersale" element={<CurerSale />} />
            </Routes>
        </Router>
    );
}

export default Apc;
