import React from "react";
import FunctionalComponent from "./components/Print";

function OrderSubmit({
  commodityList,
  setCommodityList,
  setTotalPriceCommodities,
}) {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalsubmit"
        tabIndex="-1"
        aria-labelledby="exampleModalLabelsubmit"
        aria-hidden="true"
        style={{ borderRadius: "15px" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{ borderRadius: "25px", height: "20vh" }}
          >
            <div className="modal-header" style={{ border: "none" }}>
              <h1
                className="modal-title fs-5"
                id="exampleModalLabelsubmit"
              ></h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ backgroundColor: "grey" }}
              ></button>
            </div>
            <div className="modal-body">
              <h1 style={{ textAlign: "center", color: "#e57300" }}>
                Order Submitted
              </h1>
              {/* <FunctionalComponent commodityList={commodityList} /> */}
              {/* <button
                type="button"
                className="btn btn-success"
                style={{ textAlign: "center" }}
              >
                Print Receipt
              </button> */}
            </div>
            <div class="modal-footer fs-3" style={{ border: "none" }}>
              <FunctionalComponent commodityList={commodityList} />
              <button
                type="button"
                class="btn btn-secondary fs-2 "
                data-bs-dismiss="modal"
                style={{ backgroundColor: "white" }}
                onClick={() => {
                  setCommodityList([]);
                  setTotalPriceCommodities(0);
                }}
              >
                Close & Clear Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSubmit;
