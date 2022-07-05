import React from 'react'
import swal from 'sweetalert';

function subscriptionInput() {

    const verifyEmail = () => {
        let inputValue = document.getElementById("userNameForSuscription").value;
        if ((inputValue === '@.com') || (inputValue.startsWith('@'))) {
            swal("Oops..", "Incorrect e-mail, try again.", "error");
        }
        else if ((inputValue.includes('@')) & (inputValue.includes('.com'))){
            swal("Thank you!", "You have subscribed sucessfully.", "success");
        }
        else {
            swal("Oops..", "Incorrect e-mail, try again.", "error");
        }
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 32) {
            event.preventDefault();
        }
    }  

  return (
    <div class="relative">
        <input type="text" id='userNameForSuscription'placeholder="username@site.com" class="input input-bordered w-full pr-16" onKeyDown={handleKeyDown}/> 
        <button for="my-modal" class="btn btn modal-button btn-primary absolute top-0 right-0 rounded-l-none" onClick={verifyEmail}>Subscribe</button>
    </div>
  )
}

export default subscriptionInput