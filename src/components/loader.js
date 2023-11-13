import "./componentStyles/loader.css";

function Loader({ showLoader }) {
  return (
    <div id="loader" className={showLoader ? "visible" : ""}>
      <div id="circle"></div>
    </div>
  );
}

export default Loader;
