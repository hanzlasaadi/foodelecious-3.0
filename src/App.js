import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
// import Modal from "./Modal";
import Login from "./Login";
import Register from "./register";
import POS from "./POS_CustomerOrder";
import SalesReport from "./sales";
import ProductReport from "./productSales";
import "./app.min.css";
import Stockis from "./StockKeeping";
import PaymentModal from "./payment";
import OrderList from "./order";
import ReceiptBill from "./receipt";
import OrderSubmit from "./submit";
import HomePage from "./home";
import CatogeryEdit from "./catogery";
import Error404 from "./404";
import Setting from "./setting";
import ProfileModal from "./components/profileModal";
import Calendar from "./components/calender";
import Override from "./components/override";
import DiscountModal from "./components/discountModal";
import VoucherModal from "./components/voucherModal";
import WasteModal from "./components/wasteModal";
// import Receipt from "./billpay";

import React from "react";
function App() {
  const [orderData, setOrderData] = React.useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/POS" element={<POS setOrderData={setOrderData} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/SalesReport" element={<SalesReport />} />
        <Route path="/ProductReport" element={<ProductReport />} />
        <Route path="/Stockis" element={<Stockis />} />
        <Route path="/PaymentModal" element={<PaymentModal />} />
        <Route path="/OrderList" element={<OrderList />} />
        <Route path="/OrderSubmit" element={<OrderSubmit />} />
        <Route path="/CatogeryEdit" element={<CatogeryEdit />} />
        <Route path="/Error404" element={<Error404 />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/ProfileModal" element={<ProfileModal />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Override" element={<Override />} />
        <Route path="/DiscountModal" element={<DiscountModal />} />
        <Route path="/VoucherModal" element={<VoucherModal />} />
        <Route path="/WasteModal" element={<WasteModal />} />





        





        {/* <Route path="/Receipt" element={<Receipt />} /> */}










        <Route
          path="/ReceiptBill"
          element={<ReceiptBill orderData={orderData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
