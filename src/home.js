import MenuBar from "./menu";
import Navbar from "./navbar";
function HomePage() {
    return (


        <div id="app" class="app" >

            <Navbar />


            <MenuBar />
            <button class="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>


            <div id="content" class="app-content">

                <div class="row">

                    <div class="col-xl-3 col-lg-6">

                        <div class="card mb-3">

                            <div class="card-body">

                                <div class="d-flex fw-bold small mb-3">
                                    <span class="flex-grow-1">SITE VISITORS</span>
                                    <a href="#" data-toggle="card-expand" class="text-dark text-opacity-50 text-decoration-none"><i class="bi bi-fullscreen"></i></a>
                                </div>


                                <div class="row align-items-center mb-2">
                                    <div class="col-7">
                                        <h3 class="mb-0" style={{ color: "grey" }} >700</h3>
                                    </div>
                                    <div class="col-5">
                                        <div class="mt-n2" data-render="apexchart" data-type="bar" data-title="Visitors" data-height="30"></div>
                                    </div>
                                </div>




                            </div>



                        </div>

                    </div>


                    <div class="col-xl-3 col-lg-6">

                        <div class="card mb-3">

                            <div class="card-body">

                                <div class="d-flex fw-bold small mb-3">
                                    <span class="flex-grow-1">STORE SALES</span>
                                    <a href="#" data-toggle="card-expand" class="text-dark text-opacity-50 text-decoration-none"><i class="bi bi-fullscreen"></i></a>
                                </div>


                                <div class="row align-items-center mb-2">
                                    <div class="col-7">
                                        <h3 class="mb-0" style={{ color: "grey" }} >$5000</h3>
                                    </div>
                                    <div class="col-5">
                                        <div class="mt-n2" data-render="apexchart" data-type="line" data-title="Visitors" data-height="30"></div>
                                    </div>
                                </div>



                            </div>



                        </div>

                    </div>


                    <div class="col-xl-3 col-lg-6">

                        <div class="card mb-3">

                            <div class="card-body">

                                <div class="d-flex fw-bold small mb-3">
                                    <span class="flex-grow-1">NEW MEMBERS</span>
                                    <a href="#" data-toggle="card-expand" class="text-dark text-opacity-50 text-decoration-none"><i class="bi bi-fullscreen"></i></a>
                                </div>


                                <div class="row align-items-center mb-2">
                                    <div class="col-7">
                                        <h3 class="mb-0" style={{ color: "grey" }} >100</h3>
                                    </div>
                                    <div class="col-5">
                                        <div class="mt-n3 mb-n2" data-render="apexchart" data-type="pie" data-title="Visitors" data-height="45"></div>
                                    </div>
                                </div>



                            </div>



                        </div>

                    </div>










                    <div class="col-xl-6">

                        <div class="card mb-3">

                            <div class="card-body">

                                <div class="d-flex fw-bold small mb-3">
                                    <span class="flex-grow-1">TOP PRODUCTS</span>
                                    <a href="#" data-toggle="card-expand" class="text-dark text-opacity-50 text-decoration-none"><i class="bi bi-fullscreen"></i></a>
                                </div>


                                <div class="table-responsive">
                                    <table class="w-100 mb-0 small align-middle text-nowrap">
                                        <tbody>




                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="position-relative">
                                                            <div class="bg-center bg-cover bg-no-repeat w-80px h-60px" style={{backgroundImage: "url(./public/assets/img/pos/bbq.jpg)"}}>
                                                            </div>
                                                            <div class="position-absolute top-0 start-0">
                                                                <span class="badge bg-black bg-opacity-50 rounded-0 d-flex align-items-center justify-content-center w-20px h-20px">1</span>
                                                            </div>
                                                        </div>
                                                        <div class="flex-1 ps-3" x>
                                                            <div class="mb-1"><small class="fs-9px fw-500 lh-1 d-inline-block rounded-0 badge bg-white bg-opacity-25 text-dark text-opacity-75 pt-5px">SKU000001</small></div>
                                                            <div class="text-dark fw-500">Pepporini Pizza</div>
                                                            10$
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <table style={{lineHeight:'1px'}}>
                                                        <tr>
                                                            <td class="pe-3">QTY:</td>
                                                            <td class="text-dark text-opacity-75 fw-500">50</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pe-3">REVENUE:</td>
                                                            <td class="text-dark text-opacity-75 fw-500">$0</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pe-3 text-nowrap">PROFIT:</td>
                                                            <td class="text-dark text-opacity-75 fw-500">$0</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td><a href="#" class="text-decoration-none text-dark"><i class="bi bi-search"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>



                        </div>

                    </div>


                    <div class="col-xl-6">

                        <div class="card mb-3">

                            <div class="card-body">

                                <div class="d-flex fw-bold small mb-3">
                                    <span class="flex-grow-1">ACTIVITY LOG</span>
                                    <a href="#" data-toggle="card-expand" class="text-dark text-opacity-50 text-decoration-none"><i class="bi bi-fullscreen"></i></a>
                                </div>


                                <div class="table-responsive">
                                    <table class="table table-striped table-borderless mb-2px small text-nowrap">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span class="d-flex align-items-center"style={{color:'black'}}>
                                                        <i class="bi bi-circle-fill fs-6px text-theme me-2"></i>
                                                        You have sold an item - $12
                                                    </span>
                                                </td>
                                                <td><small style={{color:'black'}}>just now</small></td>
                                               
                                                <td><a href="#" class="text-decoration-none text-dark"><i class="bi bi-search"></i></a></td>
                                            </tr>
                                           

                                        </tbody>
                                    </table>
                                </div>

                            </div>



                        </div>

                    </div>

                </div>



            </div>


            <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>




        </div>


    );
}

export default HomePage;
