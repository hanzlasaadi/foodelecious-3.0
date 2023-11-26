import MenuBar from "./menu";
import Navbar from "./navbar";

function CashDrawer() {
    return (
        <>

            <div id="app" className="app">
                <Navbar />

                <MenuBar />

                <button className="app-sidebar-mobile-backdrop" data-toggle-target=".app"
                    data-toggle-class="app-sidebar-mobile-toggled"></button>
                <div id="content" className="app-content" >
                    <div class="container">
                        <div className="d-flex "><i class="bi bi-wallet2 mx-2 mt-1" style={{ fontSize: 'larger' }}></i> <h2>Cash Drawer</h2><br></br></div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="totalCash">Total Cash in Locker</label>
                                    <input type="text" class="form-control bg-white" id="totalCash" placeholder="£1000" readonly />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="currentCash">Current Cash in Drawer</label>
                                    <input type="text" class="form-control bg-white" id="currentCash" placeholder="£100" readonly />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group mt-3">
                                    <label for="cashLimit">Set Cash Drawer Limit</label>
                                    <input type="number" class="form-control bg-white" id="cashLimit" placeholder="Enter cash drawer limit" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary text-white mt-2" style={{ backgroundColor: '#e57300' }}>Set Limit</button>
                    </div>


                </div>

                <a href data-toggle="scroll-to-top" className="btn-scroll-top fade">
                    <i className="fa fa-arrow-up"></i>
                </a>
            </div>
        </>
    );
}

export default CashDrawer;