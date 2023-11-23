

import React from 'react';

function ProfileModal() {
    return (
        <div>
                                        {/* <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModalsetting"  class="btn btn-outline-default w-100px">Close</a> */}

            <div className="modal fade" id="exampleModalsetting" tabIndex="-1" aria-labelledby="exampleModalLabelsetting" aria-hidden="true" style={{ borderRadius: '15px' }}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit name</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <div class="row row-space-10">
                                    <div class="col-4"><input class="form-control" placeholder="First" /></div>
                                    <div class="col-4"><input class="form-control" placeholder="Middle" /></div>
                                    <div class="col-4"><input class="form-control" placeholder="Last" /></div>
                                </div>
                            </div>
                            <div class="alert bg-inverse bg-opacity-15">
                                <b>Please note:</b>If you change your name, you can't change it again for 60 days. Don't add any unusual capitalization, punctuation, characters or random words.
                                <a href="#/" class="alert-link">Learn more.</a>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Other Names</label>
                                <div>
                                    <a href="#/" class="btn btn-outline-default">
                                        <i class="fa fa-plus fa-fw"></i> Add other names
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-default" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-outline-theme">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileModal;
