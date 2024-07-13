const elements = document.querySelectorAll("#categories > li.item");

console.log("Categories:", elements.length);
  
elements.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("ul>li").length);
});