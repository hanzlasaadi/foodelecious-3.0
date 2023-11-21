import MenuBar from "./menu";
import Navbar from "./navbar";
import NavList from "./components/NavList";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { apiUrl } from "./assets/utils/env";
import React, { useState } from "react";
import {
    dummyProductsList,
    dummyProductCategory,
} from "./assets/utils/dummyData";

function Stockis() {


    const [editMode, setEditMode] = useState(true);
    const [name, setName] = useState('id');
    const [description, setDescription] = useState('chicken, egg, mushroom, salad');
    const [stock, setStock] = useState(20);
    const [price, setPrice] = useState(9.66);

    const [availability, setAvailability] = useState(true);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleUpdateClick = () => {
        // Perform any update logic here
        setEditMode(false);
    };

    const handleCancelClick = () => {
        // Reset the fields to their original values
        setEditMode(false);
    };



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
    return (


        <div id="app" class="app" >

            <Navbar />


            <MenuBar />


            <button class="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>


            <div id="content" class="app-content">
                <div class="app app-content-full-height app-without-header app-without-sidebar ">
                    <div class="app-content p-1 ps-xl-4 pe-xl-4 pt-xl-3 pb-xl-3">
                        <div class="card pos pos-vertical" style={{ backgroundColor: 'white', border: 'none', }}>
                            <div class="card-body pos-container">
                                <div class="pos-header">
                                    <div class="logo"><a href="/hud-react/pos/counter-checkout">
                                        <div class="logo-img" style={{ color: 'black' }}><i class="bi bi-x-diamond" style={{ fontSize: "1.5rem;" }}></i></div>
                                        <div class="logo-text" style={{ color: 'black' }}>Stock</div>
                                    </a></div>
                                    <div class="time" id="time">7:57pm</div>
                                    <div class="nav" >
                                        <div class="nav-item" ><a class="nav-link" href="/hud-react/pos/kitchen-order"><i
                                            class="bi bi-bootstrap-reboot nav-icon"></i></a></div>
                                        <div class="nav-item"><a class="nav-link" href="/hud-react/pos/table-booking"><i
                                            class="bi bi-calendar-date nav-icon"></i></a></div>
                                        <div class="nav-item"><a class="nav-link" href="/hud-react/pos/menu-stock"><i
                                            class="bi bi-pie-chart nav-icon"></i></a></div>
                                    </div>
                                </div>

                                <div>
                                    <ul className="  d-flex flex-nowrap flex-row w-100 gap-2" style={{ overflow: "auto", listStyle: "none" }} id="menuNav">
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


                                {/* card for stock  */}
                                <div class="pos-content">
                                    <div class="pos-content-container h-100 p-3" data-scrollbar="true" data-height="100%">
                                        <div class="row gx-3 ">
                                            <div class="col-xl-12 col-lg-3 col-md-4 col-sm-6 pb-3 d-flex flex-wrap gap-4">
                                                <div class="card " style={{ width: '250px' }}>
                                                    <div class="card-body p-1" >
                                                        <div class="pos-product" >

                                                            <div className="info" style={{ lineHeight: '2' }} >

                                                                <div className="w-100px" style={{ color: 'black',}}>Name:</div>
                                                                <div className={`title text-truncate editable ${editMode ? 'editable' : ''}`} onClick={handleEditClick}>
                                                                    {editMode ? (
                                                                        <input style={{  color:'#e57c35' }}
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={name}
                                                                            onChange={(e) => setName(e.target.value)}
                                                                        />
                                                                    ) : (
                                                                        name
                                                                    )}
                                                                </div>
                                                                <div className="w-100px" style={{ color: 'black' }}>Description:</div>
                                                                <div className={`desc text-truncate ${editMode ? 'editable' : ''}`} onClick={handleEditClick}>
                                                                    {editMode ? (
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={description}
                                                                            onChange={(e) => setDescription(e.target.value)}
                                                                        />
                                                                    ) : (
                                                                        description
                                                                    )}
                                                                </div>


                                                                <div className="d-flex align-items-center mb-3">
                                                                    <div className="w-100px" style={{ color: 'black' }}>Price:</div>
                                                                    <div className={`flex-1 ${editMode ? 'editable' : ''}`}>
                                                                        {editMode ? (
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                value={price}
                                                                                onChange={(e) => setPrice(e.target.value)}
                                                                            />
                                                                        ) : (
                                                                            price
                                                                        )}
                                                                    </div>
                                                                </div>


                                                                <div className="d-flex align-items-center mb-3">
                                                                    <div className="w-100px" style={{ color: 'black' }}>Stock:</div>
                                                                    <div className={`flex-1 ${editMode ? 'editable' : ''}`}>
                                                                        {editMode ? (
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                value={stock}
                                                                                onChange={(e) => setStock(e.target.value)}
                                                                            />
                                                                        ) : (
                                                                            stock
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center mb-3">
                                                                    <div className="w-100px" style={{ color: 'black' }}>Availability:</div>
                                                                    <div className={`flex-1 ${editMode ? 'editable' : ''}`}>
                                                                        {editMode ? (
                                                                            <input
                                                                                type="checkbox"
                                                                                className="form-check-input"
                                                                                checked={availability}
                                                                                onChange={(e) => setAvailability(e.target.checked)}
                                                                            />
                                                                        ) : (
                                                                            availability ? 'Available' : 'Not Available'
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex">
                                                                    {editMode ? (
                                                                        <>
                                                                            <button className="btn btn-success d-block " onClick={handleUpdateClick}>
                                                                                <i className="fa fa-check fa-fw"></i> Update
                                                                            </button>&nbsp;&nbsp;
                                                                            <button className="btn btn-default d-block" onClick={handleCancelClick}>
                                                                                <i className="fa fa-times fa-fw"></i> Cancel
                                                                            </button>
                                                                        </>
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
                             </div>

                        </div>
                    </div>

                </div>
            </div>


            <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>




        </div>

    );
}

export default Stockis;
