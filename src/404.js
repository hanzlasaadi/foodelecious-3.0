import { useNavigate } from "react-router-dom";

function Error404({ message = "Not Logged In!", nav }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    if (nav) navigate(nav);
    else navigate("/Login");
  };
  return (
    <div id="app" class="app" style={{ marginRight: "20%" }}>
      <button
        class="app-sidebar-mobile-backdrop"
        data-toggle-target=".app"
        data-toggle-class="app-sidebar-mobile-toggled"
      ></button>

      <div id="content" class="app-content">
        <div class="error-page">
          <div class="error-page-content">
            <div class="card mb-5 mx-auto">
              <div class="card-body">
                <div class="card">
                  <div class="error-code" style={{ color: "#e57300" }}>
                    404
                  </div>
                </div>
              </div>
            </div>
            <h1>OOPS! {message}</h1>
            <h3>It seems like an error has occured!</h3>

            <button
              class="btn btn-outline-theme px-3 rounded-pill"
              onClick={handleNavigation}
            >
              <i class="fa fa-arrow-left me-1 ms-n1"></i> Go Back
            </button>
          </div>
        </div>
      </div>

      <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade">
        <i class="fa fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default Error404;
