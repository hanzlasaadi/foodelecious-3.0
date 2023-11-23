import axios from "axios";
import { useState } from "react";
import { apiUrl } from "../assets/utils/env";
import Loader from "./loader";

function Card({ item, handleUpdateProduct }) {
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
        <div className="w-100px" style={{ color: "black" }}>
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
        </div>

        <div className="d-flex align-items-center mb-3">
          <div className="w-100px" style={{ color: "black" }}>
            Price:
          </div>
          <div className={`flex-1 ${editMode ? "editable" : ""}`}>
            {editMode ? (
              <input
                type="text"
                className="form-control"
                data-price
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            ) : (
              price
            )}
          </div>
        </div>

        <div className="d-flex align-items-center mb-3">
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
        </div>
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
                    description,
                    price,
                    stock,
                    availability,
                  });
                }}
              >
                <i className="fa fa-check fa-fw text-white"></i> <span style={{color:'white'}}> Update </span>
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn-default d-block"
                onClick={handleCancelClick}
              >
                <i className="fa fa-times fa-fw text-white"></i> <span style={{color:'white'}}>Cancel </span> 
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
              <i className="fa fa-pencil fa-fw text-white"></i> <span style={{color:'white'}}> Edit </span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ProductEdit({ currentProduct, setCurrentProduct, refreshData }) {
  const [showLoader, setShowLoader] = useState(false);
  // const [currentSubcatData, setCurrentSubcatData] = useState(currentProduct);
  // console.log(currentProduct, "currProduct Test");
  const copySubcategory = JSON.parse(JSON.stringify(currentProduct));

  const handleUpdateProduct = (itemId, updateObj) => {
    setShowLoader(true);
    // Perform any update logic here
    console.log("update item: ", itemId);
    // const itemToBeUpdated = document.querySelector(`[data-item="${itemId}"]`);
    // console.log(itemToBeUpdated.querySelector("[data-name]"));
    copySubcategory.productsList = copySubcategory.productsList.map((p) => {
      if (p._id !== itemId) return p;
      return {
        name: updateObj.itemName,
        description: updateObj.description,
        price: updateObj.price,
        stock: updateObj.stock,
        available: updateObj.availability,
      };
    });
    console.log("final: ", copySubcategory);

    axios
      .patch(`${apiUrl}/api/v1/product/${copySubcategory._id}`, copySubcategory)
      .then((res) => {
        console.log(res.data.data);
        // setCurrentProduct(res.data.data);
        setShowLoader(false);
        refreshData();
        // window.location.reload();
        // handleEditNavClicked()
      })
      .catch((err) => {
        setShowLoader(false);
        console.log("error: ", err);
      });
  };

  return (
    <>
      <Loader showLoader={showLoader} />
      {copySubcategory?.productsList?.map((curr) => {
        return (
          <div class="card " style={{ width: "250px" }} key={curr._id}>
            <div class="card-body p-1">
              <Card item={curr} handleUpdateProduct={handleUpdateProduct} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductEdit;
