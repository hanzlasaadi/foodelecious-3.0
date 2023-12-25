import MenuBar from "./../menu";
import Navbar from "./../navbar";
import StockNav from "./../components/StockNav";
// import Modal from "./components/Modal";
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { apiUrl } from "./../assets/utils/env";
import React, { useState } from "react";
import {
  dummyProductsList,
  dummyProductCategory,
} from "./../assets/utils/dummyData";
import ProductEdit from "./../components/ProductEdit";

function Step({ stepToChoose }) {
  return (
    <div className="mb-2">
      <div className="fw-bold" style={{ color: "black" }}>
        {stepToChoose.stepName}:
      </div>
      <div className="option-list">
        {stepToChoose.options.map((option, i) => {
          return (
            <div className="option">
              <div className="option-label">
                <input
                  value={option.type}
                  className="option-text"
                  style={{ color: "black" }}
                />
                <input
                  className="option-price"
                  style={{ color: "darkgrey" }}
                  value={option.price}
                />
              </div>
            </div>
          );
        })}
        <div className="option">
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
        </div>
      </div>
    </div>
  );
}

function EditCategoryModal({
  setShowEditCategoryModal,
  categoryList,
  currentCategory,
}) {
  const copyCurrentCategory = JSON.parse(JSON.stringify(currentCategory));
  const handleUpdateCategory = (e) => {
    console.log(e.currentTarget);
    setShowEditCategoryModal(false);
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
                onClick={() => setShowEditCategoryModal(false)}
                data-bs-dismiss="modal"
                className="btn-close position-absolute top-0 end-0 m-4"
                style={{ backgroundColor: "black", cursor: "pointer" }}
                // onClick={() => setShowModal(false)}
              >
                &nbsp;
              </a>
              <div className="modal-pos-product">
                <div className="modal-pos-product-info">
                  {/* <div
                    className="h4 mb-2"
                    id="modal-title"
                    style={{ color: "grey" }}
                  >
                    {currentCategory.name}
                  </div> */}
                  {/* <div className="text-white text-opacity-50 mb-2">
                    <p id="modal-description" style={{ color: "grey" }}>
                      description
                    </p>
                  </div> */}
                  {/* <div
                    id="modal-price"
                    className="h4 mb-3"
                    style={{ color: "#ff4a17" }}
                  >
                    69£
                  </div>
                  <div className="d-flex mb-3">
                    <a
                      className="btn btn-outline-theme"
                      // onClick={() => setUnits((u) => u - 1)}
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <input
                      type="text"
                      className="form-control w-50px fw-bold mx-2 bg-grey border-0 text-center"
                      name="qty"
                      // value={units}
                      // defaultValue={units}
                    />
                    <a
                      className="btn btn-outline-theme"
                      // onClick={() => setUnits((u) => u + 1)}
                    >
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <hr className="mx-n4" /> */}
                  <span id="modal-steps">
                    {copyCurrentCategory.stepsToChoose.map((step) => {
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
                        onClick={() => setShowEditCategoryModal(false)}
                      >
                        Cancel
                      </a>
                    </div>
                    <div className="col-8">
                      <a
                        href
                        id="addToCart"
                        className="btn btn-success d-flex justify-content-center align-items-center rounded-0 py-3 h4 m-0"
                        onClick={handleUpdateCategory}
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

function CategoryStock({ worker, setIsLoggedIn }) {
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
  const [currentCategory, setCurrentCategory] = useState({});
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
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

  React.useEffect(() => {
    // getProductsList();
    getSubcategoriesList();

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

  const handleUpdateCategory = (obj) => {
    // axios.
  };
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    // Reset the fields to their original values
    setEditMode(false);
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
                          Edit Categories
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
                    <div
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
                      {/* <button class="btn btn-dark text-white">Add New Products</button> */}
                    </div>
                  </div>

                  {/* <div>
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
                  </div> */}

                  {/* card for stock  */}
                  <div class="pos-content">
                    <div
                      class="pos-content-container h-100 p-3"
                      data-scrollbar="true"
                      data-height="100%"
                    >
                      <div class="row gx-3 ">
                        <div class="col-xl-12 col-lg-3 col-md-4 col-sm-6 pb-3 d-flex flex-wrap gap-4">
                          {categoryList.map((cat) => {
                            return (
                              <div
                                class="card "
                                style={{ width: "250px" }}
                                key={cat._id}
                              >
                                <div class="card-body p-1">
                                  <CategoryCard
                                    item={cat}
                                    handleUpdateProduct={handleUpdateCategory}
                                  />
                                </div>
                              </div>
                            );
                          })}

                          <div class=" card p-3" style={{ width: "250px" }}>
                            <div
                              class="card-body info p-1"
                              style={{ lineHeight: "2" }}
                            >
                              <div
                                className="w-100px"
                                style={{ color: "black" }}
                              >
                                Name:
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="new category name"
                                // value={itemName}
                                data-name
                                // onChange={(e) => setItemName(e.target.value)}
                              />

                              <p class="text-dark mb-2">Availability:</p>

                              <input
                                type="file"
                                class="form-control "
                                id="inputGroupFile04"
                                name="image"
                                aria-describedby="inputGroupFileAddon04"
                                aria-label="Upload"
                                style={{
                                  backgroundColor: "rgb(184, 184, 184)",
                                }}
                              />
                              <div class="d-flex">
                                <button class="btn btn-default bg-dark d-block">
                              
                                  <span style={{color:"white"}}>upload </span>
                                </button>
                              </div>

                              <div class="d-flex mt-5">
                                <button class="btn btn-default bg-dark d-block w-100">
                                  <i class="fa fa-plus fa-fw text-white"></i>{" "}
                                  <span style={{color:"white"}}> Add New Category </span>
                                </button>
                              </div>

                              {/* <div className="d-flex">
          {editMode ? (
            <>
              <button
                className="btn btn-success d-block"
                data-product={item._id}
                onClick={(e) => {
                  setEditMode(false);
                  handleUpdateProduct(item._id, {
                    itemName,
                    availability,
                  });
                }}
              >
                <i className="fa fa-check fa-fw text-white"></i>{" "}
                <span style={{ color: "white" }}> Update </span>
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn-default d-block"
                onClick={handleCancelClick}
              >
                <i className="fa fa-times fa-fw text-white"></i>{" "}
                <span style={{ color: "white" }}>Cancel </span>
              </button>
            </>
          ) : null}
        </div> */}
                            </div>
                          </div>
                        </div>
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
      {showEditCategoryModal ? (
        <EditCategoryModal
          setShowEditCategoryModal={setShowEditCategoryModal}
          categoryList={categoryList}
          currentCategory={currentCategory}
        />
      ) : null}
    </>
  );
}

function CategoryCard({ item, handleUpdateProduct }) {
  const [editMode, setEditMode] = useState(false);
  const [itemName, setItemName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [stock, setStock] = useState(item.stock);
  const [price, setPrice] = useState(item.price);
  const [availability, setAvailability] = useState(item.available);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    // Reset the fields to their original values
    setEditMode(false);
  };
  return (
    <div class="pos-product" data-item={item._id}>
      <div className="info" style={{ lineHeight: "2" }}>
        <div className="w-100px" style={{ color: "black" }}>
          Name:
        </div>
        <div
          className={`title text-truncate editable ${
            editMode ? "editable" : ""
          }`}
          onClick={handleEditClick}
        >
          {editMode ? (
            <input
              type="text"
              className="form-control"
              value={itemName}
              data-name
              onChange={(e) => setItemName(e.target.value)}
            />
          ) : (
            itemName
          )}
        </div>
        {/* <div className="w-100px" style={{ color: "black" }}>
          Description:
        </div>
        <div
          className={`desc text-truncate ${editMode ? "editable" : ""}`}
          onClick={handleEditClick}
        >
          {editMode ? (
            <input
              type="text"
              className="form-control"
              value={description}
              data-description
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (
            description
          )}
        </div> */}

        {/* <div className="d-flex align-items-center mb-3">
          <div className="w-100px" style={{ color: "black" }}>
            Price:
          </div>
          <div className={`flex-1 ${editMode ? "editable" : ""}`}>
            {editMode ? (
              <input
                type="text"
                className="form-control"
                placeholder="£"
                data-price
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            ) : (
              price
            )}
          </div>
        </div> */}

        {/* <div className="d-flex align-items-center mb-3">
          <div className="w-100px" style={{ color: "black" }}>
            Stock:
          </div>
          <div className={`flex-1 ${editMode ? "editable" : ""}`}>
            {editMode ? (
              <input
                type="text"
                className="form-control"
                data-stock
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            ) : (
              stock
            )}
          </div>
        </div> */}

        {/* <div>
          <button
            className="btn btn-success d-block"
          >
            <i className="fa fa-pencil fa-fw text-white"></i> <span style={{ color: 'white' }}> Edit Catogery </span>
          </button>
        </div> */}
        {/* <br></br> */}
        <div className="d-flex align-items-center mb-3">
          <div className="w-100px" style={{ color: "black" }}>
            Availability:
          </div>
          <div className={`flex-1 ${editMode ? "editable" : ""}`}>
            {editMode ? (
              <input
                type="checkbox"
                className="form-check-input"
                data-availability
                checked={availability}
                onChange={(e) => setAvailability(!availability)}
              />
            ) : availability ? (
              "Available"
            ) : (
              "Not Available"
            )}
          </div>
        </div>

        <div className="input-group py-3">
          <form
            action={`${apiUrl}/api/v1/productCategory/imageUpload`}
            method="POST"
          >
            <input
              type="file"
              className="form-control "
              id="inputGroupFile04"
              name="image"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              style={{ backgroundColor: "#b8b8b8" }}
            />
            <button
              className="btn bg-dark text-white"
              type="submit"
              id="inputGroupFileAddon04"
            >
              upload
            </button>
          </form>
        </div>

        <div className="d-flex">
          {editMode ? (
            <>
              <button
                className="btn btn-success d-block"
                data-product={item._id}
                onClick={(e) => {
                  setEditMode(false);
                  handleUpdateProduct(item._id, {
                    itemName,
                    availability,
                  });
                }}
              >
                <i className="fa fa-check fa-fw text-white"></i>{" "}
                <span style={{ color: "white" }}> Update </span>
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn-default d-block"
                onClick={handleCancelClick}
              >
                <i className="fa fa-times fa-fw text-white"></i>{" "}
                <span style={{ color: "white" }}>Cancel </span>
              </button>
            </>
          ) : null}
        </div>
        <div className="d-flex">
          {!editMode ? (
            <button
              className="btn btn-default bg-dark d-block w-100"
              onClick={handleEditClick}
            >
              <i className="fa fa-pencil fa-fw text-white"></i>{" "}
              <span style={{ color: "white" }}> Edit </span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CategoryStock;
