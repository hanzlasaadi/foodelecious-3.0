
function Error404() {
    return (


        <div id="app" class="app" style={{marginRight:'20%', }} >

       

            <button class="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>


            <div id="content" class="app-content" >
                <div class="error-page">
                    <div class="error-page-content">
                        <div class="card mb-5 mx-auto">
                            <div class="card-body">
                                <div class="card">
                                    <div class="error-code" style={{color:'#e57300'}}>404</div>

                                </div>
                            </div>

                        </div>
                        <h1>Oops!</h1>
                        <h3>We can't seem to find the page you're looking for</h3>

                        <button class="btn btn-outline-theme px-3 rounded-pill">
                            <i class="fa fa-arrow-left me-1 ms-n1"></i> Go Back
                        </button>
                    </div>
                </div>
            </div>


            <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>




        </div>

    );
}

export default Error404;
