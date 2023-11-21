

import React from 'react';

function OrderSubmit() {
    return (
        <div>
          
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor:'#e57c35'}}>
                            <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                            <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1 style={{textAlign:'center', color:'grey'}}>Order Submitted</h1>

                        </div>
                        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"  style={{backgroundColor:'white'}}>Close</button>
      </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSubmit;
