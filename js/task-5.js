const btn = document.querySelector("div > button.change-color")

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = (event) => {
  const element = document.querySelector("body")
  const colorName = document.querySelector(".color")
  const curentColor= getRandomHexColor()
  element.style.backgroundColor = curentColor
  colorName.textContent = curentColor
}

btn.addEventListener("click", color)