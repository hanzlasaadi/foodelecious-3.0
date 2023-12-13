function ProductCard({
  currentProduct,
  setShowModal,
  setProductClicked,
  setSubcategoryClicked,
  handleProductCardClick,
}) {
  console.log(currentProduct, "currProduct Test");
  return (
    <>
      <h1>{currentProduct.name}</h1>
      {currentProduct?.productsList?.map((curr) => {
        return (
          <div 
            className="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4"
            data-type="meat"
            key={curr._id}
          >
            <div className="card h-100">
              <div
                className="card-body h-100 p-1"
                style={{   cursor: "pointer" }}
              >
                <a
                 style={{   fontWeight:'bolder' }}
                data-product-id={`${curr._id}`}
                  onClick={(e) => {
                    setShowModal(true);
                    // const modalEl = document.getElementById("modalPosItem");
                    // console.log(e.currentTarget.dataset.productId, "id");
                    // setProductClicked();
                    handleProductCardClick(curr.steps);
                    setProductClicked(e.currentTarget.dataset.productId);
                    setSubcategoryClicked(currentProduct);
                    // const modalChild = modalEl.querySelector(".modal-dialog");
                    // modalEl.style.display = "block";
                    // modalEl.style.opacity = "100";
                    // modalChild.style.marginTop = "155px";
                  }}
                  href
                  className="pos-product"
                  data-bs-toggle="modal"
                  data-bs-target="#modalPosItem"
                >
                  {/* <div
                      className="img"
                    style={{
                      backgroundImage: "url(./assets/img/pos/countryside.jpg",
                    }}
                  ></div> */}
                  <div className="info">
                    <div className="title">{curr.name}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
