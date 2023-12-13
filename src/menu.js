import { useNavigate } from "react-router-dom";

function MenuBar() {
  const navigate = useNavigate();

  return (
    <div id="sidebar" class="app-sidebar">
      <div class="app-sidebar-content" data-scrollbar="true" data-height="100%">
        <div
          class="menu"
          style={{
            backgroundColor: "white",
            marginTop: "10px",
            marginLeft: "5px",
            borderRadius: "15px",
          }}
        >
          <div class="menu-header">Navigation</div>
          <div class="menu-item">
            <a href class="menu-link">
              <span class="menu-icon">
                <i class="bi bi-cpu"></i>
              </span>
              <span class="menu-text" onClick={() => navigate("/")}>
                Dashboard
              </span>
            </a>
          </div>

          <div class="menu-header">Components</div>

          <div class="menu-item has-sub">
            <a href class="menu-link">
              <div class="menu-icon">
                <i class="bi bi-bag-check"></i>
                <span class="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
              </div>
              <div
                class="menu-text d-flex align-items-center"
                onClick={() => navigate("/POS")}
              >
                POS System
              </div>
              {/* <span class="menu-caret"><b class="caret"></b></span> */}
            </a>
            {/* <div class="menu-submenu">
                    <div class="menu-item">
                        <a href="pos_customer_order.html" target="_blank" class="menu-link">
                            <div class="menu-text">Customer Order</div>
                        </a>
                    </div>
                 
                </div> */}
          </div>

          <div class="menu-item has-sub">
            <a href class="menu-link" data-bs-toggle="dropdown">
              <span class="menu-icon">
                <i class="bi bi-collection"></i>
              </span>
              <span class="menu-text">Reports</span>
              <span class="menu-caret">
                <b class="caret"></b>
              </span>
            </a>
            <div class="dropdown-menu ">
              <a
                class="dropdown-item"
                href
                onClick={() => navigate("/SalesReport")}
              >
                Sales Report
              </a>
              <a
                class="dropdown-item"
                href
                onClick={() => navigate("/ProductReport")}
              >
                Product Report
              </a>
              <a
                class="dropdown-item"
                href
                onClick={() => navigate("/CashDrawer")}
              >
                Cash Drawer
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
                onClick={() => navigate("/categoryStock")}
              >
                Edit Categories
              </span>
            </a>
          </div>

          <div class="menu-item has-sub">
            <a href class="menu-link" data-bs-toggle="dropdown">
              <span class="menu-icon">
                <i class="bi bi-collection"></i>
              </span>
              <span class="menu-text" onClick={() => navigate("/Stockis")}>
                Edit Products
              </span>
            </a>
          </div>

          <div class="menu-divider"></div>
          <div class="menu-header">Users</div>

          <div class="menu-item">
            <a href class="menu-link">
              <span class="menu-icon">
                <i class="bi bi-gear"></i>
              </span>
              <span class="menu-text" onClick={() => navigate("/Setting")}>
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
