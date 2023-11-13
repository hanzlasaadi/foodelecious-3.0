import MenuBar from "./menu";
import Navbar from "./navbar";
function ProductReport() {
    return (


        <div id="app" class="app" >

            <Navbar />


            <MenuBar />


            <button class="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>


            <div id="content" class="app-content">
                <div class="d-flex align-items-center mb-3">
                    <div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">PAGES</a></li>
                            {/* <li class="breadcrumb-item active">Sales</li> */}
                        </ul>
                        <h1 class="page-header mb-0"> Product Sales</h1>
                    </div>
                    {/* <div class="ms-auto">
                        <a href="#" class="btn btn-outline-theme"><i class="fa fa-plus-circle fa-fw me-1"></i> Create Orders</a>
                    </div> */}
                </div>
                <div class="mb-md-4 mb-3 d-md-flex">
                    <div class="mt-md-0 mt-2"><a href="#" class="text-black  text-opacity-75 text-decoration-none"><i class="fa fa-download fa-fw me-1 text-theme"></i> Export</a></div>
                    <div class="ms-md-4 mt-md-0 mt-2 dropdown-toggle">
                        <a href="#" data-bs-toggle="dropdown" class="text-black text-decoration-none">More Actions</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
                <div class="card" style={{ backgroundColor: 'white', border: 'none', borderRadius: '8px' }} >
                    <ul class="nav nav-tabs nav-tabs-v2 px-4" >
                        <li class="nav-item me-3">
                            <a href="#allTab" class="nav-link active px-2" data-bs-toggle="dropdown">Date Range</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                <div role="separator" class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </li>

                        <li class="nav-item me-3"><a href="#publishedTab" class="nav-link px-2" data-bs-toggle="tab">Product</a></li>
                        <li class="nav-item me-3"><a href="#expiredTab" class="nav-link px-2" data-bs-toggle="tab">Flavour</a></li>
                        <li class="nav-item me-3"><a href="#deletedTab" class="nav-link px-2" data-bs-toggle="tab">Size</a></li>
                    </ul>
                    <div class="tab-content p-4">
                        <div class="tab-pane fade show active" id="allTab">

                            <div class="input-group mb-4">
                                <div class="flex-fill position-relative">
                                    <div class="input-group">
                                        <input type="text" class="form-control px-35px" placeholder="Filter orders" />
                                        <div class="input-group-text position-absolute top-0 bottom-0 bg-none border-0 start-0" style={{ zIndex: "1020" }}>
                                            <i class="fa fa-search opacity-5"></i>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-outline-default  rounded-0" type="button"><span class="d-none d-md-inline "> <input type="checkbox" class="form-check-input" id="product1" />
                                    <label class="form-check-label" for="product1"></label> &nbsp;Waste</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                                <button class="btn btn-outline-default  rounded-0" type="button"><span class="d-none d-md-inline "> <input type="checkbox" class="form-check-input" id="product1" />
                                    <label class="form-check-label" for="product1"></label>&nbsp;Cancel</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                                    <button class="btn btn-outline-default  rounded-0" type="button"><span class="d-none d-md-inline "> <input type="checkbox" class="form-check-input" id="product1" />
                                    <label class="form-check-label" for="product1"></label> &nbsp;Vat</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                                <button class="btn btn-outline-default  rounded-0" type="button"><span class="d-none d-md-inline "> <input type="checkbox" class="form-check-input" id="product1" />
                                    <label class="form-check-label" for="product1"></label>&nbsp;Discount</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                            </div>


                            <div class="table-responsive">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr style={{ textAlign: 'center',  }}>
                                            <th class="border-top-0 pt-0 pb-2"></th>
                                            <th class="border-top-0 pt-0 pb-2">Date&Time</th>
                                            <th class="border-top-0 pt-0 pb-2">Menu</th>
                                            <th class="border-top-0 pt-0 pb-2">Flavour </th>
                                            <th class="border-top-0 pt-0 pb-2">  Size</th>
                                            <th class="border-top-0 pt-0 pb-2">Sale Qty</th>
                                            <th class="border-top-0 pt-0 pb-2">Waste Qty</th>
                                            <th class="border-top-0 pt-0 pb-2">Total Qty</th>
                                            <th class="border-top-0 pt-0 pb-2">Amount</th>
                                            <th class="border-top-0 pt-0 pb-2">VAT</th>
                                            <th class="border-top-0 pt-0 pb-2">Discount </th>
                                            <th class="border-top-0 pt-0 pb-2">Paid </th>
                                            <th class="border-top-0 pt-0 pb-2">Cancel</th>
                                            <th class="border-top-0 pt-0 pb-2">Balance</th>



                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Pizza</td>
                                            <td>Chese Tomato Pizza</td>
                                            <td class="py-1 align-middle"><span > 14 inches</span></td>
                                            <td class="align-middle"><span> 4</span></td>
                                            <td class="align-middle">0</td>
                                            <td class="align-middle">4</td>
                                            <td class="align-middle">£34.99</td>
                                            <td class="align-middle">£0.00</td>
                                            <td class="align-middle">£0.00</td>
                                            <td class="align-middle">£34.99</td>
                                            <td class="align-middle">£4.99</td>
                                            <td class="align-middle">£30.99</td>



                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Pizza</td>
                                            <td>Chese Tomato Pizza</td>
                                            <td class="py-1 align-middle"><span > 14 inches</span></td>
                                            <td class="align-middle"><span> 4</span></td>
                                            <td class="align-middle">0</td>
                                            <td class="align-middle">4</td>
                                            <td class="align-middle">£34.99</td>
                                            <td class="align-middle">£0.00</td>
                                            <td class="align-middle">£0.00</td>
                                            <td class="align-middle">£34.99</td>
                                            <td class="align-middle">£4.99</td>
                                            <td class="align-middle">£30.99</td>



                                        </tr>


                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Pizza</td>
                                            <td>Chese Tomato Pizza</td>
                                            <td class="py-1 align-middle"><span > 14 inches</span></td>
                                            <td class="align-middle"><span> 4</span></td>
                                            <td class="align-middle">0</td>
                                            <td class="align-middle">4</td>
                                            <td class="align-middle">£34.99</td>
                                            <td class="align-middle">£0.00</td>
                                            <td class="align-middle">£0.00</td>
                                            <td class="align-middle">£34.99</td>
                                            <td class="align-middle">£4.99</td>
                                            <td class="align-middle">£30.99</td>



                                        </tr>


                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Pizza</td>
                                            <td>Chese Tomato Pizza</td>
                                            <td class="py-1 align-middle"><span > 14 inches</span></td>
                                            <td class="align-middle"><span> 4</span></td>
                                            <td class="align-middle">0</td>
                                            <td class="align-middle">4</td>
                                            <td class="align-middle">£34.99</td>
                                            <td class="align-middle">£0.00</td>
                                            <td class="align-middle">£0.00</td>
                                            <td class="align-middle">£34.99</td>
                                            <td class="align-middle">£4.99</td>
                                            <td class="align-middle">£30.99</td>



                                        </tr>


                                    </tbody>
                                </table>
                            </div>

                            <div class="d-md-flex align-items-center" >
                                <div class="me-md-auto text-md-left text-center mb-2 mb-md-0" >
                                    Showing 1 to 10 of 57 entries
                                </div>
                                <ul class="pagination mb-0 justify-content-center" style={{ border: '1px solid lightgrey', borderRadius: '10px' }}>
                                    <li class="page-item disabled"><a class="page-link">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="#" >1</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>




        </div>

    );
}

export default ProductReport;
