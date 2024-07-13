const inputName = document.querySelector("#name-input")

const greetName = (event) => {
  const greetinName = document.querySelector("#name-output")
  if (inputName.value.trim() == "") return greetinName.textContent = "Anonymous"
  greetinName.textContent = inputName.value.trim() 
}

inputName.addEventListener("input",greetName)