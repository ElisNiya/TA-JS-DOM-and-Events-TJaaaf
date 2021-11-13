let form = document.querySelector("form");

let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  name = form.elements.name.value
  email = form.elements.email.value
 movies = form.elements.movies.value
 color = form.elements.color.value
 range = form.elements.range.value
 book = form.elements.book.value
 terms = form.elements.terms.value
}



form.addEventListener("submit", handleSubmit);
