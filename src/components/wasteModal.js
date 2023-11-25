import React from 'react';

function WasteModal(){
   
    return (

        <div>

            <div class="modal fade" id="wasteOrderModal" tabindex="-1" role="dialog" aria-labelledby="wasteOrderModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="wasteOrderModalLabel">Waste Order</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" style={{ backgroundColor: 'grey' }}></button>

                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="orderNumber">Order Number:</label>
                                    <input type="text" class="form-control" id="orderNumber" placeholder="Enter order number" />
                                </div><br></br>
                                <div class="form-group">
                                    <label for="wasteReason">Reason for Waste:</label>
                                    <textarea class="form-control" id="wasteReason" rows="3" placeholder="Enter reason"></textarea>
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-default" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-outline-theme" onclick="applyDiscount()" style={{backgroundColor:'red'}}><span style={{color:'white'}}>Waste</span></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default WasteModal;