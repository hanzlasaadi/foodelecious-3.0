import React from "react";

function PaymentModal({
  totalPrice,
  handleSubmitOrder,
  tenderedAmount,
  setTenderedAmount,
  paymentType,
  setPaymentType,
}) {
  const pin_code = "your_pin_code";
  const link = "your_link";
  let num_pos = 0;

  const calculateChange = () => {
    // Your implementation for calculateChange function
    console.log("Calculating change...");
  };

  function press(command) {
    switch (command) {
      case "E":
        document.querySelectorAll("#display li").forEach(function (v) {
          pin_code += v.textContent;
        });
        window.location.href = "http://cppt.su/" + link + "/" + pin_code;
        break;
      case "C":
        document.querySelectorAll("#display li").forEach(function (v) {
          v.textContent = "+";
        });
        break;
      default:
        document.querySelector(
          "#display li:nth-child(" + num_pos + ")"
        ).textContent = command;
        num_pos++;
        num_pos = num_pos > 4 ? 1 : num_pos;
    }
  }

  return (
    <div
      className="modal fade "
      id="exampleModalpayment"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Payment
            </h1>
            <button
              type="button"
              className="btn-close bg-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex">
              <div>
                <label htmlFor="paymentMethod">Select Payment Method:</label>
                <select
                  className="form-select"
                  id="paymentMethod"
                  name="paymentMethod"
                  style={{ width: "80%" }}
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)}
                >
                  <option value="Credit">Credit Card</option>
                  <option value="Cash">Cash</option>
                </select>
              </div>
              <div style={{ textAlign: "center" }}>
                <div>
                  <label
                    htmlFor="paymentMethod"
                    style={{ fontWeight: "bold", marginLeft: "80px", }}
                  >
                    Total=  
                  </label>
                  <label style={{ fontWeight: "bold", color: "#e57300" }}><span>
                      £ {totalPrice}</span>
                  </label>
                </div>
                {/* <div>
                  <label style={{ fontWeight: "bold", marginLeft: "80px" }}>
                    Paid=
                  </label>
                  <label style={{ fontWeight: "bold", color: "red" }}>
                    £{paymentType === "Credit" ? totalPrice : tenderedAmount}
                  </label>
                </div> */}
                {/* <div>
                  <label style={{ fontWeight: "bold", marginLeft: "80px" }}>
                    Change=
                  </label>
                  <label style={{ fontWeight: "bold", color: "red" }}>
                    £
                    {paymentType === "Credit"
                      ? 0
                      : Math.sign(tenderedAmount - totalPrice) === "-"
                      ? 0
                      : Math.round((tenderedAmount - totalPrice) * 100) / 100}
                  </label>
                </div> */}
              </div>
            </div>


            {paymentType === "Credit" ? null : (
              <>
                <div className="d-flex" style={{ marginTop: "3%" }}>
                  <label htmlFor="tenderAmount" style={{ marginLeft: "5%" }}>
                    Tendered  
                  </label>
                  <label htmlFor="changeAmount" style={{ marginLeft: "17%" }}>
                    {" "}
                    Change
                  </label>
                </div>

                <div
                  className="input-group d-flex"
                  style={{ width: "60%", border: "#e57c35" }}
                >
                  {/* Tendered */}
                  <input
                    type="text"
                    className="form-control"
                    style={{ backgroundColor: "white" }}
                    id="tenderAmount"
                    placeholder={0.0}
                    value={tenderedAmount}
                    onChange={(e) => setTenderedAmount(Number(e.target.value))}
                  />
                  {/* Change */}
                  <input
                    value={
                      Math.round((tenderedAmount - totalPrice) * 100) / 100
                    }
                    type="text"
                    className="form-control"
                    style={{ backgroundColor: "lightgray" }}
                    id="changeAmount"
                    placeholder={0.0}
                    readOnly
                  />
                </div>

                <div className="d-flex" style={{ marginTop: "3%" }}></div>

                <div>
                  <ul
                    className="ulnum"
                    id="numpad"
                    style={{ width: "50%", marginLeft: "10%" }}
                  >
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>C</li>
                    <li>0</li>
                    <li>E</li>
                  </ul>
                </div>

                <div></div>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary bg-white"
              style={{
                height: "80px",
                width: "20%",
                fontSize: " 25px",
                backgroundColor: "#e57c35",
              }}
              onClick={() => {
                handleSubmitOrder();
                window.open("http://localhost:3000/ReceiptBill");
              }}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
