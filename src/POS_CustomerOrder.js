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

function POS({ setOrderData, worker }) {
  const navigate = useNavigate();

  // states
  const [showProductCards, setShowProductCards] = useState(false);
  const [currentProducts, setCurrentProducts] = useState({});
  const [currentProductCategory, setCurrentProductCategory] = useState({});
  const [categoryId, setCategoryId] = useState("");
  const [productsList, setProductsList] = useState(dummyProductsList);
  const [stepsList, setStepsList] = useState([]);
  const [currentSteps, setCurrentSteps] = useState(null);
  const [productCategories, setProductCategories] =
    useState(dummyProductCategory);
  // const [pizzaList, setPizzaList] = useState([]);
  const [subcategoryClicked, setSubcategoryClicked] = useState({});
  const [activeNav, setActiveNav] = useState(null);

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

  // discount hooks
  const [tenderedDiscount, setTenderedDiscount] = React.useState(0.0);

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

    axios
      .get(`${apiUrl}/api/v1/step?limit=100`)
      .then((res) => {
        console.log("Steps List: ", res.data.data);
        setStepsList(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    setTotalPriceCommodities(
      commodityList
        .map((comm) => comm.productPrice * comm.unit)
        .reduce((prev, curr) => prev + curr, 0)
    );
  }, [commodityList]);

  // React.useEffect(() => {
  //   if (typeOfOrder === "eatin") setTax(20);
  //   if (typeOfOrder === "takeaway") setTax(0);
  // }, [typeOfOrder]);

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
    setActiveNav(subcategoryId);
    // console.log("currentProducts", filteredProducts);
    // console.log("currentCategory", filteredCategory);
  };

  // payment modal hooks
  const [tenderedAmount, setTenderedAmount] = React.useState(0);
  const [paymentType, setPaymentType] = React.useState("Cash");

  // submit order funcntion
  const handleSubmitOrder = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(typeOfOrder);
    // setShowLoader(true);
    const orderObj = {
      workerId: JSON.parse(localStorage.getItem("user"))._id || worker._id,
      paymentType: paymentType,
      totalPrice:
        Math.round((totalPriceCommodities - tenderedDiscount) * 100) / 100,
      clientPay:
        paymentType === "Card" ? totalPriceCommodities : tenderedAmount,
      status: "completed",
      typeOfOrder: typeOfOrder,
      tax: 20,
      isWaste: false,
      commodityList,
    };
    console.log(orderObj, "obj");
    axios
      .post(`${apiUrl}/api/v1/order`, orderObj, config)
      .then((res) => {
        console.log(res.data);
        setOrderData(res.data.data);
        // setCommodityList([]);
        // setTotalPriceCommodities(0);
        // setShowLoader(false);
      })
      .catch((err) => console.log("error=> ", err));
  };

  // handle product card click
  const handleProductCardClick = (stepIdClicked) => {
    const [filteredStep] = stepsList.filter(
      (step) => step._id === stepIdClicked
    );
    setCurrentSteps(filteredStep?.stepsToChoose);
    console.log(filteredStep);
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
                style={{
                  width: 350,
                  backgroundColor: "white",
                  borderRadius: 20,
                }}
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
                        style={{ fontSize: "2rem" }}
                      />
                    </div>
                    <div style={{ fontSize: "2rem" }} className="logo-text">
                      Dashboard
                    </div>
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
                            activeNav={activeNav}
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
                        height: 45,
                        width: 170,
                        marginTop: "-1%",
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
                              handleProductCardClick={handleProductCardClick}
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
                                  fontSize: "25px",
                                  fontWeight: "bolder",
                                  backgroundColor: "rgb(229, 124, 53)",
                                  color: "black",
                                }
                              : {
                                  borderRadius: "15px !important",
                                  marginRight: "5px",
                                }
                          }
                          className="btn active"
                        >
                          <span
                            style={
                              typeOfOrder === "takeaway"
                                ? {
                                    fontSize: "23px",
                                    fontWeight: "bolder",
                                    color: "white",
                                  }
                                : {
                                    fontSize: "23px",
                                    fontWeight: "bolder",
                                  }
                            }
                          >
                            Take Away
                          </span>
                        </button>

                        <button
                          onClick={() => setTypeOfOrder("eatin")}
                          style={
                            typeOfOrder === "eatin"
                              ? {
                                  borderRadius: "15px !important",
                                  marginRight: "5px",

                                  backgroundColor: "rgb(229, 124, 53)",
                                  color: "black",
                                }
                              : {
                                  borderRadius: "15px !important",
                                  marginRight: "5px",
                                }
                          }
                          className="btn"
                        >
                          <span
                            style={
                              typeOfOrder === "eatin"
                                ? {
                                    fontSize: "23px",
                                    fontWeight: "bolder",
                                    color: "white",
                                  }
                                : {
                                    fontSize: "23px",
                                    fontWeight: "bolder",
                                  }
                            }
                          >
                            {" "}
                            Eat In
                          </span>
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
                      {/* <div
                        className="order"
                        style={{
                          fontWeight: "bolder",
                          marginLeft: "3%",
                          color: "black",
                        }}
                      >
                        <b>Order: #0056</b>
                      </div> */}
                    </div>
                    <div className="pos-sidebar-nav">
                      <ul className="nav nav-tabs nav-fill">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href
                            data-bs-toggle="tab"
                            data-bs-target="#newOrderTab"
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "black",
                            }}
                          >
                            New Order
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              color: "black",
                            }}
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
                            commodityList={commodityList}
                            setShowEditModal={setShowEditModal}
                            setClickedEditProduct={setClickedEditProduct}
                            handleProductCardClick={handleProductCardClick}
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
                        <div
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "black",
                          }}
                        >
                          Subtotal
                        </div>
                        <div
                          className="flex-1 text-end h6 mb-0"
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "black",
                          }}
                          id="grandTotal"
                        >
                          £
                          {Math.round(
                            (totalPriceCommodities -
                              (tax * totalPriceCommodities) / 120) *
                              100
                          ) / 100}
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "black",
                          }}
                        >
                          Taxes (VAT)
                        </div>
                        <div
                          className="flex-1 text-end h6 mb-0"
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "black",
                          }}
                        >
                          {/* £{(tax * totalPriceCommodities) / 100} */}£
                          {Math.round(
                            ((tax * totalPriceCommodities) / 120) * 100
                          ) / 100}
                          {/* £{0} */}
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex align-items-center mb-2">
                        <div
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "black",
                          }}
                        >
                          Total
                        </div>
                        <div
                          className="flex-1 text-end h4 mb-0"
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "black",
                          }}
                          id="grandTotal2"
                        >
                          £
                          {/* {totalPriceCommodities + (tax * totalPriceCommodities) / 100} */}
                          {Math.round(
                            (totalPriceCommodities - tenderedDiscount) * 100
                          ) / 100}
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
                              <i
                                style={{ color: "darkred", fontSize: "30px" }}
                                className="bi bi-bell fa-lg"
                              />
                              <br />
                              <span
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "bolder",
                                  color: "black",
                                }}
                                className="small"
                              >
                                Service
                              </span>
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#overridePaymentModal"
                                >
                                  <span
                                    style={{ fontSize: "20px", color: "white" }}
                                  >
                                    {" "}
                                    Override
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#discountModal"
                                >
                                  <span
                                    style={{ fontSize: "20px", color: "white" }}
                                  >
                                    {" "}
                                    Discount
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#voucherModal"
                                >
                                  <span
                                    style={{ fontSize: "20px", color: "white" }}
                                  >
                                    Voucher
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#wasteOrderModal"
                                >
                                  <span
                                    style={{ fontSize: "20px", color: "white" }}
                                  >
                                    Waste{" "}
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>

                          <a
                            href
                            className="btn btn-outline-default rounded-0 w-80px"
                          >
                            <i
                              style={{ color: "darkred", fontSize: "30px" }}
                              className="bi bi-receipt fa-fw fa-lg"
                            />
                            <br />
                            <span
                              style={{
                                fontSize: "15px",
                                fontWeight: "bolder",
                                color: "black",
                              }}
                              className="small"
                            >
                              Bill
                            </span>
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
                              style={{ color: "darkred", fontSize: "30px" }}
                              className="bi bi-send-check fa-lg"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalpayment"
                            />
                            <br />

                            <span
                              style={{
                                fontSize: "15px",
                                fontWeight: "bolder",
                                color: "black",
                              }}
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
          stepsToChoose={currentSteps}
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
          stepsToChoose={currentSteps}
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
      {/* <Loader showLoader={false} /> */}
      <OrderSubmit
        commodityList={commodityList}
        setCommodityList={setCommodityList}
        setTotalPriceCommodities={setTotalPriceCommodities}
      />
      <Override />
      <DiscountModal
        tenderedDiscount={tenderedDiscount}
        setTenderedDiscount={setTenderedDiscount}
        totalPriceCommodities={totalPriceCommodities}
      />
      <VoucherModal />
      <WasteModal />
    </>
  );
}

export default POS;
