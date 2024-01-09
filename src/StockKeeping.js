import MenuBar from "./menu";
import Navbar from "./navbar";
import StockNav from "./components/StockNav";
// import Modal from "./components/Modal";
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { apiUrl } from "./assets/utils/env";
import React, { useState } from "react";
import {
  dummyProductsList,
  dummyProductCategory,
} from "./assets/utils/dummyData";
import ProductEdit from "./components/ProductEdit";

function Option({ option }) {
  const [optionType, setOptionType] = useState(option.type);
  const [optionPrice, setOptionPrice] = useState(option.price);

  return (
    <div
      className="option unique-option-element"
      data-option={option._id}
      data-type={optionType}
      data-price={optionPrice}
    >
      <div className="option-label">
        <input
          value={optionType}
          onChange={(e) => setOptionType(e.target.value)}
          className="option-text p-1  col-lg-5 "
          style={{ color: "black", fontSize: 14, marginLeft: -88 }}
        />

        <input
          className="option-text  p-1 col-lg-3"
          style={{
            color: "black",
            fontSize: 14,
            marginTop: -25,
            marginLeft: 121,
          }}
          value={optionPrice}
          onChange={(e) => setOptionPrice(e.target.value)}
        />
      </div>
    </div>
  );
}

function Step({ stepToChoose }) {
  return (
    <div className="mb-2">
      <div className="fw-bold" style={{ color: "black" }}>
        {stepToChoose.stepName}:
      </div>
      <div className="option-list col-lg-12">
        {stepToChoose.options.map((option, i) => {
          return <Option option={option} />;
        })}
        {/* <div className="option">
          <input
            type="checkbox"
            value="add"
            className="option-input"
            checked={false}
          />
          <label className="option-label">
            <span className="option-text" style={{ color: "black" }}>
              <i class="bi bi-plus-lg " style={{ fontSize: "20px" }}></i>{" "}
            </span>
          </label>
        </div> */}
      </div>
    </div>
  );
}

