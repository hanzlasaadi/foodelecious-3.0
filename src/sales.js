import MenuBar from "./menu";
import Navbar from "./navbar";
function SalesReport() {
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
                        <h1 class="page-header mb-0">Sales</h1>
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
                    <ul class="nav nav-tabs nav-tabs-v2 px-4 bg-dark" >
                    <li class="nav-item me-3"><a href="#dateTab" class="nav-link px-2" data-bs-toggle="tab">Date Range</a></li>
                        <li class="nav-item me-3"><a href="#paymentTab" class="nav-link px-2" data-bs-toggle="tab">Payment Method</a></li>
                        <li class="nav-item me-3"><a href="#staffTab" class="nav-link px-2" data-bs-toggle="tab">Staff</a></li>
                        <li class="nav-item me-3"><a href="#saleTab" class="nav-link px-2" data-bs-toggle="tab">Sales type</a></li>
                    </ul>
                    <div class="tab-content p-4">
                        <div class="tab-pane fade show active" id="dateTab">

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
                                    <label class="form-check-label" for="product1"></label> &nbsp;Vat</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                                <button class="btn btn-outline-default  rounded-0" type="button"><span class="d-none d-md-inline "> <input type="checkbox" class="form-check-input" id="product1" />
                                    <label class="form-check-label" for="product1"></label>&nbsp;Discount</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                            </div>


                            <div class="table-responsive">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr style={{ textAlign: 'center', }}>
                                            <th class="border-top-0 pt-0 pb-2"></th>
                                            <th class="border-top-0 pt-0 pb-2">Order#</th>
                                            <th class="border-top-0 pt-0 pb-2">Date&Time</th>
                                            <th class="border-top-0 pt-0 pb-2">Staff</th>
                                            <th class="border-top-0 pt-0 pb-2">Payment Method</th>
                                            <th class="border-top-0 pt-0 pb-2"> Sales Type</th>
                                            <th class="border-top-0 pt-0 pb-2">Amount</th>
                                            <th class="border-top-0 pt-0 pb-2">Vat</th>
                                            <th class="border-top-0 pt-0 pb-2">Discount</th>
                                            <th class="border-top-0 pt-0 pb-2">Paid</th>


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
                                            <td class="align-middle" ><a href="#">0001</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Cash</td>
                                            <td class="py-1 align-middle"><span > Eat in</span></td>
                                            <td class="align-middle"><span> £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0002</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Online</td>
                                            <td class="py-1 align-middle"><span> Deliviero</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0003</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Online</td>
                                            <td class="py-1 align-middle"><span > JustEat</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0004</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Card</td>
                                            <td class="py-1 align-middle"><span > Take Away</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

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

                    <div class="tab-content ">
                    <div class="tab-pane fade show active" id="paymentTab">

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
                                    <label class="form-check-label" for="product1"></label> &nbsp;Vat</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                                <button class="btn btn-outline-default  rounded-0" type="button"><span class="d-none d-md-inline "> <input type="checkbox" class="form-check-input" id="product1" />
                                    <label class="form-check-label" for="product1"></label>&nbsp;Discount</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                            </div>


                            <div class="table-responsive">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr style={{ textAlign: 'center', }}>
                                            <th class="border-top-0 pt-0 pb-2"></th>
                                            <th class="border-top-0 pt-0 pb-2">Order#</th>
                                            <th class="border-top-0 pt-0 pb-2">Date&Time</th>
                                            <th class="border-top-0 pt-0 pb-2">Staff</th>
                                            <th class="border-top-0 pt-0 pb-2" style={{color:'red'}}>Payment Method</th>
                                            <th class="border-top-0 pt-0 pb-2"> Sales Type</th>
                                            <th class="border-top-0 pt-0 pb-2">Amount</th>
                                            <th class="border-top-0 pt-0 pb-2">Vat</th>
                                            <th class="border-top-0 pt-0 pb-2">Discount</th>
                                            <th class="border-top-0 pt-0 pb-2">Paid</th>


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
                                            <td class="align-middle" ><a href="#">0001</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Cash</td>
                                            <td class="py-1 align-middle"><span > Eat in</span></td>
                                            <td class="align-middle"><span> £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0002</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Online</td>
                                            <td class="py-1 align-middle"><span> Deliviero</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0003</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Online</td>
                                            <td class="py-1 align-middle"><span > JustEat</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0004</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Card</td>
                                            <td class="py-1 align-middle"><span > Take Away</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

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

                    <div class="tab-content ">
                    <div class="tab-pane fade show active" id="staffTab">

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
                                    <label class="form-check-label" for="product1"></label> &nbsp;Vat</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                                <button class="btn btn-outline-default  rounded-0" type="button"><span class="d-none d-md-inline "> <input type="checkbox" class="form-check-input" id="product1" />
                                    <label class="form-check-label" for="product1"></label>&nbsp;Discount</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                            </div>


                            <div class="table-responsive">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr style={{ textAlign: 'center', }}>
                                            <th class="border-top-0 pt-0 pb-2"></th>
                                            <th class="border-top-0 pt-0 pb-2">Order#</th>
                                            <th class="border-top-0 pt-0 pb-2">Date&Time</th>
                                            <th class="border-top-0 pt-0 pb-2"style={{color:'red'}}>Staff</th>
                                            <th class="border-top-0 pt-0 pb-2">Payment Method</th>
                                            <th class="border-top-0 pt-0 pb-2"> Sales Type</th>
                                            <th class="border-top-0 pt-0 pb-2">Amount</th>
                                            <th class="border-top-0 pt-0 pb-2">Vat</th>
                                            <th class="border-top-0 pt-0 pb-2">Discount</th>
                                            <th class="border-top-0 pt-0 pb-2">Paid</th>


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
                                            <td class="align-middle" ><a href="#">0001</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Cash</td>
                                            <td class="py-1 align-middle"><span > Eat in</span></td>
                                            <td class="align-middle"><span> £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0002</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Online</td>
                                            <td class="py-1 align-middle"><span> Deliviero</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0003</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Online</td>
                                            <td class="py-1 align-middle"><span > JustEat</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0004</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Card</td>
                                            <td class="py-1 align-middle"><span > Take Away</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

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

                    <div class="tab-content ">
                    <div class="tab-pane fade show active" id="saleTab">

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
                                    <label class="form-check-label" for="product1"></label> &nbsp;Vat</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                                <button class="btn btn-outline-default  rounded-0" type="button"><span class="d-none d-md-inline "> <input type="checkbox" class="form-check-input" id="product1" />
                                    <label class="form-check-label" for="product1"></label>&nbsp;Discount</span><span class="d-inline d-md-none"></span> &nbsp;</button>

                            </div>


                            <div class="table-responsive">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr style={{ textAlign: 'center', }}>
                                            <th class="border-top-0 pt-0 pb-2"></th>
                                            <th class="border-top-0 pt-0 pb-2">Order#</th>
                                            <th class="border-top-0 pt-0 pb-2">Date&Time</th>
                                            <th class="border-top-0 pt-0 pb-2">Staff</th>
                                            <th class="border-top-0 pt-0 pb-2">Payment Method</th>
                                            <th class="border-top-0 pt-0 pb-2"style={{color:'red'}}> Sales Type</th>
                                            <th class="border-top-0 pt-0 pb-2">Amount</th>
                                            <th class="border-top-0 pt-0 pb-2">Vat</th>
                                            <th class="border-top-0 pt-0 pb-2">Discount</th>
                                            <th class="border-top-0 pt-0 pb-2">Paid</th>


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
                                            <td class="align-middle" ><a href="#">0001</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Cash</td>
                                            <td class="py-1 align-middle"><span > Eat in</span></td>
                                            <td class="align-middle"><span> £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0002</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Online</td>
                                            <td class="py-1 align-middle"><span> Deliviero</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0003</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Online</td>
                                            <td class="py-1 align-middle"><span > JustEat</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr style={{ textAlign: 'center' }}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1" />
                                                    <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0004</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Card</td>
                                            <td class="py-1 align-middle"><span > Take Away</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

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

export default SalesReport;
