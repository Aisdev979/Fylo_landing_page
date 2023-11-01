const userEmail = document.querySelector('#email');
const submitBtn = document.querySelector('#submitBtn');
const emailErrorMessage = document.querySelector('.error');
const image = document.querySelector('#image');

const validEmailRegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

function validEmail(userEmail) {
    return validEmailRegExp.test(userEmail);
 }
    
function isValidEmail() {
    if (userEmail.value.trim() === "") {
        emailErrorMessage.textContent = `Email field can't be empty`;
    } else if (validEmail(userEmail.value.trim())) {
        emailErrorMessage.textContent = "";
    } else {
        emailErrorMessage.textContent   = `Not a valid Email`;
    }
}

submitBtn.addEventListener("click", () => {
    isValidEmail();
});


let changeImage = () => {
    if(window.innerWidth > 800) {
        image.style.backgroundImage = './images/bg-curvy-desktop.svg';
        // image.src = './images/bg-curvy-desktop.svg';
    } else {
        // image.src = './images/bg-curvy-mobile.svg';
        image.style.backgroundImage = './images/bg-curvy-mobile.svg';
    }
}

window.onload = changeImage;
window.onresize = changeImage;