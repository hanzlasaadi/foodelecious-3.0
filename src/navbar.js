import { useNavigate } from "react-router-dom";

function Navbar({ setIsLoggedIn, worker }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    // localStorage.setItem("user", "");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  return (
    <div
      id="header"
      className="app-header"
      style={{ backgroundColor: "white" }}
    >
      <div className="desktop-toggler">
        <button
          type="button"
          className="menu-toggler"
          data-toggle-class="app-sidebar-collapsed"
          data-dismiss-class="app-sidebar-toggled"
          data-toggle-target=".app"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className="mobile-toggler">
        <button
          type="button"
          className="menu-toggler"
          data-toggle-class="app-sidebar-mobile-toggled"
          data-toggle-target=".app"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className="brand">
        <a href className="brand-logo" onClick={() => navigate("/")}>
          <span className="">
            {" "}
            <img
              src="../assets/img/pos/logo.png"
              style={{
                height: 30,
                width: 130,
                marginTop: "-5%",
                marginLeft: "40%",
              }}
              alt=""
            />{" "}
          </span>
        </a>
      </div>

      <div className="menu">
        <div className="menu-item dropdown">
          <a
            href
            data-toggle-class="app-header-menu-search-toggled"
            data-toggle-target=".app"
            className="menu-link"
          >
            <div className="menu-icon">
              <i className="bi bi-search nav-icon"></i>
            </div>
          </a>
        </div>

        <div className="menu-item dropdown dropdown-mobile-full">
          <a
            href
            data-bs-toggle="dropdown"
            data-bs-display="static"
            className="menu-link"
            style={{ cursor: "pointer" }}
          >
            <div className="menu-icon">
              <i className="bi bi-bell nav-icon"></i>
            </div>
            <div className="menu-badge bg-theme"></div>
          </a>
          <div className="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
            <h6 className="dropdown-header fs-10px mb-1">NOTIFICATIONS</h6>
            <div className="dropdown-divider mt-1"></div>
            <a
              href
              className="d-flex align-items-center py-10px dropdown-item text-wrap"
            >
              <div className="fs-20px">
                <i className="bi bi-bag text-theme"></i>
              </div>
              <div className="flex-1 flex-wrap ps-3">
                <div className="mb-1 text-white">No New Notification!</div>
                <div className="small">for now</div>
              </div>
              <div className="ps-2 fs-16px">
                <i className="bi bi-chevron-right"></i>
              </div>
            </a>
            {/* <a
              href
              className="d-flex align-items-center py-10px dropdown-item text-wrap"
            >
              <div className="fs-20px w-20px">
                <i className="bi bi-person-circle text-theme"></i>
              </div>
              <div className="flex-1 flex-wrap ps-3">
                <div className="mb-1 text-white">3 NEW ACCOUNT CREATED</div>
                <div className="small">2 MINUTES AGO</div>
              </div>
              <div className="ps-2 fs-16px">
                <i className="bi bi-chevron-right"></i>
              </div>
            </a>
            <a
              href
              className="d-flex align-items-center py-10px dropdown-item text-wrap"
            >
              <div className="fs-20px w-20px">
                <i className="bi bi-gear text-theme"></i>
              </div>
              <div className="flex-1 flex-wrap ps-3">
                <div className="mb-1 text-white">SETUP COMPLETED</div>
                <div className="small">3 MINUTES AGO</div>
              </div>
              <div className="ps-2 fs-16px">
                <i className="bi bi-chevron-right"></i>
              </div>
            </a>
            <a
              href
              className="d-flex align-items-center py-10px dropdown-item text-wrap"
            >
              <div className="fs-20px w-20px">
                <i className="bi bi-grid text-theme"></i>
              </div>
              <div className="flex-1 flex-wrap ps-3">
                <div className="mb-1 text-white">WIDGET INSTALLATION DONE</div>
                <div className="small">5 MINUTES AGO</div>
              </div>
              <div className="ps-2 fs-16px">
                <i className="bi bi-chevron-right"></i>
              </div>
            </a>
            <a
              href
              className="d-flex align-items-center py-10px dropdown-item text-wrap"
            >
              <div className="fs-20px w-20px">
                <i className="bi bi-credit-card text-theme"></i>
              </div>
              <div className="flex-1 flex-wrap ps-3">
                <div className="mb-1 text-white">PAYMENT METHOD ENABLED</div>
                <div className="small">10 MINUTES AGO</div>
              </div>
              <div className="ps-2 fs-16px">
                <i className="bi bi-chevron-right"></i>
              </div>
            </a> */}
            <hr className="bg-white-transparent-5 mb-0 mt-2" />
            {/* <div className="py-10px mb-n2 text-center">
              <a href className="text-decoration-none fw-bold">
                SEE ALL
              </a>
            </div> */}
          </div>
        </div>
        <div className="menu-item dropdown dropdown-mobile-full">
          <a
            href
            data-bs-toggle="dropdown"
            data-bs-display="static"
            className="menu-link"
            style={{ cursor: "pointer" }}
          >
            <div className="menu-img online">
              <img
                src="assets/img/user/profile.jpg"
                alt="Profile"
                height="60"
              />
            </div>
            <div className="menu-text d-sm-block d-none">
              <span
              // className="__cf_email__"
              // data-cfemail="f2878197809c939f97b29391919d879c86dc919d9f"
              >
                {worker.name || "Username"}
              </span>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
            <a
              className="dropdown-item d-flex align-items-center"
              href
              onClick={() => navigate("/Setting")}
            >
              Acc. Settings{" "}
              <i className="bi bi-gear ms-auto text-theme fs-16px my-n1"></i>
            </a>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item d-flex align-items-center"
              href
              onClick={handleLogout}
            >
              Logout{" "}
              <i className="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i>
            </a>
          </div>
        </div>
      </div>

      <form className="menu-search" method="POST" name="header_search_form">
        <div className="menu-search-container">
          <div className="menu-search-icon">
            <i className="bi bi-search"></i>
          </div>
          <div className="menu-search-input">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search menu..."
            />
          </div>
          <div className="menu-search-icon">
            <a
              href
              data-toggle-class="app-header-menu-search-toggled"
              data-toggle-target=".app"
            >
              <i className="bi bi-x-lg"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Navbar;
