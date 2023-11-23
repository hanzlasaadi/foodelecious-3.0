import MenuBar from "./menu";
import Navbar from "./navbar";
function ProductReport() {
  return (
    <div id="app" className="app">
      <Navbar />

      <MenuBar />

      <button
        className="app-sidebar-mobile-backdrop"
        data-toggle-target=".app"
        data-toggle-className="app-sidebar-mobile-toggled"
      ></button>

      <div id="content" className="app-content">
        <div className="d-flex align-items-center mb-3">
          <div>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/#">PAGES</a>
              </li>
              {/* <li className="breadcrumb-item active">Sales</li> */}
            </ul>
            <h1 className="page-header mb-0"> Product Sales</h1>
          </div>
          {/* <div className="ms-auto">
                        <a href="#" className="btn btn-outline-theme"><i className="fa fa-plus-circle fa-fw me-1"></i> Create Orders</a>
                    </div> */}
        </div>
        <div className="mb-md-4 mb-3 d-md-flex">
          <div className="mt-md-0 mt-2">
            <a
              href="/#"
              className="text-black  text-opacity-75 text-decoration-none"
            >
              <i className="fa fa-download fa-fw me-1 text-theme"></i> Export
            </a>
          </div>
          <div className="ms-md-4 mt-md-0 mt-2 dropdown-toggle">
            <a
              href="/#"
              data-bs-toggle="dropdown"
              className="text-black text-decoration-none"
            >
              More Actions
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#">
                Action
              </a>
              <a className="dropdown-item" href="/#">
                Another action
              </a>
              <a className="dropdown-item" href="/#">
                Something else here
              </a>
              <div role="separator" className="dropdown-divider"></div>
              <a className="dropdown-item" href="/#">
                Separated link
              </a>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            backgroundColor: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          <ul className="nav nav-tabs nav-tabs-v2 px-4">
            <li className="nav-item me-3">
              <a
                href="#allTab"
                className="nav-link active px-2"
                data-bs-toggle="dropdown"
              >
                Date Range
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/#">
                  Action
                </a>
                <a className="dropdown-item" href="/#">
                  Another action
                </a>
                <a className="dropdown-item" href="/#">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="/#">
                  Separated link
                </a>
              </div>
            </li>

            <li className="nav-item me-3">
              <a
                href="#publishedTab"
                className="nav-link px-2"
                data-bs-toggle="tab"
              >
                Product
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                href="#expiredTab"
                className="nav-link px-2"
                data-bs-toggle="tab"
              >
                Flavour
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                href="#deletedTab"
                className="nav-link px-2"
                data-bs-toggle="tab"
              >
                Size
              </a>
            </li>
          </ul>
          <div className="tab-content p-4">
            <div className="tab-pane fade show active" id="allTab">
              <div className="input-group mb-4">
                <div className="flex-fill position-relative">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control px-35px"
                      placeholder="Filter orders"
                    />
                    <div
                      className="input-group-text position-absolute top-0 bottom-0 bg-none border-0 start-0"
                      style={{ zIndex: "1020" }}
                    >
                      <i className="fa fa-search opacity-5"></i>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-outline-default  rounded-0"
                  type="button"
                >
                  <span className="d-none d-md-inline ">
                    {" "}
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="product1"
                    />
                    <label className="form-check-label" for="product1"></label>{" "}
                    &nbsp;Waste
                  </span>
                  <span className="d-inline d-md-none"></span> &nbsp;
                </button>

                <button
                  className="btn btn-outline-default  rounded-0"
                  type="button"
                >
                  <span className="d-none d-md-inline ">
                    {" "}
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="product1"
                    />
                    <label className="form-check-label" for="product1"></label>
                    &nbsp;Cancel
                  </span>
                  <span className="d-inline d-md-none"></span> &nbsp;
                </button>

                <button
                  className="btn btn-outline-default  rounded-0"
                  type="button"
                >
                  <span className="d-none d-md-inline ">
                    {" "}
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="product1"
                    />
                    <label className="form-check-label" for="product1"></label>{" "}
                    &nbsp;Vat
                  </span>
                  <span className="d-inline d-md-none"></span> &nbsp;
                </button>

                <button
                  className="btn btn-outline-default  rounded-0"
                  type="button"
                >
                  <span className="d-none d-md-inline ">
                    {" "}
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="product1"
                    />
                    <label className="form-check-label" for="product1"></label>
                    &nbsp;Discount
                  </span>
                  <span className="d-inline d-md-none"></span> &nbsp;
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th className="border-top-0 pt-0 pb-2"></th>
                      <th className="border-top-0 pt-0 pb-2">Date&Time</th>
                      <th className="border-top-0 pt-0 pb-2">Menu</th>
                      <th className="border-top-0 pt-0 pb-2">Flavour </th>
                      <th className="border-top-0 pt-0 pb-2"> Size</th>
                      <th className="border-top-0 pt-0 pb-2">Sale Qty</th>
                      <th className="border-top-0 pt-0 pb-2">Waste Qty</th>
                      <th className="border-top-0 pt-0 pb-2">Total Qty</th>
                      <th className="border-top-0 pt-0 pb-2">Amount</th>
                      <th className="border-top-0 pt-0 pb-2">VAT</th>
                      <th className="border-top-0 pt-0 pb-2">Discount </th>
                      <th className="border-top-0 pt-0 pb-2">Paid </th>
                      <th className="border-top-0 pt-0 pb-2">Cancel</th>
                      <th className="border-top-0 pt-0 pb-2">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label
                            className="form-check-label"
                            for="product1"
                          ></label>
                        </div>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Pizza</td>
                      <td>Chese Tomato Pizza</td>
                      <td className="py-1 align-middle">
                        <span> 14 inches</span>
                      </td>
                      <td className="align-middle">
                        <span> 4</span>
                      </td>
                      <td className="align-middle">0</td>
                      <td className="align-middle">4</td>
                      <td className="align-middle">£34.99</td>
                      <td className="align-middle">£0.00</td>
                      <td className="align-middle">£0.00</td>
                      <td className="align-middle">£34.99</td>
                      <td className="align-middle">£4.99</td>
                      <td className="align-middle">£30.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label
                            className="form-check-label"
                            for="product1"
                          ></label>
                        </div>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Pizza</td>
                      <td>Chese Tomato Pizza</td>
                      <td className="py-1 align-middle">
                        <span> 14 inches</span>
                      </td>
                      <td className="align-middle">
                        <span> 4</span>
                      </td>
                      <td className="align-middle">0</td>
                      <td className="align-middle">4</td>
                      <td className="align-middle">£34.99</td>
                      <td className="align-middle">£0.00</td>
                      <td className="align-middle">£0.00</td>
                      <td className="align-middle">£34.99</td>
                      <td className="align-middle">£4.99</td>
                      <td className="align-middle">£30.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label
                            className="form-check-label"
                            for="product1"
                          ></label>
                        </div>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Pizza</td>
                      <td>Chese Tomato Pizza</td>
                      <td className="py-1 align-middle">
                        <span> 14 inches</span>
                      </td>
                      <td className="align-middle">
                        <span> 4</span>
                      </td>
                      <td className="align-middle">0</td>
                      <td className="align-middle">4</td>
                      <td className="align-middle">£34.99</td>
                      <td className="align-middle">£0.00</td>
                      <td className="align-middle">£0.00</td>
                      <td className="align-middle">£34.99</td>
                      <td className="align-middle">£4.99</td>
                      <td className="align-middle">£30.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label
                            className="form-check-label"
                            for="product1"
                          ></label>
                        </div>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Pizza</td>
                      <td>Chese Tomato Pizza</td>
                      <td className="py-1 align-middle">
                        <span> 14 inches</span>
                      </td>
                      <td className="align-middle">
                        <span> 4</span>
                      </td>
                      <td className="align-middle">0</td>
                      <td className="align-middle">4</td>
                      <td className="align-middle">£34.99</td>
                      <td className="align-middle">£0.00</td>
                      <td className="align-middle">£0.00</td>
                      <td className="align-middle">£34.99</td>
                      <td className="align-middle">£4.99</td>
                      <td className="align-middle">£30.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="d-md-flex align-items-center">
                <div className="me-md-auto text-md-left text-center mb-2 mb-md-0">
                  Showing 1 to 10 of 57 entries
                </div>
                <ul
                  className="pagination mb-0 justify-content-center"
                  style={{
                    border: "1px solid lightgrey",
                    borderRadius: "10px",
                  }}
                >
                  <li className="page-item disabled">
                    <a href="/#" className="page-link">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="/#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="/#" data-toggle="scroll-to-top" className="btn-scroll-top fade">
        <i className="fa fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default ProductReport;
