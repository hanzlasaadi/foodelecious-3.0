import React from 'react';

function VoucherModal({

    tenderedAmount,
    setTenderedAmount
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

        <div>


            <div class="modal fade" id="voucherModal" tabindex="-1" role="dialog" aria-labelledby="voucherModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" style={{height:"70vh"}}>
                        <div class="modal-header">
                            <h5 class="modal-title fs-3" id="voucherModalLabel">Apply Voucher Code</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" style={{ backgroundColor: 'grey' }}></button>

                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group" style={{marginLeft:"100px"}}>
                                    <label className='fs-3' for="voucherCode">Enter Voucher Code:</label>
                                    <input type="text" class="form-control w-75   fs-4" id="voucherCode" placeholder="Enter code" />
                                </div>

                                <div className="d-flex" style={{ marginTop: "3%" }}>

                                </div>

                                <div>
                                    <ul
                                        className="ulnum"
                                        id="numpad"
                                        style={{ width: "50%", marginLeft: "28%" }}
                                    >
                                        <li  className='fs-3' value={1} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>1</li>
                                        <li  className='fs-3' value={2} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>2</li>
                                        <li  className='fs-3' value={3} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>3</li>
                                        <li  className='fs-3' value={4} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>4</li>
                                        <li   className='fs-3' value={5} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>5</li>
                                        <li  className='fs-3' value={6} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>6</li>
                                        <li  className='fs-3' value={7} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>7</li>
                                        <li  className='fs-3' value={8} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>8</li>
                                        <li  className='fs-3' value={9} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>9</li>
                                        <li  className='fs-3' value={0} onClick={(e) => setTenderedAmount(ten => Number(`${ten}${e.target.value}`))}>0</li>
                                        <li  className='fs-3' onClick={(e) => setTenderedAmount(0)}>C</li>
                                        <li  className='fs-3'>E</li>
                                    </ul>
                                </div>


                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-default fs-3" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-outline-theme fs-3" onclick="applyDiscount()">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default VoucherModal;