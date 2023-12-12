import MenuBar from "./menu";
import Navbar from "./navbar";
import StockNav from "./components/StockNav";
import axios from "axios";
import { apiUrl } from "./assets/utils/env";
import React, { useState } from "react";
import {
  dummyProductsList,
  dummyProductCategory,
} from "./assets/utils/dummyData";
import ProductEdit from "./components/ProductEdit";

function CatogeryEdit() {
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

  // Product Card Click
  const handleEditNavClicked = (subcategoryId) => {
    const [filteredProduct] = productsList.filter(
      (listEl) => listEl._id === subcategoryId
    );

    setCurrentProduct(filteredProduct);
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
                <div
                  class="pos-header"
                  style={{ justifyContent: "space-between" }}
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
                        Stock
                      </div>
                    </a>
                  </div>

                  <div class="" style={{ color: "#000" }} id="save">
                    <button className="btn btn-light">Save</button>
                  </div>
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
                        <div class="card h-100">
                          <div class="card-body h-100 p-1">
                            <div class="pos-product">
                              <div class="info">
                                <div class="title text-truncate">
                                  Grill Chicken Chop®
                                </div>
                                <div class="desc text-truncate">
                                  chicken, egg, mushroom, salad
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                  <div class="w-100px">Stock:</div>
                                  <div class="flex-1">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="20"
                                    />
                                  </div>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                  <div class="w-100px">Availability:</div>
                                  <div class="flex-1">
                                    <div class="form-check form-switch">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        name="qty"
                                        id="product1"
                                        value="1"
                                        checked=""
                                      />
                                      <label
                                        class="form-check-label"
                                        for="product1"
                                      ></label>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <a
                                    href="#/"
                                    class="btn btn-success d-block mb-2"
                                  >
                                    <i class="fa fa-check fa-fw"></i> Update
                                  </a>
                                  <a href="#/" class="btn btn-default d-block">
                                    <i class="fa fa-times fa-fw"></i> Cancel
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

export default CatogeryEdit;
