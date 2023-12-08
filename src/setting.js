import MenuBar from "./menu";
import Navbar from "./navbar";
import ProfileModal from "./components/profileModal";

function Setting({ worker, setIsLoggedIn }) {
  return (
    <>
      <div id="app" className="app">
        <Navbar worker={worker} setIsLoggedIn={setIsLoggedIn} />

        <MenuBar />

        <button
          className="app-sidebar-mobile-backdrop"
          data-toggle-target=".app"
          data-toggle-class="app-sidebar-mobile-toggled"
        ></button>
        <div id="content" className="app-content">
          <div id="general" class="mb-5">
            <h4>
              <i class="far fa-user fa-fw text-theme"></i> General
            </h4>
            <p>
              View and update your general account information and settings.
            </p>
            <div class="card" style={{ border: "none" }}>
              <div class="list-group list-group-flush">
                <div class="list-group-item d-flex align-items-center">
                  <div class="flex-1 text-break">
                    <div class>Name</div>
                    <div
                      class="text-inverse text-opacity-50"
                      style={{ color: "#e57300" }}
                    >
                      {worker.name || "User's Name"}
                    </div>
                  </div>
                  <div class="w-100px">
                    <a
                      href
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalsetting"
                      class="btn btn-outline-default w-100px"
                    >
                      Edit
                    </a>
                  </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                  <div class="flex-1 text-break">
                    <div>Username</div>
                    <div
                      class="text-inverse text-opacity-50"
                      style={{ color: "#e57300" }}
                    >
                      {worker.email}
                    </div>
                  </div>
                  <div>
                    <a
                      href
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalsetting"
                      class="btn btn-outline-default w-100px"
                    >
                      Edit
                    </a>
                  </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                  <div class="flex-1 text-break">
                    <div>Role</div>
                    <div
                      class="text-inverse text-opacity-50"
                      style={{ color: "#e57300" }}
                    >
                      {worker.role}
                    </div>
                  </div>
                  <div>
                    <a
                      href
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalsetting"
                      class="btn btn-outline-default w-100px"
                    >
                      Edit
                    </a>
                  </div>
                </div>
                {/* <div class="list-group-item d-flex align-items-center">
                  <div class="flex-1 text-break">
                    <div>Email address</div>
                    <div
                      class="text-inverse text-opacity-50"
                      style={{ color: "#e57300" }}
                    >
                      abdullah@gmail.com
                    </div>
                  </div>
                  <div>
                    <a
                      href
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalsetting"
                      class="btn btn-outline-default w-100px"
                    >
                      Edit
                    </a>
                  </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                  <div class="flex-1 text-break">
                    <div>Password</div>
                  </div>
                  <div>
                    <a
                      href
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalsetting"
                      class="btn btn-outline-default w-100px"
                    >
                      Edit
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <a href data-toggle="scroll-to-top" className="btn-scroll-top fade">
          <i className="fa fa-arrow-up"></i>
        </a>
      </div>
      <ProfileModal />
    </>
  );
}

export default Setting;
