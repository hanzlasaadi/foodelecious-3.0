import MenuBar from "./menu";
import Navbar from "./navbar";
function HomePage() {
    return (


        <div id="app" class="app" >

            <Navbar />


            <MenuBar />
            <button class="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>


            <div id="content" class="app-content">

            <div class="col-xl-3 col-lg-6">

<div class="card ">

<div class="card-body">

<div class="d-flex fw-bold small mb-3">
<span class="flex-grow-1">SITE VISITORS</span>
<a href="#" data-toggle="card-expand" class="text-white text-opacity-50 text-decoration-none"><i class="bi bi-fullscreen"></i></a>
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
