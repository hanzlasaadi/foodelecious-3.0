// import MenuBar from "./menu";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

function HomePage({ setIsLoggedIn, worker }) {
  const navigate = useNavigate();

  return (
    <div id="app" className="app">
      <Navbar setIsLoggedIn={setIsLoggedIn} worker={worker} />

      <div id="sidebar" className="app-sidebar">
        <div
          className="app-sidebar-content"
          data-scrollbar="true"
          data-height="100%"
        >
          <div
            className="menu"
            style={{
              backgroundColor: "white",
              marginTop: "10px",
              marginLeft: "5px",
              borderRadius: "15px",
            }}
          >
            <div className="menu-header">Navigation</div>
            <div className="menu-item">
              <a href className="menu-link" style={{ cursor: "pointer" }}>
                <span className="menu-icon">
                  <i className="bi bi-cpu"></i>
                </span>
                <span className="menu-text">Dashboard</span>
              </a>
            </div>

            <div className="menu-header">Components</div>

            <div className="menu-item has-sub">
              <a href className="menu-link">
                <div className="menu-icon">
                  <i className="bi bi-bag-check"></i>
                  <span className="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
                </div>
                <div
                  className="menu-text d-flex align-items-center"
                  onClick={() => navigate("/POS")}
                >
                  POS System
                </div>
                {/* <span className="menu-caret"><b className="caret"></b></span> */}
              </a>
              {/* <div className="menu-submenu">
                    <div className="menu-item">
                        <a href="pos_customer_order.html" target="_blank" className="menu-link">
                            <div className="menu-text">Customer Order</div>
                        </a>
                    </div>
                 
                </div> */}
            </div>

            <div className="menu-item has-sub">
              <a href className="menu-link" data-bs-toggle="dropdown">
                <span className="menu-icon">
                  <i className="bi bi-collection"></i>
                </span>
                <span className="menu-text">Reports</span>
                <span className="menu-caret">
                  <b className="caret"></b>
                </span>
              </a>
              <div className="dropdown-menu ">
                <a
                  className="dropdown-item"
                  href
                  onClick={() => navigate("/SalesReport")}
                >
                  Sales Report
                </a>
                <a
                  className="dropdown-item"
                  href
                  onClick={() => navigate("/ProductReport")}
                >
                  Product Report
                </a>
              </div>
            </div>

            <div className="menu-item has-sub">
              <a href className="menu-link" data-bs-toggle="dropdown">
                <span className="menu-icon">
                  <i className="bi bi-collection"></i>
                </span>
                <span
                  className="menu-text"
                  onClick={() => navigate("/Stockis")}
                >
                  Products
                </span>
              </a>
            </div>

            <div className="menu-divider"></div>
            <div className="menu-header">Users</div>

            <div className="menu-item">
              <a href className="menu-link">
                <span className="menu-icon">
                  <i className="bi bi-gear"></i>
                </span>
                <span
                  className="menu-text"
                  onClick={() => navigate("/Setting")}
                >
                  Settings
                </span>
              </a>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <button
        className="app-sidebar-mobile-backdrop"
        data-toggle-target=".app"
        data-toggle-class="app-sidebar-mobile-toggled"
      ></button>

      <div id="content" className="app-content">
        <div className="row">
          <div className="col-xl-3 col-lg-6">
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex fw-bold small mb-3">
                  <span className="flex-grow-1">SITE VISITORS</span>
                  <a
                    href
                    data-toggle="card-expand"
                    className="text-dark text-opacity-50 text-decoration-none"
                  >
                    <i className="bi bi-fullscreen"></i>
                  </a>
                </div>

                <div className="row align-items-center mb-2">
                  <div className="col-7">
                    <h3 className="mb-0" style={{ color: "grey" }}>
                      700
                    </h3>
                  </div>
                  <div className="col-5">
                    <div
                      className="mt-n2"
                      data-render="apexchart"
                      data-type="bar"
                      data-title="Visitors"
                      data-height="30"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex fw-bold small mb-3">
                  <span className="flex-grow-1">STORE SALES</span>
                  <a
                    href
                    data-toggle="card-expand"
                    className="text-dark text-opacity-50 text-decoration-none"
                  >
                    <i className="bi bi-fullscreen"></i>
                  </a>
                </div>

                <div className="row align-items-center mb-2">
                  <div className="col-7">
                    <h3 className="mb-0" style={{ color: "grey" }}>
                      $5000
                    </h3>
                  </div>
                  <div className="col-5">
                    <div
                      className="mt-n2"
                      data-render="apexchart"
                      data-type="line"
                      data-title="Visitors"
                      data-height="30"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex fw-bold small mb-3">
                  <span className="flex-grow-1">NEW MEMBERS</span>
                  <a
                    href
                    data-toggle="card-expand"
                    className="text-dark text-opacity-50 text-decoration-none"
                  >
                    <i className="bi bi-fullscreen"></i>
                  </a>
                </div>

                <div className="row align-items-center mb-2">
                  <div className="col-7">
                    <h3 className="mb-0" style={{ color: "grey" }}>
                      100
                    </h3>
                  </div>
                  <div className="col-5">
                    <div
                      className="mt-n3 mb-n2"
                      data-render="apexchart"
                      data-type="pie"
                      data-title="Visitors"
                      data-height="45"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex fw-bold small mb-3">
                  <span className="flex-grow-1">TOP PRODUCTS</span>
                  <a
                    href
                    data-toggle="card-expand"
                    className="text-dark text-opacity-50 text-decoration-none"
                  >
                    <i className="bi bi-fullscreen"></i>
                  </a>
                </div>

                <div className="table-responsive">
                  <table className="w-100 mb-0 small align-middle text-nowrap">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <div
                                className="bg-center bg-cover bg-no-repeat w-80px h-60px"
                                style={{
                                  backgroundImage:
                                    "url(./public/assets/img/pos/bbq.jpg)",
                                }}
                              ></div>
                              <div className="position-absolute top-0 start-0">
                                <span className="badge bg-black bg-opacity-50 rounded-0 d-flex align-items-center justify-content-center w-20px h-20px">
                                  1
                                </span>
                              </div>
                            </div>
                            <div className="flex-1 ps-3" x>
                              <div className="mb-1">
                                <small className="fs-9px fw-500 lh-1 d-inline-block rounded-0 badge bg-white bg-opacity-25 text-dark text-opacity-75 pt-5px">
                                  SKU000001
                                </small>
                              </div>
                              <div className="text-dark fw-500">
                                Pepporini Pizza
                              </div>
                              10$
                            </div>
                          </div>
                        </td>
                        <td>
                          <table style={{ lineHeight: "1px" }}>
                            <tr>
                              <td className="pe-3">QTY:</td>
                              <td className="text-dark text-opacity-75 fw-500">
                                50
                              </td>
                            </tr>
                            <tr>
                              <td className="pe-3">REVENUE:</td>
                              <td className="text-dark text-opacity-75 fw-500">
                                $0
                              </td>
                            </tr>
                            <tr>
                              <td className="pe-3 text-nowrap">PROFIT:</td>
                              <td className="text-dark text-opacity-75 fw-500">
                                $0
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td>
                          <a href className="text-decoration-none text-dark">
                            <i className="bi bi-search"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex fw-bold small mb-3">
                  <span className="flex-grow-1">ACTIVITY LOG</span>
                  <a
                    href
                    data-toggle="card-expand"
                    className="text-dark text-opacity-50 text-decoration-none"
                  >
                    <i className="bi bi-fullscreen"></i>
                  </a>
                </div>

                <div className="table-responsive">
                  <table className="table table-striped table-borderless mb-2px small text-nowrap">
                    <tbody>
                      <tr>
                        <td>
                          <span
                            className="d-flex align-items-center"
                            style={{ color: "black" }}
                          >
                            <i className="bi bi-circle-fill fs-6px text-theme me-2"></i>
                            You have sold an item - $12
                          </span>
                        </td>
                        <td>
                          <small style={{ color: "black" }}>just now</small>
                        </td>

                        <td>
                          <a href className="text-decoration-none text-dark">
                            <i className="bi bi-search"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

export default HomePage;
