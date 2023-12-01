import React from "react";
import Step from "./options";

function Modal({
  currentProducts,
  currentProductCategory,
  productClicked,
  subcategoryClicked,
  setCommodityList,
  setShowModal,
  stepsToChoose,
}) {
  // React States
  const [stepsPrice, setStepsPrice] = React.useState(0);
  const [units, setUnits] = React.useState(1);

  console.log(currentProducts, "currP");
  console.log(currentProductCategory, "currC");
  console.log(productClicked, "product clicked");

  // const [filteredProduct] = currentProducts.filter((currProduct) =>
  //   currProduct.productsList.forEach((item) => item._id === productClicked)
  // );
  const [filteredProduct] = subcategoryClicked.productsList.filter(
    (item) => item._id === productClicked
  );
  console.log("filteredProduct", filteredProduct);

  const handleAddToCart = (e) => {
    e.preventDefault();
    let arrMain = [];
    let choosedOptions = [];
    document
      .querySelectorAll("input[type=checkbox]:checked")
      .forEach((inp) => arrMain.push(inp.id));
    stepsToChoose?.forEach((step) =>
      step.options.forEach((opt) => {
        if (arrMain.includes(opt._id)) {
          choosedOptions.push({
            stepName: step.stepName,
            shortName: step.shortName,
            type: opt.type,
            price: opt.price,
            selected: true,
            optId: opt._id,
          });
        }
      })
    );
    // console.log(choosedOptions);
    // console.log(filteredProduct);
    // console.log(stepsPrice);
    // console.log(currentProducts._id);

    const tempCommodity = {
      barcode: "testBarcode",
      name: filteredProduct.name,
      subCategory: subcategoryClicked._id,
      productPrice: stepsPrice,
      options: choosedOptions,
      unit: units,
    };
    if (filteredProduct.steps) tempCommodity.stepsId = filteredProduct.steps;

    // console.log(tempCommodity);
    setCommodityList((comm) => [...comm, tempCommodity]);
    setShowModal(false);
  };
  return (
    <div className="modal modal-pos fade" id="modalPosItem">
      <div className="modal-dialog modal-lg">
        <div
          className="modal-content border-0"
          style={{ backgroundColor: "white" }}
        >
          <div className="card">
            <div className="card-body p-0">
              <a
                href
                data-bs-dismiss="modal"
                className="btn-close position-absolute top-0 end-0 m-4"
                style={{ backgroundColor: "black", cursor: "pointer" }}
                onClick={() => setShowModal(false)}
              >
                &nbsp;
              </a>
              <div className="modal-pos-product">
                {/* <div class="modal-pos-product-img">
<div class="img" style="background-image: url(../assets/img/pos/product-1.html)"></div>
</div> */}
                <div className="modal-pos-product-info">
                  <div
                    className="h4 mb-2"
                    id="modal-title"
                    style={{ color: "grey" }}
                  >
                    {filteredProduct.name}
                  </div>
                  <div className="text-white text-opacity-50 mb-2">
                    <p id="modal-description" style={{ color: "grey" }}>
                      {filteredProduct.description}
                    </p>
                  </div>
                  <div
                    id="modal-price"
                    className="h4 mb-3"
                    style={{ color: "#ff4a17" }}
                  >
                    {(filteredProduct.price + stepsPrice) * units} £
                  </div>
                  <div className="d-flex mb-3">
                    <a
                      href
                      className="btn btn-outline-theme"
                      onClick={() => setUnits((u) => u - 1)}
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <input
                      type="text"
                      className="form-control w-50px fw-bold mx-2 bg-grey border-0 text-center"
                      name="qty"
                      value={units}
                      // defaultValue={units}
                    />
                    <a
                      href
                      className="btn btn-outline-theme"
                      onClick={() => setUnits((u) => u + 1)}
                    >
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <hr className="mx-n4" />
                  <span id="modal-steps">
                    {/* {filteredProduct.custom
                      ? currentProductCategory.stepsToChoose.map((step) => {
                          return filteredProduct.customType ===
                            step.customType ? (
                            <Step
                              stepToChoose={step} 
                              setStepsPrice={setStepsPrice}
                              key={step._id}
                            />
                          ) : null;
                        })
                      : null}
                    {currentProductCategory.stepsToChoose.map((step) => {
                      return !step.custom ? (
                        <Step
                          stepToChoose={step}
                          setStepsPrice={setStepsPrice}
                          key={step._id}
                        />
                      ) : null;
                    })} */}
                    {stepsToChoose?.map((step) => {
                      return (
                        <Step
                          stepToChoose={step}
                          setStepsPrice={setStepsPrice}
                          key={step._id}
                        />
                      );
                    })}
                    {/* <div className="mb-2">
                      <div className="fw-bold" style={{ color: "black" }}>
                        Size:
                      </div>
                      <div className="option-list">
                        <div className="option">
                          <input
                            type="radio"
                            id="size3"
                            name="size"
                            className="option-input"
                            defaultChecked=""
                          />
                          <label className="option-label" htmlFor="size3">
                            <span
                              className="option-text"
                              style={{ color: "black" }}
                            >
                              Small
                            </span>
                            <span
                              className="option-price"
                              style={{ color: "darkgrey" }}
                            >
                              +0.00
                            </span>
                          </label>
                        </div>
                        <div className="option">
                          <input
                            type="radio"
                            id="size1"
                            name="size"
                            className="option-input"
                          />
                          <label className="option-label" htmlFor="size1">
                            <span
                              className="option-text"
                              style={{ color: "black" }}
                            >
                              Large
                            </span>
                            <span
                              className="option-price"
                              style={{ color: "darkgrey" }}
                            >
                              +3.00
                            </span>
                          </label>
                        </div>
                        <div className="option">
                          <input
                            type="radio"
                            id="size2"
                            name="size"
                            className="option-input"
                          />
                          <label className="option-label" htmlFor="size2">
                            <span
                              className="option-text"
                              style={{ color: "black" }}
                            >
                              Medium
                            </span>
                            <span
                              className="option-price"
                              style={{ color: "darkgrey" }}
                            >
                              +1.50
                            </span>
                          </label>
                        </div>
                      </div>
                    </div> */}
                  </span>
                  <hr className="mx-n4" />
                  <div className="row">
                    <div className="col-4">
                      <a
                        href
                        className="btn btn-default h4 mb-0 d-block rounded-0 py-3"
                        data-bs-dismiss="modal"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </a>
                    </div>
                    <div className="col-8">
                      <a
                        href
                        id="addToCart"
                        className="btn btn-success d-flex justify-content-center align-items-center rounded-0 py-3 h4 m-0"
                        onClick={handleAddToCart}
                        data-bs-dismiss="modal"
                      >
                        Add to cart{" "}
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

export default Modal;
