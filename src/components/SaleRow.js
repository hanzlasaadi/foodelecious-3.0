import React from "react";
import SaleRow from "./../components/SaleRow";
import MenuBar from "./../menu";
import Navbar from "./../navbar";
import axios from "axios";
import { apiUrl } from "./../assets/utils/env";
function SalesReport({ setIsLoggedIn, worker }) {
  const [allSales, setAllSales] = React.useState(null);
  const [period, setPeriod] = React.useState("today");

  function getSales(timeFrame) {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`${apiUrl}/api/v1/order/stats?period=${timeFrame}`, config)
      .then((res) => {
        console.log(res.data);
        setAllSales(res.data.orderData);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }

  React.useEffect(() => {
    getSales(period);
  }, [period]);
  return (
    <div id="app" className="app">
      <Navbar setIsLoggedIn={setIsLoggedIn} worker={worker} />

      <MenuBar />

      <button
        className="app-sidebar-mobile-backdrop"
        data-toggle-target=".app"
        data-toggle-class="app-sidebar-mobile-toggled"
      ></button>

      <div id="content" className="app-content">
        <div className="d-flex align-items-center mb-3">
          <div>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href>PAGES</a>
              </li>
              {/* <li className="breadcrumb-item active">Sales</li> */}
            </ul>
            <h1 className="page-header mb-0">Sales</h1>
          </div>
          {/* <div className="ms-auto">
                        <a href className="btn btn-outline-theme"><i className="fa fa-plus-circle fa-fw me-1"></i> Create Orders</a>
                    </div> */}
        </div>
        <div className="mb-md-4 mb-3 d-md-flex">
          <div className="mt-md-0 mt-2">
            <a
              href
              className="text-black  text-opacity-75 text-decoration-none"
            >
              <i className="fa fa-download fa-fw me-1 text-theme"></i> Export
            </a>
          </div>
          <div className="ms-md-4 mt-md-0 mt-2 dropdown-toggle">
            <a
              href
              data-bs-toggle="dropdown"
              className="text-black text-decoration-none"
            >
              Time Range
            </a>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                href
                onClick={() => setPeriod("today")}
              >
                Today's Sales
              </a>
              <a
                className="dropdown-item"
                href
                onClick={() => setPeriod("lastWeek")}
              >
                Last Week's Sales
              </a>
              <a
                className="dropdown-item"
                href
                onClick={() => setPeriod("lastMonth")}
              >
                Last Month's Sales
              </a>
              {/* <div role="separator" className="dropdown-divider"></div>
              <a className="dropdown-item" href>
                Separated link
              </a> */}
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
          <ul className="nav nav-tabs nav-tabs-v2 px-4 ">
            <li className="nav-item me-3">
              <a href className="nav-link px-2" data-bs-toggle="tab">
                Date Range
              </a>
            </li>
            <li className="nav-item me-3">
              <a href className="nav-link px-2" data-bs-toggle="tab">
                Payment Method
              </a>
            </li>
            <li className="nav-item me-3">
              <a href className="nav-link px-2" data-bs-toggle="tab">
                Staff
              </a>
            </li>
            <li className="nav-item me-3">
              <a href className="nav-link px-2" data-bs-toggle="tab">
                Sales Type
              </a>
            </li>
          </ul>
          <div className="tab-content p-4">
            <div className="tab-pane fade show active" id="dateTab">
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
                    <label className="form-check-label"></label> &nbsp;Vat
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
                    <label className="form-check-label"></label>&nbsp;Discount
                  </span>
                  <span className="d-inline d-md-none"></span> &nbsp;
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th className="border-top-0 pt-0 pb-2"></th>
                      <th className="border-top-0 pt-0 pb-2">Order#</th>
                      <th className="border-top-0 pt-0 pb-2">Date&Time</th>
                      <th className="border-top-0 pt-0 pb-2">Products</th>
                      <th className="border-top-0 pt-0 pb-2">Staff</th>
                      <th className="border-top-0 pt-0 pb-2">Status</th>
                      <th className="border-top-0 pt-0 pb-2">Payment Method</th>
                      <th className="border-top-0 pt-0 pb-2">Sales Type</th>
                      <th className="border-top-0 pt-0 pb-2">Amount</th>
                      <th className="border-top-0 pt-0 pb-2">Vat</th>
                      <th className="border-top-0 pt-0 pb-2">Discount</th>
                      <th className="border-top-0 pt-0 pb-2">Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allSales?.map((row, i) => (
                      <SaleRow row={row} index={i} key={row._id} />
                    ))}
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
                    <a href className="page-link">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href>
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tab-content p-1">
            <div className="tab-pane fade  active" id="paymentTab">
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
                    <label className="form-check-label"></label> &nbsp;Vat
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
                    <label className="form-check-label"></label>&nbsp;Discount
                  </span>
                  <span className="d-inline d-md-none"></span> &nbsp;
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th className="border-top-0 pt-0 pb-2"></th>
                      <th className="border-top-0 pt-0 pb-2">Order#</th>
                      <th className="border-top-0 pt-0 pb-2">Date&Time</th>
                      <th className="border-top-0 pt-0 pb-2">Staff</th>
                      <th
                        className="border-top-0 pt-0 pb-2"
                        style={{ color: "red" }}
                      >
                        Payment Method
                      </th>
                      <th className="border-top-0 pt-0 pb-2"> Sales Type</th>
                      <th className="border-top-0 pt-0 pb-2">Amount</th>
                      <th className="border-top-0 pt-0 pb-2">Vat</th>
                      <th className="border-top-0 pt-0 pb-2">Discount</th>
                      <th className="border-top-0 pt-0 pb-2">Paid</th>
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
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0001</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Cash</td>
                      <td className="py-1 align-middle">
                        <span> Delievery</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0002</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Online</td>
                      <td className="py-1 align-middle">
                        <span> Deliviero</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0003</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Online</td>
                      <td className="py-1 align-middle">
                        <span> JustEat</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0004</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Card</td>
                      <td className="py-1 align-middle">
                        <span> Take Away</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
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
                    <a href className="page-link">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href>
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tab-content ">
            <div className="tab-pane fade  active" id="staffTab">
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
                    <label className="form-check-label"></label> &nbsp;Vat
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
                    <label className="form-check-label"></label>&nbsp;Discount
                  </span>
                  <span className="d-inline d-md-none"></span> &nbsp;
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th className="border-top-0 pt-0 pb-2"></th>
                      <th className="border-top-0 pt-0 pb-2">Order#</th>
                      <th className="border-top-0 pt-0 pb-2">Date&Time</th>
                      <th
                        className="border-top-0 pt-0 pb-2"
                        style={{ color: "red" }}
                      >
                        Staff
                      </th>
                      <th className="border-top-0 pt-0 pb-2">Payment Method</th>
                      <th className="border-top-0 pt-0 pb-2"> Sales Type</th>
                      <th className="border-top-0 pt-0 pb-2">Amount</th>
                      <th className="border-top-0 pt-0 pb-2">Vat</th>
                      <th className="border-top-0 pt-0 pb-2">Discount</th>
                      <th className="border-top-0 pt-0 pb-2">Paid</th>
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
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0001</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Cash</td>
                      <td className="py-1 align-middle">
                        <span> Eat in</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0002</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Online</td>
                      <td className="py-1 align-middle">
                        <span> Deliviero</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0003</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Online</td>
                      <td className="py-1 align-middle">
                        <span> JustEat</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0004</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Card</td>
                      <td className="py-1 align-middle">
                        <span> Take Away</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
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
                    <a href className="page-link">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href>
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tab-content  ">
            <div className="tab-pane fade  active" id="saleTab">
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
                    <label className="form-check-label"></label> &nbsp;Vat
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
                    <label className="form-check-label"></label>&nbsp;Discount
                  </span>
                  <span className="d-inline d-md-none"></span> &nbsp;
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th className="border-top-0 pt-0 pb-2"></th>
                      <th className="border-top-0 pt-0 pb-2">Order#</th>
                      <th className="border-top-0 pt-0 pb-2">Date&Time</th>
                      <th className="border-top-0 pt-0 pb-2">Staff</th>
                      <th className="border-top-0 pt-0 pb-2">Payment Method</th>
                      <th
                        className="border-top-0 pt-0 pb-2"
                        style={{ color: "red" }}
                      >
                        {" "}
                        Sales Type
                      </th>
                      <th className="border-top-0 pt-0 pb-2">Amount</th>
                      <th className="border-top-0 pt-0 pb-2">Vat</th>
                      <th className="border-top-0 pt-0 pb-2">Discount</th>
                      <th className="border-top-0 pt-0 pb-2">Paid</th>
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
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0001</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Cash</td>
                      <td className="py-1 align-middle">
                        <span> Eat in</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0002</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Online</td>
                      <td className="py-1 align-middle">
                        <span> Deliviero</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0003</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Online</td>
                      <td className="py-1 align-middle">
                        <span> JustEat</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td className="w-10px align-middle">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="product1"
                          />
                          <label className="form-check-label"></label>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href>0004</a>
                      </td>
                      <td className="align-middle">Thu 26 Nov, 12:23pm</td>
                      <td className="align-middle"> Lee</td>
                      <td>Card</td>
                      <td className="py-1 align-middle">
                        <span> Take Away</span>
                      </td>
                      <td className="align-middle">
                        <span> £34.99</span>
                      </td>
                      <td className="align-middle">£0</td>
                      <td className="align-middle">£2.99</td>
                      <td className="align-middle">£34.99</td>
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
                    <a href className="page-link">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href>
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href>
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href data-toggle="scroll-to-top" className="btn-scroll-top fade">
        <i className="fa fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default SalesReport;