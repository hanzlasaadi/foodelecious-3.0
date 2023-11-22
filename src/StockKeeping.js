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

function Stockis() {
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

  React.useEffect(() => {
    getProductsList();

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
  };
  return (
    <div id="app" class="app">
      <Navbar />

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
                <div class="pos-header">
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
                  <div class="time" id="time">
                    {new Date().toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
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
                            // setProductClicked={setProductClicked}
                            // setShowModal={setShowModal}
                          />
                        ) : null}
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
  );
}

export default Stockis;
