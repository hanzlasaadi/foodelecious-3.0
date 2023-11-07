function ProductCard({ currentProduct }) {
  return (
    <>
      {currentProduct.productsList.map((curr) => {
        return (
          <div
            class="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4"
            data-type="meat"
            key={curr._id}
          >
            <div class="card h-100">
              <div class="card-body h-100 p-1">
                <a
                  href
                  class="pos-product"
                  data-bs-toggle="modal"
                  data-bs-target="#modalPosItem"
                >
                  <div
                    class="img"
                    style={{
                      backgroundImage: "url(./assets/img/pos/countryside.jpg",
                    }}
                  ></div>
                  <div class="info">
                    <div class="title">{curr.name}</div>
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
