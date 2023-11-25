

import React from 'react';

function ProfileModal() {
    return (
        <div>
            {/* <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModalsetting"  class="btn btn-outline-default w-100px">Close</a> */}

            <div class="modal" id="changeDetailsModal" tabindex="-1" role="dialog" aria-labelledby="changeDetailsModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="changeDetailsModalLabel">Change Details</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" style={{ backgroundColor: 'grey' }}></button>

            </div>
            <div class="modal-body">
                {/* <!-- Change Name Form --> */}
                <form id="changeNameForm">
                    <div class="form-group mt-2">
                        <label for="newName">New Name:</label>
                        <input type="text" class="form-control mt-2" id="newName" placeholder="Enter new name"/>
                    </div>
                    <button type="button" class="btn btn-primary text-white mt-2" style={{backgroundColor:'#e57300'}} onclick="changeName()">Change Name</button>
                </form>

                {/* <!-- Change Username Form --> */}
                <form id="changeUsernameForm">
                    <div class="form-group mt-2">
                        <label for="newUsername">New Username:</label>
                        <input type="text" class="form-control mt-2" id="newUsername" placeholder="Enter new username"/>
                    </div>
                    <button type="button" class="btn btn-primary text-white mt-2" style={{backgroundColor:'#e57300'}} onclick="changeUsername()">Change Username</button>
                </form>

                {/* <!-- Change Password Form --> */}
                <form id="changePasswordForm">
                    <div class="form-group mt-2">
                        <label for="newPassword">New Password:</label>
                        <input type="password" class="form-control mt-2" id="newPassword" placeholder="Enter new password"/>
                    </div>
                    <div class="form-group mt-2">
                        <label for="confirmPassword">Confirm Password:</label>
                        <input type="password" class="form-control mt-2" id="confirmPassword" placeholder="Confirm new password"/>
                    </div>
                    <button type="button" class="btn btn-primary text-white mt-2" style={{backgroundColor:'#e57300'}} onclick="changePassword()">Change Password</button>
                </form>
            </div>
            <div class="modal-footer">
                            <button type="button" class="btn btn-outline-default" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-outline-theme" onclick="applyDiscount()">Save changes</button>
                        </div>
        </div>
    </div>
</div>

        </div>
    );
}

export default ProfileModal;
