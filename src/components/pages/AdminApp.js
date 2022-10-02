import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admin from "../Admin";
import CashFlow from "../CashFlow";
import Curers from "../Curers";
import Depts from "../Depts";
import NoverCourse from "../NoverCourse";
import Offers from "../Offers";
import OfferRequst from "../OffferRequest";
import Profit from "../Profit";
import Reports from "../Reports";
import Requests from "../Requests";
import SingleOffers from "../SingleOffer";
import SingleRequests from "../SingleRequest";
import UzbCourse from "../UzbCourse";

function AdminApp() {
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
                <Route path="/singleoffers" element={<SingleOffers />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/singlerequests" element={<SingleRequests />} />
                <Route path="/profit" element={<Profit />} />
                <Route path="/uzbcourse" element={<UzbCourse />} />
                <Route path="/novercourse" element={<NoverCourse />} />
            </Routes>
        </Router>
    );

}

export default AdminApp;
