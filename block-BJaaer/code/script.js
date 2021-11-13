let form = document.querySelector("form");
let modal = document.querySelector(".modal__overlay");
let modalInfo = document.querySelector(".modal_info");
let userData = {};

function handleSubmit(event) {
  event.preventDefault();
  
 userData.name = form.elements.name.value
 userData.email = form.elements.email.value
 userData.movies = form.elements.movies.value
 userData.color = form.elements.color.value
 userData.range = form.elements.range.value
 userData.book = form.elements.book.value
 userData.terms = form.elements.terms.check
  
  modal.classList.add("open");
  
  let close = document.querySelector(".modal__close");
  close.addEventListener("click", () => {
    modal.classList.remove("open")
  })
  displayInfo(userData)
}

function displayInfo(data = {}) {
  modalInfo.innerHTML = "";
    let h1 = document.createElement("h1")
    h1.innerText = "Hi ${data.name}
    let email = document.createElement("p")
    email.innerText = "Email: ${data.movie}"
    modalInfo.append(h1, email, choice, color, movie, book, terms)
}

form.addEventListener("submit", handleSubmit);
