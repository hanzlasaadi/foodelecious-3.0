function NewOrder({ commodity }) {
  return (
    <div className="pos-order">
      <div className="pos-order-product">
        <div className="flex-1">
          <div className="h6 mb-1">{commodity.name}</div>
          {/* <div className="small">£ {commodity.productPrice}</div> */}
          <div className="small mb-2">
            {commodity.options?.map((opt) => {
              if (opt.type == "no") return null;
              return (
                <div>
                  {opt.stepName}: {opt.type} - £{opt.price}
                </div>
              );
            })}
          </div>
          <div className="d-flex">
            <a href="#/" className="btn btn-outline-theme btn-sm">
              <i className="fa fa-minus" />
            </a>
            <input
              type="text"
              className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 bg-white bg-opacity-25 text-center"
              readOnly=""
              defaultValue={1}
            />
            <a href="#/" className="btn btn-outline-theme btn-sm">
              <i className="fa fa-plus" />
            </a>
          </div>
        </div>
      </div>
      <div className="pos-order-price d-flex flex-column">
        <div style={{ fontWeight: "bold" }}>£{commodity.productPrice}</div>
        <div className="mt-auto d-flex flex-column gap-2">
          <button className="btn btn-sm btn-outline-gray-500">
            <i className="fa fa-pencil" />
          </button>
          <button className="btn btn-sm btn-outline-gray-500">
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
