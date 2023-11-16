/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
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

function POS() {
  // states
  const [showProductCards, setShowProductCards] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductCategory, setCurrentProductCategory] = useState({});
  const [productsList, setProductsList] = useState(dummyProductsList);
  const [productCategories, setProductCategories] =
    useState(dummyProductCategory);
  // const [pizzaList, setPizzaList] = useState([]);

  // modal hooks
  const [showModal, setShowModal] = useState(false);
  const [productClicked, setProductClicked] = useState("");

  // payment modal hook
  const [showPaymentModal, setShowPaymentModal] = useState(true);

  // commodity / newOrder Hook
  const [commodityList, setCommodityList] = useState([]);
  const [typeOfOrder, setTypeOfOrder] = useState("eatin");
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
      .get(`${apiUrl}/api/v1/productCategory?limit=100`)
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
  const handleProductCardClick = (subcategoryId) => {
    const [filteredProduct] = productsList.filter(
      (listEl) => listEl.productCategory === subcategoryId
    );
    const [filteredCategory] = productCategories.filter(
      (cat) => cat._id === subcategoryId
    );
    setCurrentProduct(filteredProduct);
    setCurrentProductCategory(filteredCategory);
    // console.log("currentProduct", filteredProduct);
    // console.log("currentCategory", filteredCategory);
  };

  // submit order funcntion
  const handleSubmitOrder = () => {
    const orderObj = {
      workerId: "654111bab8f20fc4157388f0",
      paymentType: "Cash",
      totalPrice: totalPriceCommodities,
      clientPay: 100,
      status: "pending",
      typeOfOrder: typeOfOrder,
      tax: tax,
      commodityList,
    };
    // console.log(orderObj);
    axios
      .post(`${apiUrl}/api/v1/order`, orderObj)
      .then((res) => console.log(res.data))
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
                  <a href="index-2.html">
                    <div className="logo-img">
                      <i
                        className="bi bi-x-diamond"
                        style={{ fontSize: "2.1rem" }}
                      />
                    </div>
                    <div className="logo-text">Dashboard</div>
                  </a>
                </div>
                <div className="nav-container">
                  <div
                    data-scrollbar="true"
                    data-height="100%"
                    data-skip-mobile="true"
                  >
                    <ul className="nav nav-tabs" id="menuNav">
                      {productCategories.map((cat) => {
                        return (
                          <NavList
                            key={cat._id}
                            category={cat}
                            setShowProductCards={setShowProductCards}
                            setCurrentProduct={setCurrentProduct}
                            handleProductCardClick={handleProductCardClick}
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
                    {showProductCards ? (
                      <ProductCard
                        currentProduct={currentProduct}
                        setProductClicked={setProductClicked}
                        setShowModal={setShowModal}
                      />
                    ) : null}
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
                          onClick={() => setTypeOfOrder("eatin")}
                          style={
                            typeOfOrder === "eatin"
                              ? {
                                borderRadius: "15px !important",
                                marginRight: "5px",
                                backgroundColor: "#e57c35",
                                color: "#fff",
                              }
                              : {
                                borderRadius: "15px !important",
                                marginRight: "5px",
                              }
                          }
                          className="btn active"
                        >
                          Eat In
                        </button>
                        <button
                          onClick={() => setTypeOfOrder("takeaway")}
                          style={
                            typeOfOrder === "takeaway"
                              ? {
                                borderRadius: "15px !important",
                                marginRight: "5px",
                                backgroundColor: "#e57c35",
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
                            href="#"
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
                            href="#"
                            data-bs-toggle="tab"
                            data-bs-target="#orderHistoryTab"
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
                          £{totalPriceCommodities}
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div style={{ color: "grey" }}>Taxes ({tax}%)</div>
                        <div
                          className="flex-1 text-end h6 mb-0"
                          style={{ color: "#e57c35" }}
                        >
                          £{(tax * totalPriceCommodities) / 100}
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
                          £{" "}
                          {totalPriceCommodities +
                            (tax * totalPriceCommodities) / 100}
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="btn-group d-flex">
                          <a
                            href="#"
                            className="btn btn-outline-default rounded-0 w-80px"
                          >
                            <i className="bi bi-bell fa-lg" />
                            <br />
                            <span className="small">Service</span>
                          </a>
                          <a
                            href="trybkwasprint.html"
                            className="btn btn-outline-default rounded-0 w-80px"
                          >
                            <i className="bi bi-receipt fa-fw fa-lg" />
                            <br />
                            <span className="small">Bill</span>
                          </a>
                          <a
                            href
                            className="btn btn-outline-theme rounded-0 w-150px submitOrder" data-bs-toggle="modal" data-bs-target="#exampleModalpayment"
                            id="showModalBtn"
                            onClick={() => {
                              setShowPaymentModal(true);
                              handleSubmitOrder();
                            }}
                          >
                            <i className="bi bi-send-check fa-lg" data-bs-toggle="modal" data-bs-target="#exampleModalpayment" />
                            <br />

                            <span className="small" data-bs-toggle="modal" data-bs-target="#exampleModalpayment">Submit Order</span>
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
            href="#"
            className="pos-mobile-sidebar-toggler"
            data-toggle-class="pos-mobile-sidebar-toggled"
            data-toggle-target="#pos"
          >
            <i className="bi bi-bag" />
            <span className="badge">5</span>
          </a>
        </div>
        <a href="#" data-toggle="scroll-to-top" className="btn-scroll-top fade">
          <i className="fa fa-arrow-up" />
        </a>
      </div>
      {showModal ? (
        <Modal
          currentProductCategory={currentProductCategory}
          currentProduct={currentProduct}
          productClicked={productClicked}
          setCommodityList={setCommodityList}
          setShowModal={setShowModal}
        />
      ) : null}
      {showPaymentModal ? (
        <PaymentModal />
      ) : null}
      <Loader showLoader={false} />
    </>
  );
}

export default POS;
