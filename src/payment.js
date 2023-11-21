import React from "react";

function PaymentModal({
  totalPrice,
  handleSubmitOrder,
  tenderedAmount,
  setTenderedAmount,
  paymentType,
  setPaymentType,


}) {



  const calculateChange = () => {
    // Your implementation for calculateChange function
    console.log("Calculating change...");
  };



  return (
    <div 
      className="modal fade"
      id="exampleModalpayment"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" >
        <div className="modal-content"style={{borderRadius:'15px'}}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Payment
            </h1>
            <button 
            style={{backgroundColor:'lightgrey'}}
              type="button"
              className="btn-close"
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
              <div>
                <label
                  htmlFor="paymentMethod"
                  style={{ fontWeight: "bold", marginLeft: "100px" }}
                >
                  Total={" "}
                </label>
                <label style={{ fontWeight: "bold", color: "red" }}>
                  £ {totalPrice}
                </label>
              </div>
            </div>

            <div className="d-flex" style={{ marginTop: "3%" }}>
              <label htmlFor="tenderAmount" style={{ marginLeft: "7%" }}>
                Tendered{" "}
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
                style={{ backgroundColor: "lightgray" }}
                id="tenderAmount"
                placeholder={0.0}
                value={tenderedAmount}
                onChange={(e) => setTenderedAmount(Number(e.target.value))}

              />
              {/* Change */}
              <input
                value={Math.round((tenderedAmount - totalPrice) * 100) / 100}
                type="text"
                className="form-control"

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
                <li value={1}
                  onClick={(e) => setTenderedAmount(Number(  String(tenderedAmount)+String(1)))}>1</li>
                <li value={2}
                  onClick={(e) => setTenderedAmount(Number( String(tenderedAmount)+String(2) ))}>2</li>
                 <li value={3}
                  onClick={(e) => setTenderedAmount(Number( String(tenderedAmount)+String(3) ))}>3</li>
               <li value={4}
                  onClick={(e) => setTenderedAmount(Number( String(tenderedAmount)+String(4) ))}>4</li>
                <li value={5}
                  onClick={(e) => setTenderedAmount(Number( String(tenderedAmount)+String(5) ))}>5</li>
                <li value={6}
                  onClick={(e) => setTenderedAmount(Number( String(tenderedAmount)+String(6) ))}>6</li>
                 <li value={7}
                  onClick={(e) => setTenderedAmount(Number( String(tenderedAmount)+String(7) ))}>7</li>
                 <li value={8}
                  onClick={(e) => setTenderedAmount(Number( String(tenderedAmount)+String(8) ))}>8</li>
                 <li value={9}
                  onClick={(e) => setTenderedAmount(Number( String(tenderedAmount)+String(9) ))}>9</li>
                <li 
                 onClick={(e) => { e.preventDefault(); setTenderedAmount(''); }}>C</li>
                <li value={0}
                  onClick={(e) => setTenderedAmount(Number( String(tenderedAmount)+String(0) ))}>0</li>
                 <li value={"."}
                  onClick={(e) => setTenderedAmount(Number( String(tenderedAmount)+String(".") ))}>.</li>
              </ul>
            </div>

            <div></div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              style={{
                height: "80px",
                width: "20%",
                fontSize: " 25px",
                backgroundColor: "#e57c35",
                }}
              onClick={() => {
                handleSubmitOrder();
              }}
            >
              <span style={{color:'white'}}>Pay</span>
            </button>
          </div>
        </div>
      </div>
    </div>

              

  );
}

export default PaymentModal;