Rules for form validation:

Username can't be less than 4 characters
Name can't be numbers
Email must contain the symbol @
Email must be at least 6 characters
Phone numbers can only be a number
Length of phone number can't be less than 7
Password and confirm password must be same.
Messages for error:

__ can't be less than __ characters (replace __ with field name)
You can't use number in the name field
Not a valid email
Phone number can only contain numbers
Once the form is valid it should alert User Added Successfully!

  
  let form = document.querySelector("form");
let userInfo = {};
let errorMsg = {}

function displayError(name) {
    let elm = form.elements[name]
    elm.nextElementSibling.innerText = errorMessages[name];
    elm.parentElement.classList.add("error")

}
function displaySuccess(name) {
    let elm = form.elements[name]
    elm.nextElementSibling.innerText = "";
    errorMsg[name] = ""; 
    elm.nextElementSibling.innerText = errorMessages[name];
    elm.parentElement.classList.remove("error")
    elm.parentElement.classList.add("success")

}

function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    const username = elemenets.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const passwordCheck = elements["password-check"].value;

    if(username.length <= 4) {
        errorMsg.username = "Username can`t be less than 4 characters"
        displayError("username")
    } else {
        displaySuccess(name)
    }

}

form.addEventListener("submit", handleSubmit)
