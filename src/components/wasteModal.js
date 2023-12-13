import React from 'react';

function WasteModal(){
   
    return (

        <div>

            <div class="modal fade" id="wasteOrderModal" tabindex="-1" role="dialog" aria-labelledby="wasteOrderModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md pt-5" role="document">
                    <div class="modal-content "  style={{height:"70vh"}} >
                        <div class="modal-header ">
                            <h5 class="modal-title fs-3" id="wasteOrderModalLabel">Waste Order</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" style={{ backgroundColor: 'grey' }}></button>

                        </div>
                        <div class="modal-body" >
                            <form>
                                <div class="form-group pt-5" >
                                    <label className='fs-4' for="orderNumber">Order Number:</label>
                                    <input type="text" class="form-control    fs-4" id="orderNumber" placeholder="Enter order number" />
                                </div><br></br>
                                <div class="form-group">
                                    <label className='fs-4' for="wasteReason">Reason for Waste:</label>
                                    <textarea class="form-control    fs-4" id="wasteReason" rows="3" placeholder="Enter reason"></textarea>
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer  ">
                            <button type="button" class="btn btn-outline-default fs-3" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-outline-theme " onclick="applyDiscount()" style={{backgroundColor:'red', }}><span style={{color:'white'}} className='fs-3'>Waste</span></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default WasteModal;