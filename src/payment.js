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
              <div style={{ textAlign: "center", }}>

                <div style={{ border: "1px solid #ccc", marginLeft: '90px', padding: "15px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <label
                    htmlFor="paymentMethod"
                    style={{ fontWeight: "bold", }}
                  >
                    Total:
                  </label>
                  <label style={{ fontWeight: "bold", fontSize: '20px', color: "#e57300", marginLeft: "40px" }}>
                    <span>£ {totalPrice}</span>
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
                    style={{ backgroundColor: "white", width: '40%' }}
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
                    style={{ backgroundColor: "lightgray", width: '40%' }}
                    id="changeAmount"
                    placeholder={0.0}
                    readOnly
                  />
                  <div className="form-check mt-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="product1"
                    />
                    <label className="form-check-label ">Overide</label>
                  </div>
                </div>

                <div className="d-flex" style={{ marginTop: "3%" }}>

                </div>

                <div>
                  <ul
                    className="ulnum"
                    id="numpad"
                    style={{ width: "50%", marginLeft: "10%" }}
                  >
                    <li value={1} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>1</li>
                    <li value={2} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>2</li>
                    <li value={3} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>3</li>
                    <li value={4} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>4</li>
                    <li value={5} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>5</li>
                    <li value={6} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>6</li>
                    <li value={7} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>7</li>
                    <li value={8} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>8</li>
                    <li value={9} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>9</li>
                    <li value={0} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>0</li>
                    <li onClick={(e) => setTenderedAmount(0)}>C</li>
                    <li>E</li>
                  </ul>
                </div>

                <div></div>
              </>
            )}
          </div>
          <div class="my gap-2" style={{ marginLeft: '25%', }}>
            <button className="btn btn-light" value={5} onClick={(e) => setTenderedAmount(Number(e.target.value))}>£ 5</button>&nbsp;
            <button className="btn btn-light" value={10} onClick={(e) => setTenderedAmount(Number(e.target.value))}>£ 10</button>&nbsp;
            <button className="btn btn-light" value={15} onClick={(e) => setTenderedAmount(Number(e.target.value))}>£ 15</button>&nbsp;
            <button className="btn btn-light" value={20} onClick={(e) => setTenderedAmount(Number(e.target.value))}>£ 20</button>

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
                // window.open("http://localhost:3000/ReceiptBill");
              }}
              data-bs-toggle="modal" data-bs-target="#exampleModalsubmit"
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
