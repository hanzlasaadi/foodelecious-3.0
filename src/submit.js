

import React from 'react';

function OrderSubmit() {
    return (
        <div>
          
            <div className="modal fade" id="exampleModalsubmit" tabIndex="-1" aria-labelledby="exampleModalLabelsubmit" aria-hidden="true"style={{borderRadius:'15px'}}>
                <div className="modal-dialog modal-dialog-centered" >
                    <div className="modal-content" style={{borderRadius:'25px'}}>
                        <div className="modal-header"  style={{border:'none'}}>
                            <h1 className="modal-title fs-5" id="exampleModalLabelsubmit"></h1>
                            <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"style={{backgroundColor:'grey'}}></button>
                        </div>
                        <div className="modal-body">
                            <h1 style={{textAlign:'center', color:'#e57300'}}>Order Submitted</h1>

                        </div>
                        <div class="modal-footer" style={{border:'none'}}>
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"  style={{backgroundColor:'white'}}>Close</button> */}
      </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSubmit;
