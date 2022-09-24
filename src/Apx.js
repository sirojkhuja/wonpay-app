import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admin from "./components/Admin";
import CashFlow from "./components/CashFlow";
import Curers from "./components/Curers";
import Depts from "./components/Depts";
import NoverCourse from "./components/NoverCourse";
import Offers from "./components/Offers";
import OfferRequst from "./components/OffferRequest";
import Profit from "./components/Profit";
import Reports from "./components/Reports";
import Requests from "./components/Requests";
import UzbCourse from "./components/UzbCourse";

function Apx() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/curers" element={<Curers />} />
                <Route path="/depts" element={<Depts />} />
                <Route path="/cashflow" element={<CashFlow />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/offerrequest" element={<OfferRequst />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/profit" element={<Profit />} />
                <Route path="/uzbcourse" element={<UzbCourse />} />
                <Route path="/novercourse" element={<NoverCourse />} />
            </Routes>
        </Router>
    );
}

export default Apx;
