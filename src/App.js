import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import axios from "axios";
import { apiUrl } from "./assets/utils/env";

function App() {
  const [orderData, setOrderData] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [worker, setWorker] = React.useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`${apiUrl}/api/v1/users/verifyToken`, config)
      .then((res) => {
        console.log(res.data);
        setIsLoggedIn(true);
        // setToken(token);
        setWorker(res.data.data);
      })
      .catch((err) => {
        console.log("error: ", err);
        setIsLoggedIn(false);
        // setWorker(null);
        // setToken("");
      });
  }, [isLoggedIn]);

  // getting item from localstorage
  const parsedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Login"
          element={
            <Login setIsLoggedIn={setIsLoggedIn} setWorker={setWorker} />
          }
        />
        <Route
          path="/POS"
          element={
            isLoggedIn ? (
              <POS setOrderData={setOrderData} worker={worker} />
            ) : (
              <Error404 />
            )
          }
        />
        <Route
          path="/Register"
          element={
            isLoggedIn && ["admin"].includes(parsedUser?.role) ? (
              <Register />
            ) : (
              <Error404 />
            )
          }
        />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <HomePage worker={worker} setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Error404 />
            )
          }
        />
        <Route
          path="/SalesReport"
          element={
            isLoggedIn && ["admin", "workerVIP"].includes(parsedUser?.role) ? (
              <SalesReport worker={worker} setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Error404 />
            )
          }
        />
        <Route
          path="/ProductReport"
          element={
            isLoggedIn && ["admin", "workerVIP"].includes(parsedUser?.role) ? (
              <ProductReport />
            ) : (
              <Error404 />
            )
          }
        />
        <Route
          path="/Stockis"
          element={
            isLoggedIn && ["admin", "workerVIP"].includes(parsedUser?.role) ? (
              <Stockis worker={worker} />
            ) : (
              <Error404 />
            )
          }
        />
        <Route
          path="/Setting"
          element={
            isLoggedIn ? (
              <Setting worker={worker} setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Error404 />
            )
          }
        />
        <Route path="/ProfileModal" element={<ProfileModal />} />
        <Route path="/PaymentModal" element={<PaymentModal />} />
        <Route path="/OrderList" element={<OrderList />} />
        <Route path="/OrderSubmit" element={<OrderSubmit />} />
        <Route path="/CatogeryEdit" element={<CatogeryEdit />} />
        <Route path="/Error404" element={<Error404 />} />
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
