import { useState } from "react";

function ProductEdit({ currentProduct, setShowModal, setProductClicked }) {
  console.log(currentProduct, "currProduct Test");
  const [editMode, setEditMode] = useState(true);
  const [name, setName] = useState("id");
  const [description, setDescription] = useState(
    "chicken, egg, mushroom, salad"
  );
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
  return (
    <>
      {currentProduct?.productsList?.map((curr) => {
        return (
          <div class="card " style={{ width: "250px" }}>
            <div class="card-body p-1">
              <div class="pos-product">
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
                        value={curr.name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    ) : (
                      curr.name
                    )}
                  </div>
                  <div className="w-100px" style={{ color: "black" }}>
                    Description:
                  </div>
                  <div
                    className={`desc text-truncate ${
                      editMode ? "editable" : ""
                    }`}
                    onClick={handleEditClick}
                  >
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={curr.description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    ) : (
                      curr.description
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
                          value={curr.price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      ) : (
                        curr.price
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
                          value={curr.stock}
                          onChange={(e) => setStock(e.target.value)}
                        />
                      ) : (
                        curr.stock
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
                          checked={availability}
                          onChange={(e) => setAvailability(e.target.checked)}
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
                          className="btn btn-success d-block "
                          onClick={handleUpdateClick}
                        >
                          <i className="fa fa-check fa-fw"></i> Update
                        </button>
                        &nbsp;&nbsp;
                        <button
                          className="btn btn-default d-block"
                          onClick={handleCancelClick}
                        >
                          <i className="fa fa-times fa-fw"></i> Cancel
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductEdit;
