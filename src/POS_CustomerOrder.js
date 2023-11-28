/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "./assets/utils/env";
import React, { useState } from "react";
import {
  dummyProductsList,
  dummyProductCategory,
} from "./assets/utils/dummyData";

// Components
import NavList from "./components/NavList";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
import NewOrder from "./components/NewOrder";
import Loader from "./components/loader";
import PaymentModal from "./payment";
import EditModal from "./components/editModal";
import OrderSubmit from "./submit";
import Override from "./components/override";
import DiscountModal from "./components/discountModal";
import VoucherModal from "./components/voucherModal";
import WasteModal from "./components/wasteModal";

function POS({ setOrderData }) {
  const navigate = useNavigate();

  // states
  const [showProductCards, setShowProductCards] = useState(false);
  const [currentProducts, setCurrentProducts] = useState({});
  const [currentProductCategory, setCurrentProductCategory] = useState({});
  const [categoryId, setCategoryId] = useState("");
  const [productsList, setProductsList] = useState(dummyProductsList);
  const [productCategories, setProductCategories] =
    useState(dummyProductCategory);
  // const [pizzaList, setPizzaList] = useState([]);
  const [subcategoryClicked, setSubcategoryClicked] = useState({});

  // modal hooks
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [clickedEditProduct, setClickedEditProduct] = useState("");
  const [productClicked, setProductClicked] = useState("");

  // payment modal hook
  const [showPaymentModal, setShowPaymentModal] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  // commodity / newOrder Hook
  const [commodityList, setCommodityList] = useState([]);
  const [typeOfOrder, setTypeOfOrder] = useState("takeaway");
  const [tax, setTax] = useState(20);
  const [totalPriceCommodities, setTotalPriceCommodities] = useState(0);

  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/v1/product?limit=100`)
      .then((res) => {
        console.log("Products: ", res.data.data);
        setProductsList(res.data.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${apiUrl}/api/v1/productCategory?limit=100&sort=priority`)
      .then((res) => {
        console.log("Categories: ", res.data.data);
        setProductCategories(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    setTotalPriceCommodities(
      commodityList
        .map((comm) => comm.productPrice)
        .reduce((prev, curr) => prev + curr, 0)
    );
  }, [commodityList]);

  React.useEffect(() => {
    if (typeOfOrder === "eatin") setTax(20);
    if (typeOfOrder === "takeaway") setTax(0);
  }, [typeOfOrder]);

  // Product Card Click
  const handleNavItemClick = (subcategoryId) => {
    const filteredProducts = productsList.filter(
      (listEl) => listEl.productCategory === subcategoryId
    );
    const [filteredCategory] = productCategories.filter(
      (cat) => cat._id === subcategoryId
    );
    setCategoryId(subcategoryId);
    setCurrentProducts(filteredProducts);
    setCurrentProductCategory(filteredCategory);
    // console.log("currentProducts", filteredProducts);
    // console.log("currentCategory", filteredCategory);
  };

  // payment modal hooks
  const [tenderedAmount, setTenderedAmount] = React.useState(0);
  const [paymentType, setPaymentType] = React.useState("Cash");

  // submit order funcntion
  const handleSubmitOrder = () => {
    // setShowLoader(true);
    const orderObj = {
      workerId: "655e76863f5f31062ebd0c30",
      paymentType: paymentType,
      totalPrice: totalPriceCommodities,
      clientPay:
        paymentType === "Credit" ? totalPriceCommodities : tenderedAmount,
      status: "completed",
      typeOfOrder: typeOfOrder,
      tax: tax,
      commodityList,
    };
    console.log(orderObj, "obj");
    axios
      .post(`${apiUrl}/api/v1/order`, orderObj)
      .then((res) => {
        console.log(res.data);
        setOrderData(res.data.data);
        setCommodityList([]);
        setTotalPriceCommodities(0);
        // setShowLoader(false);
      })
      .catch((err) => console.log("error=> ", err));
  };

  return (
    <>
      <div
        id="app"
        className="app app-content-full-height app-without-sidebar app-without-header"
      >
        <div
          id="content"
          className="app-content p-1 ps-xl-4 pe-xl-4 pt-xl-3 pb-xl-3"
          style={{ color: "#ff4a17" }}
        >
          <div className="pos card " id="pos" style={{ border: "none" }}>
            <div className="pos-container card-body">
              <div
                className="pos-menu"
                style={{ backgroundColor: "white", borderRadius: 15 }}
              >
                <div className="logo">
                  <a
                    href
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="logo-img">
                      <i
                        className="bi bi-x-diamond"
                        style={{ fontSize: "2.1rem" }}
                      />
                    </div>
                    <div className="logo-text">Dashboard</div>
                  </a>
                </div>
                <div className="nav-container" style={{ overflow: "auto" }}>
                  <div
                    data-scrollbar="true"
                    data-height="100%"
                    data-skip-mobile="true"
                  >
                    <ul className="nav nav-tabs " id="menuNav">
                      {productCategories.map((cat) => {
                        return (
                          <NavList
                            key={cat._id}
                            category={cat}
                            setShowProductCards={setShowProductCards}
                            // setCurrentProduct={setCurrentProducts}
                            handleNavItemClick={handleNavItemClick}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pos-content">
                <div
                  className="pos-content-container h-100 p-4"
                  data-scrollbar="true"
                  data-height="100%"
                >
                  <div>
                    <img
                      src="../assets/img/pos/logo.png"
                      style={{
                        height: 30,
                        width: 130,
                        marginTop: "-5%",
                        marginLeft: "40%",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="row gx-4" id="productCardsContainer">
                    {showProductCards
                      ? currentProducts.map((currentProduct, i) => {
                          return (
                            <ProductCard
                              key={i}
                              currentProduct={currentProduct}
                              setProductClicked={setProductClicked}
                              setShowModal={setShowModal}
                              setSubcategoryClicked={setSubcategoryClicked}
                            />
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderRadius: "4%",
                  backgroundColor: "white",
                  boxShadow: "lightgrey 0px 0px 0px 0px",
                }}
              >
                <div className="pos-sidebar" id="pos-sidebar">
                  <div className="h-100 d-flex flex-column p-0">
                    <div className="pos-sidebar-header">
                      <div className="back-btn">
                        <button
                          type="button"
                          data-toggle-class="pos-mobile-sidebar-toggled"
                          data-toggle-target="#pos"
                          className="btn"
                        >
                          <i className="bi bi-chevron-left" />
                        </button>
                      </div>
                      <div className="icon">
                        <img src="../assets/img/pos/countryside.jpgg" alt="" />
                      </div>
                      <div className="">
                        <button
                          onClick={() => setTypeOfOrder("takeaway")}
                          style={
                            typeOfOrder === "takeaway"
                              ? {
                                  borderRadius: "15px !important",
                                  marginRight: "5px",
                                  backgroundColor: "#fa8c41",
                                  color: "#fff",
                                }
                              : {
                                  borderRadius: "15px !important",
                                  marginRight: "5px",
                                }
                          }
                          className="btn active"
                        >
                          Take Away
                        </button>

                        <button
                          onClick={() => setTypeOfOrder("eatin")}
                          style={
                            typeOfOrder === "eatin"
                              ? {
                                  borderRadius: "15px !important",
                                  marginRight: "5px",
                                  backgroundColor: "#fa8c41",
                                  color: "#fff",
                                }
                              : {
                                  borderRadius: "15px !important",
                                  marginRight: "5px",
                                }
                          }
                          className="btn active"
                        >
                          <span> Eat In</span>
                        </button>
                        {/* <button
                          style={{
                            borderRadius: "15px !important",
                            marginRight: "5px",
                          }}
                          className="btn"
                        >
                          Delivery
                        </button> */}
                      </div>
                      <div
                        className="order"
                        style={{ marginLeft: "3%", color: "black" }}
                      >
                        Order: <b>#0056</b>
                      </div>
                    </div>
                    <div className="pos-sidebar-nav">
                      <ul className="nav nav-tabs nav-fill">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href
                            data-bs-toggle="tab"
                            data-bs-target="#newOrderTab"
                            style={{ color: "grey" }}
                          >
                            New Order
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            style={{ color: "grey" }}
                            className="nav-link"
                            href
                            data-bs-toggle="tab"
                            // data-bs-target="#orderHistoryTab"
                            onClick={() => navigate("/SalesReport")}
                          >
                            Order History
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="pos-sidebar-body tab-content"
                      data-scrollbar="true"
                      data-height="100%"
                    >
                      <div
                        className="tab-pane fade h-100 show active"
                        id="newOrderTab"
                      >
                        {commodityList?.map((commodity, i) => (
                          <NewOrder
                            commodity={commodity}
                            setCommodityList={setCommodityList}
                            setShowEditModal={setShowEditModal}
                            setClickedEditProduct={setClickedEditProduct}
                            categoryId={categoryId}
                            key={i}
                          />
                        ))}
                      </div>
                      <div className="tab-pane fade h-100" id="orderHistoryTab">
                        <div className="h-100 d-flex align-items-center justify-content-center text-center p-20">
                          <div>
                            <div className="mb-3 mt-n5">
                              <svg
                                width="6em"
                                height="6em"
                                back=""
                                viewBox="0 0 16 16"
                                className="text-gray-300"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"
                                />
                                <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
                              </svg>
                            </div>
                            <h5 style={{ color: "grey" }}>
                              No order history found
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pos-sidebar-footer">
                      <div className="d-flex align-items-center mb-2">
                        <div style={{ color: "grey" }}>Subtotal</div>
                        <div
                          className="flex-1 text-end h6 mb-0"
                          style={{ color: "#e57c35" }}
                          id="grandTotal"
                        >
                          £
                          {Math.round(
                            (totalPriceCommodities -
                              (tax * totalPriceCommodities) / 100) *
                              100
                          ) / 100}
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div style={{ color: "grey" }}>Taxes ({tax}%)</div>
                        <div
                          className="flex-1 text-end h6 mb-0"
                          style={{ color: "#e57c35" }}
                        >
                          {/* £{(tax * totalPriceCommodities) / 100} */}£
                          {Math.round(
                            ((tax * totalPriceCommodities) / 100) * 100
                          ) / 100}
                          {/* £{0} */}
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex align-items-center mb-2">
                        <div style={{ color: "grey" }}>Total</div>
                        <div
                          className="flex-1 text-end h4 mb-0"
                          style={{ color: "#e57c35" }}
                          id="grandTotal2"
                        >
                          £
                          {/* {totalPriceCommodities + (tax * totalPriceCommodities) / 100} */}
                          {Math.round(totalPriceCommodities * 100) / 100}
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="btn-group d-flex">
                          <div className="dropdown">
                            <a
                              href
                              className="btn btn-outline-default rounded-0 w-80px dropdown-toggle"
                              data-bs-toggle="dropdown"
                            >
                              <i className="bi bi-bell fa-lg" />
                              <br />
                              <span className="small">Service</span>
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#overridePaymentModal"
                                >
                                  Override
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#discountModal"
                                >
                                  Discount
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#voucherModal"
                                >
                                  Voucher
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#wasteOrderModal"
                                >
                                  Waste
                                </a>
                              </li>
                            </ul>
                          </div>

                          <a
                            href
                            className="btn btn-outline-default rounded-0 w-80px"
                          >
                            <i className="bi bi-receipt fa-fw fa-lg" />
                            <br />
                            <span className="small">Bill</span>
                          </a>
                          <a
                            href
                            className="btn btn-outline-theme rounded-0 w-150px submitOrder"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalpayment"
                            id="showModalBtn"
                            onClick={() => {
                              setShowPaymentModal(true);
                            }}
                          >
                            <i
                              className="bi bi-send-check fa-lg"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalpayment"
                            />
                            <br />

                            <span
                              className="small"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalpayment"
                            >
                              Submit Order
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href
            className="pos-mobile-sidebar-toggler"
            data-toggle-class="pos-mobile-sidebar-toggled"
            data-toggle-target="#pos"
          >
            <i className="bi bi-bag" />
            <span className="badge">5</span>
          </a>
        </div>
        <a href data-toggle="scroll-to-top" className="btn-scroll-top fade">
          <i className="fa fa-arrow-up" />
        </a>
      </div>
      {showModal ? (
        <Modal
          currentProductCategory={currentProductCategory}
          currentProducts={currentProducts}
          productClicked={productClicked}
          subcategoryClicked={subcategoryClicked}
          setCommodityList={setCommodityList}
          setShowModal={setShowModal}
        />
      ) : null}
      {showEditModal ? (
        <EditModal
          commodityList={commodityList}
          setCommodityList={setCommodityList}
          setShowEditModal={setShowEditModal}
          clickedEditProduct={clickedEditProduct}
          productsList={productsList}
          categories={productCategories}
        />
      ) : null}
      {showPaymentModal ? (
        <PaymentModal
          totalPrice={totalPriceCommodities}
          handleSubmitOrder={handleSubmitOrder}
          tenderedAmount={tenderedAmount}
          setTenderedAmount={setTenderedAmount}
          paymentType={paymentType}
          setPaymentType={setPaymentType}
        />
      ) : null}
      <Loader showLoader={false} />
      <OrderSubmit />
      <Override />
      <DiscountModal />
      <VoucherModal />
      <WasteModal />
    </>
  );
}

export default POS;
