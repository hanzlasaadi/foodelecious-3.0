import React from "react";

function Option({ options, stepName, setStepsPrice }) {
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState([]);

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
      <div className="option">
        <input
          type="checkbox"
          value="add"
          className="option-input"
          checked={false}
        />
        <label className="option-label">
          <span className="option-text" style={{ color: "black" }}>
          <i class="bi bi-plus-lg " style={{fontSize:'20px',}}></i>          </span>
          

        </label>


      </div>
    </>
  );
}

function Step({ stepToChoose, setStepsPrice }) {
  return (
    <div className="mb-2">
      <div className="fw-bold" style={{ color: "black" }}>
        {stepToChoose.stepName}:
      </div>
      <div className="option-list">
        <Option
          options={stepToChoose.options}
          stepName={stepToChoose.stepName}
          setStepsPrice={setStepsPrice}
        />
        {/* <div className="option">
          <input
            type="radio"
            id="size3"
            name="size"
            value={"fuck"}
            className="option-input"
            defaultChecked=""
          />
          <label className="option-label" htmlFor="size3">
            <span className="option-text" style={{ color: "black" }}>
              Small
            </span>
            <span className="option-price" style={{ color: "darkgrey" }}>
              +0.00
            </span>
          </label>
        </div>
        <div className="option">
          <input type="radio" id="size1" name="size" className="option-input" />
          <label className="option-label" htmlFor="size1">
            <span className="option-text" style={{ color: "black" }}>
              Large
            </span>
            <span className="option-price" style={{ color: "darkgrey" }}>
              +3.00
            </span>
          </label>
        </div>
        <div className="option">
          <input type="radio" id="size2" name="size" className="option-input" />
          <label className="option-label" htmlFor="size2">
            <span className="option-text" style={{ color: "black" }}>
              Medium
            </span>
            <span className="option-price" style={{ color: "darkgrey" }}>
              +1.50
            </span>
          </label>
        </div> */}
      </div>
    </div>
  );
}

export default Step;
