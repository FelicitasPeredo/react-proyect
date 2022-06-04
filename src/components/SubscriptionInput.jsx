import React from 'react'

function subscriptionInput() {

    const verifyEmail = () => {
        let inputValue = document.getElementById("userNameForSuscription").value;
        if ((inputValue.includes('@')) & (inputValue.includes('.com'))) {
            alert('You have suscribed sucessfully. Thank you!')
        }
        else {
            alert("Incorrect e-mail, try again.")
        }
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 32) {
            event.preventDefault();
            console.log('No se permiten espacios.')
        }
    }  

  return (
    <div class="relative">
        <input type="text" id='userNameForSuscription'placeholder="username@site.com" class="input input-bordered w-full pr-16" onKeyDown={handleKeyDown}/> 
        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none" onClick={verifyEmail}>Subscribe</button>
    </div>
  )
}

export default subscriptionInput