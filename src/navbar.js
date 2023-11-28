import { useNavigate } from "react-router-dom";

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    // localStorage.setItem("user", "");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  return (
    <div id="header" class="app-header" style={{ backgroundColor: "white" }}>
      <div class="desktop-toggler">
        <button
          type="button"
          class="menu-toggler"
          data-toggle-class="app-sidebar-collapsed"
          data-dismiss-class="app-sidebar-toggled"
          data-toggle-target=".app"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <div class="mobile-toggler">
        <button
          type="button"
          class="menu-toggler"
          data-toggle-class="app-sidebar-mobile-toggled"
          data-toggle-target=".app"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <div class="brand">
        <a href class="brand-logo" onClick={() => navigate("/")}>
          <span class="">
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

      <div class="menu">
        <div class="menu-item dropdown">
          <a
            href
            data-toggle-class="app-header-menu-search-toggled"
            data-toggle-target=".app"
            class="menu-link"
          >
            <div class="menu-icon">
              <i class="bi bi-search nav-icon"></i>
            </div>
          </a>
        </div>

        <div class="menu-item dropdown dropdown-mobile-full">
          <a
            href
            data-bs-toggle="dropdown"
            data-bs-display="static"
            class="menu-link"
          >
            <div class="menu-icon">
              <i class="bi bi-bell nav-icon"></i>
            </div>
            <div class="menu-badge bg-theme"></div>
          </a>
          <div class="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
            <h6 class="dropdown-header fs-10px mb-1">NOTIFICATIONS</h6>
            <div class="dropdown-divider mt-1"></div>
            <a
              href
              class="d-flex align-items-center py-10px dropdown-item text-wrap"
            >
              <div class="fs-20px">
                <i class="bi bi-bag text-theme"></i>
              </div>
              <div class="flex-1 flex-wrap ps-3">
                <div class="mb-1 text-white">NEW ORDER RECEIVED ($1,299)</div>
                <div class="small">JUST NOW</div>
              </div>
              <div class="ps-2 fs-16px">
                <i class="bi bi-chevron-right"></i>
              </div>
            </a>
            <a
              href
              class="d-flex align-items-center py-10px dropdown-item text-wrap"
            >
              <div class="fs-20px w-20px">
                <i class="bi bi-person-circle text-theme"></i>
              </div>
              <div class="flex-1 flex-wrap ps-3">
                <div class="mb-1 text-white">3 NEW ACCOUNT CREATED</div>
                <div class="small">2 MINUTES AGO</div>
              </div>
              <div class="ps-2 fs-16px">
                <i class="bi bi-chevron-right"></i>
              </div>
            </a>
            <a
              href
              class="d-flex align-items-center py-10px dropdown-item text-wrap"
            >
              <div class="fs-20px w-20px">
                <i class="bi bi-gear text-theme"></i>
              </div>
              <div class="flex-1 flex-wrap ps-3">
                <div class="mb-1 text-white">SETUP COMPLETED</div>
                <div class="small">3 MINUTES AGO</div>
              </div>
              <div class="ps-2 fs-16px">
                <i class="bi bi-chevron-right"></i>
              </div>
            </a>
            <a
              href
              class="d-flex align-items-center py-10px dropdown-item text-wrap"
            >
              <div class="fs-20px w-20px">
                <i class="bi bi-grid text-theme"></i>
              </div>
              <div class="flex-1 flex-wrap ps-3">
                <div class="mb-1 text-white">WIDGET INSTALLATION DONE</div>
                <div class="small">5 MINUTES AGO</div>
              </div>
              <div class="ps-2 fs-16px">
                <i class="bi bi-chevron-right"></i>
              </div>
            </a>
            <a
              href
              class="d-flex align-items-center py-10px dropdown-item text-wrap"
            >
              <div class="fs-20px w-20px">
                <i class="bi bi-credit-card text-theme"></i>
              </div>
              <div class="flex-1 flex-wrap ps-3">
                <div class="mb-1 text-white">PAYMENT METHOD ENABLED</div>
                <div class="small">10 MINUTES AGO</div>
              </div>
              <div class="ps-2 fs-16px">
                <i class="bi bi-chevron-right"></i>
              </div>
            </a>
            <hr class="bg-white-transparent-5 mb-0 mt-2" />
            <div class="py-10px mb-n2 text-center">
              <a href class="text-decoration-none fw-bold">
                SEE ALL
              </a>
            </div>
          </div>
        </div>
        <div class="menu-item dropdown dropdown-mobile-full">
          <a
            href
            data-bs-toggle="dropdown"
            data-bs-display="static"
            class="menu-link"
          >
            <div class="menu-img online">
              <img
                src="assets/img/user/profile.jpg"
                alt="Profile"
                height="60"
              />
            </div>
            <div class="menu-text d-sm-block d-none">
              <span
                class="__cf_email__"
                data-cfemail="f2878197809c939f97b29391919d879c86dc919d9f"
              >
                Abdullah
              </span>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
            <a
              class="dropdown-item d-flex align-items-center"
              href
              onClick={() => navigate("/Setting")}
            >
              Acc. Settings{" "}
              <i class="bi bi-gear ms-auto text-theme fs-16px my-n1"></i>
            </a>
            <div class="dropdown-divider"></div>
            <a
              class="dropdown-item d-flex align-items-center"
              href
              onClick={handleLogout}
            >
              Logout{" "}
              <i class="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i>
            </a>
          </div>
        </div>
      </div>

      <form class="menu-search" method="POST" name="header_search_form">
        <div class="menu-search-container">
          <div class="menu-search-icon">
            <i class="bi bi-search"></i>
          </div>
          <div class="menu-search-input">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Search menu..."
            />
          </div>
          <div class="menu-search-icon">
            <a
              href
              data-toggle-class="app-header-menu-search-toggled"
              data-toggle-target=".app"
            >
              <i class="bi bi-x-lg"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Navbar;
