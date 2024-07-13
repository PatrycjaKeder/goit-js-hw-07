const form = document.querySelector(".login-form")
console.log({ form })


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const msg = document.querySelector("p");
  console.log({ msg })
  
  if (((event.target.elements.email.value.trim() == "") || (event.target.elements.password.value.trim() == "")) & (msg == null)) {
    form.insertAdjacentHTML("beforeend", `<p style ="color:red; font-size:10px">All form fields must be filled in!</p>`);
  }
  if ((event.target.elements.email.value.trim() != "") & (event.target.elements.password.value.trim() != "")) {
    if (msg != null) msg.remove();

    const userCredentials = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value
    };

    form.reset();
    console.log("userCredentials:", userCredentials );
  }

})