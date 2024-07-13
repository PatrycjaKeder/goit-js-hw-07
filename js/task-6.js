const btnCreate = document.querySelector("#data-create")
const btnDestroy = document.querySelector("#data-destroy")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroy = (event) => {
    const boxes = document.querySelectorAll("#boxes > div")
    boxes.forEach((box)=>box.remove())
 }   

const boxSize = (index) => {
    size = 30 + 10*(index-1);
    return size
}

const create = (event) => {
    let boxes=""
    const boxesToCreate = document.querySelector("input").value
    const parentBox = document.querySelector("#boxes")
    
    for (let index = 1; index <= boxesToCreate; index++) {
        const color = getRandomHexColor() 
        const actualsize = boxSize(index)
        boxes = boxes.concat(`<div style ="background-color: ${color}; width: ${actualsize}px; height: ${actualsize}px"></div>`);   
    } 
    destroy(event)
    parentBox.insertAdjacentHTML("afterbegin", boxes )
}



btnCreate.addEventListener("click", create)
btnDestroy.addEventListener("click", destroy)