/* eslint-disable jsx-a11y/anchor-is-valid */
function Login() {
  return (
    <div id="app" className="app app-full-height app-without-header">
      <div className="login">
        <div className="login-content">
          <form
            action="https://seantheme.com/hud/index.html"
            method="POST"
            name="login_form"
          >
            <h1 className="text-center">Sign In</h1>
            <div className="text-white text-opacity-50 text-center mb-4">
              For your protection, please verify your identity.
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control form-control-lg bg-white bg-opacity-5"
                defaultValue
                placeholder
              />
            </div>
            <div className="mb-3">
              <div className="d-flex">
                <label className="form-label">
                  Password <span className="text-danger">*</span>
                </label>
                <a
                  href="#"
                  className="ms-auto text-white text-decoration-none text-opacity-50"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                className="form-control form-control-lg bg-white bg-opacity-5"
                defaultValue
                placeholder
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="customCheck1"
                />
                <label className="form-check-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3"
            >
              Sign In
            </button>
            <div className="text-center text-white text-opacity-50">
              Don't have an account yet?
              <a href="page_register.html">Sign up</a>.
            </div>
          </form>
        </div>
      </div>
      <a href="#" data-toggle="scroll-to-top" className="btn-scroll-top fade">
        <i className="fa fa-arrow-up" />
      </a>
      <div className="app-theme-panel">
        <div className="app-theme-panel-container">
          <a
            href="javascript:;"
            data-toggle="theme-panel-expand"
            className="app-theme-toggle-btn"
          >
            <i className="bi bi-sliders" />
          </a>
          <div className="app-theme-panel-content">
            <div className="small fw-bold text-white mb-1">Theme Color</div>
            <div className="card mb-3">
              <div className="card-body p-2">
                <div className="app-theme-list">
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-pink"
                      data-theme-class="theme-pink"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Pink"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-red"
                      data-theme-class="theme-red"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Red"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-warning"
                      data-theme-class="theme-warning"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Orange"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-yellow"
                      data-theme-class="theme-yellow"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Yellow"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-lime"
                      data-theme-class="theme-lime"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Lime"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-green"
                      data-theme-class="theme-green"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Green"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item active">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-teal"
                      data-theme-class
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Default"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-info"
                      data-theme-class="theme-info"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Cyan"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-primary"
                      data-theme-class="theme-primary"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Blue"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-purple"
                      data-theme-class="theme-purple"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Purple"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-indigo"
                      data-theme-class="theme-indigo"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Indigo"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-list-item">
                    <a
                      href="javascript:;"
                      className="app-theme-list-link bg-gray-100"
                      data-theme-class="theme-gray-200"
                      data-toggle="theme-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Gray"
                    >
                      &nbsp;
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-arrow">
                <div className="card-arrow-top-left" />
                <div className="card-arrow-top-right" />
                <div className="card-arrow-bottom-left" />
                <div className="card-arrow-bottom-right" />
              </div>
            </div>
            <div className="small fw-bold text-white mb-1">Theme Cover</div>
            <div className="card">
              <div className="card-body p-2">
                <div className="app-theme-cover">
                  <div className="app-theme-cover-item active">
                    <a
                      href="javascript:;"
                      className="app-theme-cover-link"
                      style={{
                        backgroundImage:
                          "url(assets/img/cover/cover-thumb-1.jpg)",
                      }}
                      data-theme-cover-class
                      data-toggle="theme-cover-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Default"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-cover-item">
                    <a
                      href="javascript:;"
                      className="app-theme-cover-link"
                      style={{
                        backgroundImage:
                          "url(assets/img/cover/cover-thumb-2.jpg)",
                      }}
                      data-theme-cover-class="bg-cover-2"
                      data-toggle="theme-cover-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Cover 2"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-cover-item">
                    <a
                      href="javascript:;"
                      className="app-theme-cover-link"
                      style={{
                        backgroundImage:
                          "url(assets/img/cover/cover-thumb-3.jpg)",
                      }}
                      data-theme-cover-class="bg-cover-3"
                      data-toggle="theme-cover-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Cover 3"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-cover-item">
                    <a
                      href="javascript:;"
                      className="app-theme-cover-link"
                      style={{
                        backgroundImage:
                          "url(assets/img/cover/cover-thumb-4.jpg)",
                      }}
                      data-theme-cover-class="bg-cover-4"
                      data-toggle="theme-cover-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Cover 4"
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className="app-theme-cover-item">
                    <a
                      href="javascript:;"
                      className="app-theme-cover-link"
                      style={{
                        backgroundImage:
                          "url(assets/img/cover/cover-thumb-5.jpg)",
                      }}
                      data-theme-cover-class="bg-cover-5"
                      data-toggle="theme-cover-selector"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-bs-title="Cover 5"
                    >
                      &nbsp;
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-arrow">
                <div className="card-arrow-top-left" />
                <div className="card-arrow-top-right" />
                <div className="card-arrow-bottom-left" />
                <div className="card-arrow-bottom-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