function EditCategoryModal({
  // setShowEditCategoryModal,
  // categoryList,
  // currentCategory,
  currentStep,
}) {
  const handleUpdateOptions = (e) => {
    // console.log(currentStep);
    const allInputs = Array.from(
      document.querySelectorAll(".unique-option-element")
    ).map((p) => {
      return {
        option: p.dataset.option,
        price: p.dataset.price,
        type: p.dataset.type,
      };
    });

    const modifiedStep = currentStep.stepsToChoose?.map(
      ({ _id, stepName, shortName, options }) => {
        return {
          _id,
          stepName,
          shortName,
          options: options.map((opt) => {
            const [filteredInput] = allInputs.filter(
              (inp) => inp.option === opt._id
            );
            return {
              _id: opt._id,
              image: opt.image,
              price: Number(filteredInput.price),
              type: filteredInput.type,
            };
          }),
        };
      }
    );

    // console.log("currentStep: ", currentStep);
    // console.log("modifiedStep: ", modifiedStep);

    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .patch(
        `${apiUrl}/api/v1/step/${currentStep._id}`,
        { stepsToChoose: modifiedStep },
        config
      )
      .then((res) => {
        alert("successfully updated step!");
        console.log(res.data);
      })
      .catch((err) => {
        alert("Error occurred!");
        console.log("error updating step: ", err);
      });
  };
  return (
    <div className="modal modal-pos fade" id="modalEditCategory">
      <div className="modal-dialog modal-lg">
        <div
          className="modal-content border-0"
          style={{ backgroundColor: "white" }}
        >
          <div className="card">
            <div className="card-body p-0">
              <a
                href
                // onClick={() => setShowEditCategoryModal(false)}
                data-bs-dismiss="modal"
                className="btn-close position-absolute top-0 end-0 m-4"
                style={{ backgroundColor: "black", cursor: "pointer" }}
                // onClick={() => setShowModal(false)}
              >
                &nbsp;
              </a>
              <div className="modal-pos-product">
                <div className="modal-pos-product-info">
                  <span id="modal-steps">
                    {currentStep?.stepsToChoose?.map((step) => {
                      return <Step stepToChoose={step} key={step._id} />;
                    })}
                  </span>
                  <hr className="mx-n4" />
                  <div className="row">
                    <div className="col-4">
                      <a
                        href
                        className="btn btn-default h4 mb-0 d-block rounded-0 py-3"
                        data-bs-dismiss="modal"
                        // onClick={() => setShowEditCategoryModal(false)}
                      >
                        Cancel
                      </a>
                    </div>
                    <div className="col-8">
                      <a
                        href
                        id="addToCart"
                        className="btn btn-success d-flex justify-content-center align-items-center rounded-0 py-3 h4 m-0"
                        onClick={handleUpdateOptions}
                        data-bs-dismiss="modal"
                      >
                        Update Category{" "}
                        <i className="bi bi-plus fa-2x ms-2 my-n3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stockis({ worker, setIsLoggedIn }) {
  //   const [editMode, setEditMode] = useState(true);
  //   const [name, setName] = useState("id");
  //   const [description, setDescription] = useState(
  //     "chicken, egg, mushroom, salad"
  //   );
  //   const [stock, setStock] = useState(20);
  //   const [price, setPrice] = useState(9.66);

  //   const [availability, setAvailability] = useState(true);

  //   const handleEditClick = () => {
  //     setEditMode(true);
  //   };

  //   const handleUpdateClick = () => {
  //     // Perform any update logic here
  //     setEditMode(false);
  //   };

  //   const handleCancelClick = () => {
  //     // Reset the fields to their original values
  //     setEditMode(false);
  //   };

  // states
  const [showProductCards, setShowProductCards] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  // const [currentProductCategory, setCurrentProductCategory] = useState({});
  const [productsList, setProductsList] = useState(dummyProductsList);
  const [categoryList, setCategoryList] = useState(dummyProductCategory);
  const [stepsList, setStepsList] = useState([]);
  const [currentStep, setCurrentStep] = useState(null);
  const [currentCategory, setCurrentCategory] = useState({});
  // const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [showEditCategoryButton, setShowEditCategoryButton] = useState(false);
  // const [productCategories, setProductCategories] =
  //   useState(dummyProductCategory);
  // const [pizzaList, setPizzaList] = useState([]);

  // modal hooks
  // const [showModal, setShowModal] = useState(false);
  // const [productClicked, setProductClicked] = useState("");

  function getProductsList() {
    axios
      .get(`${apiUrl}/api/v1/product?limit=100`)
      .then((res) => {
        console.log("Products: ", res.data.data);
        setProductsList(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  function getSubcategoriesList() {
    axios
      .get(`${apiUrl}/api/v1/productCategory?limit=100`)
      .then((res) => {
        console.log("Products: ", res.data.data);
        setCategoryList(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  function getStepsList() {
    axios
      .get(`${apiUrl}/api/v1/step?limit=500`)
      .then((res) => {
        console.log("Steps: ", res.data.data);
        setStepsList(res.data.data);
      })
      .catch((err) => {
        console.log("getting steps error: ", err);
      });
  }

  React.useEffect(() => {
    getProductsList();
    getSubcategoriesList();
    getStepsList();

    // axios
    //   .get(`${apiUrl}/api/v1/productCategory?limit=100`)
    //   .then((res) => {
    //     console.log("Categories: ", res.data.data);
    //     setProductCategories(res.data.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  // Product Card Click
  const handleEditNavClicked = (subcategoryId) => {
    const [filteredProduct] = productsList.filter(
      (listEl) => listEl._id === subcategoryId
    );
    // const [filteredCategory] = productCategories.filter(
    //   (cat) => cat._id === subcategoryId
    // );
    setCurrentProduct(filteredProduct);
    // setCurrentProductCategory(filteredCategory);
    // console.log("currentProduct", filteredProduct);
    // console.log("currentCategory", filteredCategory);

    // categories
    const [filteredCategory] = categoryList.filter(
      (cat) => cat._id === filteredProduct.productCategory
    );
    setCurrentCategory(filteredCategory);
    setShowEditCategoryButton(true);
  };

  const handleEditSteps = (stepsId) => {
    const [filteredStep] = stepsList?.filter((st) => st._id === stepsId);

    if (filteredStep) setCurrentStep(filteredStep);
    else setCurrentStep(null);
  };

  return (
    <>
      <div id="app" class="app">
        <Navbar worker={worker} setIsLoggedIn={setIsLoggedIn} />

        <MenuBar />

        <button
          class="app-sidebar-mobile-backdrop"
          data-toggle-target=".app"
          data-toggle-class="app-sidebar-mobile-toggled"
        ></button>

        <div id="content" class="app-content">
          <div class="app app-content-full-height app-without-header app-without-sidebar ">
            <div class="app-content p-1 ps-xl-4 pe-xl-4 pt-xl-3 pb-xl-3">
              <div
                class="card pos pos-vertical"
                style={{ backgroundColor: "white", border: "none" }}
              >
                <div class="card-body pos-container">
                  <div
                    class="pos-header"
                    style={{ justifyContent: "space-between " }}
                  >
                    <div class="logo">
                      <a href="/hud-react/pos/counter-checkout">
                        <div class="logo-img" style={{ color: "black" }}>
                          <i
                            class="bi bi-x-diamond"
                            style={{ fontSize: "1.5rem;" }}
                          ></i>
                        </div>
                        <div class="logo-text" style={{ color: "black" }}>
                          Edit Products
                        </div>
                      </a>
                    </div>

                    {/* <div class="time" style={{ color: "#000" }} id="save">
                    <button className="btn btn-light">Save</button>
                  </div> */}
                    {/* <div class="nav">
                    <div class="nav-item">
                      <a class="nav-link" href="/hud-react/pos/kitchen-order">
                        <i class="bi bi-bootstrap-reboot nav-icon"></i>
                      </a>
                    </div>
                    <div class="nav-item">
                      <a class="nav-link" href="/hud-react/pos/table-booking">
                        <i class="bi bi-calendar-date nav-icon"></i>
                      </a>
                    </div>
                    <div class="nav-item">
                      <a class="nav-link" href="/hud-react/pos/menu-stock">
                        <i class="bi bi-pie-chart nav-icon"></i>
                      </a>
                    </div>
                  </div> */}
                    {/* <div
                      class="d-flex justify-content-right gap-4"
                      style={{ color: "black" }}
                    >
                      {showEditCategoryButton ? (
                        <button
                          className="btn btn-success d-block"
                          onClick={() => setShowEditCategoryModal(true)}
                          data-bs-toggle="modal"
                          data-bs-target="#modalEditCategory"
                        >
                          <i className="fa fa-pencil fa-fw text-white"></i>{" "}
                          <span style={{ color: "white" }}>
                            {" "}
                            Edit this category{" "}
                          </span>
                        </button>
                      ) : null}
                    </div> */}
                  </div>

                  <div>
                    <ul
                      className="  d-flex flex-nowrap flex-row w-100 gap-2"
                      style={{ overflow: "auto", listStyle: "none" }}
                      id="menuNav"
                    >
                      {productsList.map((cat) => {
                        return (
                          <StockNav
                            key={cat._id}
                            subCategory={cat}
                            setShowProductCards={setShowProductCards}
                            setCurrentProduct={setCurrentProduct}
                            setSubcatClicked={handleEditNavClicked}
                          />
                        );
                      })}
                    </ul>
                  </div>

                  {/* card for stock  */}
                  <div class="pos-content">
                    <div
                      class="pos-content-container h-100 p-3"
                      data-scrollbar="true"
                      data-height="100%"
                    >
                      <div class="row gx-3 ">
                        <div class="col-xl-12 col-lg-3 col-md-4 col-sm-6 pb-3 d-flex flex-wrap gap-4">
                          {showProductCards ? (
                            <ProductEdit
                              currentProduct={currentProduct}
                              setCurrentProduct={setCurrentProduct}
                              refreshData={getProductsList}
                              handleEditSteps={handleEditSteps}
                              // setProductClicked={setProductClicked}
                              // setShowModal={setShowModal}
                            />
                          ) : null}
                        </div>

                        {/* add new product card  */}
                        {/* <div
                          class=" card mt-3 p-3 mb-3"
                          style={{ width: "250px" }}
                        >
                          <div
                            class="card-body info p-1"
                            style={{ lineHeight: "2" }}
                          >
                            <div className="w-100px" style={{ color: "black" }}>
                              Name:
                            </div>

                            <input
                              type="text"
                              className="form-control"
                              placeholder="new product name"
                              data-name
                            />

                            <div className="w-100px" style={{ color: "black" }}>
                              Description:
                            </div>

                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter description"
                              data-name
                            />

                            <div
                              className="w-100px mt-3"
                              style={{ color: "black" }}
                            >
                              Price:
                              <span>
                                <input
                                  style={{ marginTop: -24, marginLeft: 116 }}
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  data-name
                                />
                              </span>
                            </div>

                            <div
                              className="w-100px mt-3"
                              style={{ color: "black" }}
                            >
                              Stock:
                              <span>
                                <input
                                  style={{ marginTop: -24, marginLeft: 116 }}
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  data-name
                                />
                              </span>
                            </div>

                            <p class="text-dark mt-3 mb-2">Availability:</p>

                            <div class="input-group py-3">
                              <input
                                type="file"
                                class="form-control "
                                id="inputGroupFile04"
                                aria-describedby="inputGroupFileAddon04"
                                aria-label="Upload"
                                style={{
                                  backgroundColor: "rgb(184, 184, 184)",
                                }}
                              />
                              <button
                                class="btn bg-dark text-white"
                                type="button"
                                id="inputGroupFileAddon04"
                              >
                                upload
                              </button>
                            </div>

                            <div class="d-flex">
                              <button class="btn btn-default bg-dark d-block w-100">
                                <i class="fa fa-plus fa-fw text-white"></i>{" "}
                                <span style={{ color: "white" }}>
                                  {" "}
                                  Add New Product{" "}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade">
          <i class="fa fa-arrow-up"></i>
        </a>
      </div>
      {/* {showEditCategoryModal ? ( */}
      <EditCategoryModal
        // setShowEditCategoryModal={setShowEditCategoryModal}
        categoryList={categoryList}
        currentCategory={currentCategory}
        currentStep={currentStep}
      />
      {/* ) : null} */}
    </>
  );
}

export default Stockis;
