const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const galleryItems = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-image"></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItems);
const style = document.createElement("style");
style.textContent = `
  .gallery {
    display: flex;
    gap: 10px;
    list-style: none;
    padding: 0;
  }
  .gallery-item {
    flex: 1;
  }
  .gallery-image {
    width: 100%;
    height: auto;
    display: block;
  }
`;
document.head.append(style);