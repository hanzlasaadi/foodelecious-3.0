import React from "react";

function Option({
  options,
  stepName,
  setStepsPrice,
  checkedOpt = { optId: "" },
}) {
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState([]);

  React.useEffect(() => {
    if (checkedOpt.optId !== "")
      setSelectedCheckboxes((sel) => [...sel, checkedOpt.optId]);
  }, []);

  const handleCheckboxChange = (value, stepNm, optPrice) => {
    let max = 1;
    if (stepNm.toLowerCase().includes("any"))
      max = Number(stepNm.replace(/[^0-9]/g, ""));
    // Check if the checkbox is already selected
    if (selectedCheckboxes.includes(value)) {
      // If selected, remove it from the array
      setStepsPrice((stepsPrices) => stepsPrices - optPrice);
      setSelectedCheckboxes(
        selectedCheckboxes.filter((checkbox) => checkbox !== value)
      );
    } else {
      // If not selected, check if the maximum limit is reached
      if (selectedCheckboxes.length < max) {
        // If not reached, add the checkbox to the array
        setStepsPrice((stepsPrices) => stepsPrices + optPrice);
        setSelectedCheckboxes([...selectedCheckboxes, value]);
      }
    }
  };

  return (
    <>
      {options.map((option, i) => {
        return (
          <div className="option">
            <input
              type="checkbox"
              id={option._id}
              name={option.type}
              value={option._id}
              className="option-input"
              checked={selectedCheckboxes.includes(option._id)}
              onChange={() =>
                handleCheckboxChange(option._id, stepName, option.price)
              }
            />
            <label className="option-label" htmlFor={option._id}>
              <span className="option-text" style={{ color: "black" }}>
                {option.type}
              </span>
              <span className="option-price" style={{ color: "darkgrey" }}>
                +{option.price}£
              </span>
            </label>
          </div>
        );
      })}
    </>
  );
}

function Step({ stepToChoose, setStepsPrice, selectedOptions }) {
  const [checkedOpt] = selectedOptions.filter(
    (opt) => opt.stepName === stepToChoose.stepName
  );
  console.log(stepToChoose.stepName, checkedOpt);
  return (
    <div className="mb-2">
      <div className="fw-bold" style={{ color: "black" }}>
        {stepToChoose.stepName}:
      </div>
      <div className="option-list">
        {checkedOpt ? (
          <Option
            options={stepToChoose.options}
            stepName={stepToChoose.stepName}
            setStepsPrice={setStepsPrice}
            checkedOpt={checkedOpt}
          />
        ) : (
          <Option
            options={stepToChoose.options}
            stepName={stepToChoose.stepName}
            setStepsPrice={setStepsPrice}
          />
        )}
      </div>
    </div>
  );
}

function EditModal({
  commodityList,
  setCommodityList,
  setShowEditModal,
  clickedEditProduct,
  productsList,
  categories,
}) {
  const [clickedCommodity] = commodityList.filter(
    (comm) => comm.name === clickedEditProduct
  );
  // React States
  const [stepsPrice, setStepsPrice] = React.useState(
    clickedCommodity.productPrice
  );
  const [units, setUnits] = React.useState(clickedCommodity.unit);
  // console.log(commodityList, "commieList");
  // console.log(clickedEditProduct, "clickedName");

  const [filteredSubCategory] = productsList.filter(
    (el) => el._id === clickedCommodity.subCategory
  );

  const [filteredProduct] = filteredSubCategory.productsList.filter(
    (product) => product.name === clickedEditProduct
  );

  const [filteredCategory] = categories.filter(
    (cat) => cat._id === filteredSubCategory.productCategory
  );

  // console.log(clickedCommodity, "clickedCommies");
  // console.log(filteredSubCategory, "clickedsubcat");
  // console.log(filteredProduct, "clickedProductFiltered");
  // console.log(filteredCategory, "filteredMainCategory");

  const handleUpdateCart = (e) => {
    e.preventDefault();
    let arrMain = [];
    let choosedOptions = [];
    document
      .querySelectorAll("input[type=checkbox]:checked")
      .forEach((inp) => arrMain.push(inp.id));
    filteredCategory.stepsToChoose.forEach((step) =>
      step.options.forEach((opt) => {
        if (arrMain.includes(opt._id)) {
          choosedOptions.push({
            stepName: step.stepName,
            type: opt.type,
            price: opt.price,
            selected: true,
            optId: opt._id,
          });
        }
      })
    );

    const tempCommodity = {
      barcode: "testBarcode",
      name: filteredProduct.name,
      subCategory: filteredSubCategory._id,
      productPrice: stepsPrice,
      options: choosedOptions,
      unit: units,
    };
    const newCommodityList = commodityList.map((commie) => {
      if (commie.name !== clickedCommodity.name) return commie;
      return tempCommodity;
    });
    // console.log(newCommodityList);
    setCommodityList(newCommodityList);
    setShowEditModal(false);
  };
  return (
    <div className="modal modal-pos fade" id="modalCartItem">
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
                onClick={() => setShowEditModal(false)}
              >
                &nbsp;
              </a>
              <div className="modal-pos-product">
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
                    {(filteredProduct.price + stepsPrice)*units} £
                  </div>
                  <div className="d-flex mb-3">
                    <a
                      href="/#"
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
                    />
                    <a
                      href="/#"
                      className="btn btn-outline-theme"
                      onClick={() => setUnits((u) => u + 1)}
                    >
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <hr className="mx-n4" />
                  <span id="modal-steps">
                    {filteredProduct.custom
                      ? filteredCategory.stepsToChoose.map((step) => {
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
                    {filteredCategory.stepsToChoose.map((step) => {
                      return !step.custom ? (
                        <Step
                          stepToChoose={step}
                          setStepsPrice={setStepsPrice}
                          selectedOptions={clickedCommodity.options}
                          key={step._id}
                        />
                      ) : null;
                    })}
                  </span>
                  <hr className="mx-n4" />
                  <div className="row">
                    <div className="col-4">
                      <a
                        href
                        className="btn btn-default h4 mb-0 d-block rounded-0 py-3"
                        data-bs-dismiss="modal"
                        onClick={() => setShowEditModal(false)}
                      >
                        Cancel
                      </a>
                    </div>
                    <div className="col-8">
                      <a
                        href
                        id="addToCart"
                        className="btn btn-success d-flex justify-content-center align-items-center rounded-0 py-3 h4 m-0"
                        onClick={handleUpdateCart}
                        data-bs-dismiss="modal"
                      >
                        Update Order{" "}
                        <i className="bi bi-pencil fa-2x ms-2 my-n3" />
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

export default EditModal;
