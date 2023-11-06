/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
function Modal() {
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
                href="#"
                data-bs-dismiss="modal"
                className="btn-close position-absolute top-0 end-0 m-4"
                style={{ backgroundColor: "black" }}
              />
              <div className="modal-pos-product">
                {/* <div class="modal-pos-product-img">
  <div class="img" style="background-image: url(../assets/img/pos/product-1.html)"></div>
  </div> */}
                <div className="modal-pos-product-info">
                  <div
                    className="h4 mb-2"
                    id="modal-title"
                    style={{ color: "grey" }}
                  />
                  <div className="text-white text-opacity-50 mb-2">
                    <p id="modal-description" style={{ color: "grey" }} />
                  </div>
                  <div
                    id="modal-price"
                    className="h4 mb-3"
                    style={{ color: "#ff4a17" }}
                  />
                  <div className="d-flex mb-3">
                    <a href="#" className="btn btn-outline-theme">
                      <i className="fa fa-minus" />
                    </a>
                    <input
                      type="text"
                      className="form-control w-50px fw-bold mx-2 bg-grey border-0 text-center"
                      name="qty"
                      defaultValue={1}
                    />
                    <a href="#" className="btn btn-outline-theme">
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <hr className="mx-n4" />
                  <span id="modal-steps">
                    {/* <div class="mb-2">
            <div class="fw-bold" style="color: black">Size:</div>
            <div class="option-list">
              <div class="option">
                <input
                  type="radio"
                  id="size3"
                  name="size"
                  class="option-input"
                  checked
                />
                <label class="option-label" for="size3">
                  <span class="option-text" style="color: black"
                    >Small</span
                  >
                  <span class="option-price" style="color: darkgrey"
                    >+0.00</span
                  >
                </label>
              </div>
              <div class="option">
                <input
                  type="radio"
                  id="size1"
                  name="size"
                  class="option-input"
                />
                <label class="option-label" for="size1">
                  <span class="option-text" style="color: black"
                    >Large</span
                  >
                  <span class="option-price" style="color: darkgrey"
                    >+3.00</span
                  >
                </label>
              </div>
              <div class="option">
                <input
                  type="radio"
                  id="size2"
                  name="size"
                  class="option-input"
                />
                <label class="option-label" for="size2">
                  <span class="option-text" style="color: black"
                    >Medium</span
                  >
                  <span class="option-price" style="color: darkgrey"
                    >+1.50</span
                  >
                </label>
              </div>
            </div>
          </div> */}
                  </span>
                  <hr className="mx-n4" />
                  <div className="row">
                    <div className="col-4">
                      <a
                        href="#"
                        className="btn btn-default h4 mb-0 d-block rounded-0 py-3"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </a>
                    </div>
                    <div className="col-8">
                      <a
                        href="#"
                        id="addToCart"
                        className="btn btn-success d-flex justify-content-center align-items-center rounded-0 py-3 h4 m-0"
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
