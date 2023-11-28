import { useNavigate } from "react-router-dom";

function MenuBar() {
  const navigate = useNavigate();

  return (
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
            <a
              href
              className="menu-link"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
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
              <span className="menu-text" onClick={() => navigate("/Stockis")}>
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
              <span className="menu-text" onClick={() => navigate("/Setting")}>
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
  );
}

export default MenuBar;
