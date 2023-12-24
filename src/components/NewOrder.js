import React from "react";

function NewOrder({
  commodity,
  setCommodityList,
  commodityList,
  setShowEditModal,
  setClickedEditProduct,
  handleProductCardClick,
}) {
  const [showRemoveItem, setShowRemoveItem] = React.useState(false);
  const [editPrice, setEditPrice] = React.useState(false);
  const [updatedPrice, setUpdatedPrice] = React.useState(
    (Math.round(Number(commodity.productPrice) * 100) / 100) * commodity.unit
  );

  const updateCommodity = () => {
    try {
      if (!Number(updatedPrice)) throw new Error("Enter a Number!");

      const newCommodityList = commodityList.map((comm) => {
        if (comm.name === commodity.name) {
          commodity.productPrice = Number(updatedPrice);
          return commodity;
        }
        return comm;
      });

      setCommodityList(newCommodityList);
      setEditPrice(false);
    } catch (error) {
      console.log(error);
      alert(`Error Occured ${error.message || "Null"}`);
    }
  };

  return (
    <div className="pos-order">
      <div className="pos-order-product">
        <div className="flex-1">
          <div className="h6 mb-1" style={{ fontSize: "18px" }}>
            {commodity.name}
          </div>
          {/* <div className="small">£ {commodity.productPrice}</div> */}
          <div className="small mb-2">
            {commodity.options?.map((opt) => {
              if (opt.type == "no") return null;
              return (
                <div style={{ fontSize: "14px" }}>
                  <span style={{ color: "grey", fontSize: "14px" }}>
                    {" "}
                    {opt.shortName}: {opt.type}{" "}
                  </span>{" "}
                  - £{opt.price}
                </div>
              );
            })}
          </div>
          <div className="d-flex">
            {/* <a href="#/" className="btn btn-outline-theme btn-sm">
              <i className="fa fa-minus" />
            </a>
            <input
              type="text"
              className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 bg-white bg-opacity-25 text-center"
              readOnly
              defaultValue={1}
            />
            <a href="#/" className="btn btn-outline-theme btn-sm">
              <i className="fa fa-plus" />
            </a> */}
            <p style={{ fontSize: "14px", color: "black" }}>
              Qty(s){" "}
              <span style={{ color: "#e57300" }}>- {commodity.unit}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="pos-order-price d-flex flex-column">
        {editPrice ? (
          <input
            type="number"
            min={0}
            step={0.01}
            style={{ minWidth: "fit-content" }}
            value={`${updatedPrice}`}
            onChange={(e) => setUpdatedPrice(Number(e.target.value))}
          />
        ) : (
          <div style={{ fontWeight: "bold", fontSize: "18px" }}>
            £{updatedPrice}
          </div>
        )}
        {editPrice ? (
          <div className="mt-auto d-flex flex-column gap-2">
            <button
              onClick={(e) => {
                setEditPrice(false);
              }}
              data-product={commodity.name}
              className="btn btn-sm btn-outline-gray-500"
            >
              <i className="fa fa-window-close" />
            </button>
            <button
              className="btn btn-sm btn-outline-gray-500"
              onClick={updateCommodity}
            >
              <i className="fa fa-check-square" />
            </button>
          </div>
        ) : (
          <div className="mt-auto d-flex flex-column gap-2">
            <button
              onClick={(e) => {
                // handleProductCardClick(commodity.stepsId);
                // setClickedEditProduct(e.currentTarget.dataset.product);
                // setShowEditModal(true);
                setEditPrice(true);
              }}
              data-product={commodity.name}
              className="btn btn-sm btn-outline-gray-500"
              // data-bs-toggle="modal"
              // data-bs-target="#modalCartItem"
            >
              <i className="fa fa-pencil" />
            </button>
            <button
              className="btn btn-sm btn-outline-gray-500"
              onClick={() => setShowRemoveItem(true)}
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        )}
      </div>
      {showRemoveItem ? (
        <div className="pos-order-confirmation text-center d-flex flex-column justify-content-center">
          <div className="mb-1">
            <i className="bi bi-trash fs-36px lh-1" />
          </div>
          <div className="mb-2">Remove this item?</div>
          <div>
            <button
              onClick={() => setShowRemoveItem(false)}
              className="btn btn-outline-white btn-sm ms-auto me-2 width-100px"
            >
              No
            </button>
            <button
              onClick={() => {
                setShowRemoveItem(false);
                setCommodityList((comm) =>
                  comm.filter((el) => el.name !== commodity.name)
                );
              }}
              className="btn btn-outline-theme btn-sm width-100px"
            >
              Yes
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NewOrder;
