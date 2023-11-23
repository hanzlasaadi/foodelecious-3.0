/* eslint-disable jsx-a11y/anchor-is-valid */
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div id="app" className="app app-full-height app-without-header">
      <div className="login">
        <div className="login-content">
          <form
            action=""
            method="POST"
            name="login_form"
          >
            <h1 className="text-center">Sign In</h1>
            <div  className="text-white text-opacity-50 text-center mb-4">
              <span style={{color:'black'}}>For your protection, please verify your identity.</span>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control form-control-lg bg-white bg-opacity-5"
                defaultValue
                placeholder="e.g xyz@gmail.com"
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
                <span style={{color:'#e57300'}}> Forgot password?</span> 
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
           <span style={{color:'black'}}>   Don't have an account yet?</span>
              <a href=""style={{color:'#e75300'}} onClick={() => navigate('/Register')}>Sign up</a>.
            </div>
          </form>
        </div>
      </div>
     
     
    </div>
  );
}

export default Login;
