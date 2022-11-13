import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let instance = "";
const gallaryEl = document.querySelector('.gallery');

gallaryEl.insertAdjacentHTML('beforeend', createGallery(galleryItems));

function createGallery(galleryItems) {
   
    return galleryItems
     
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
        })
        .join('');
   
}
gallaryEl.addEventListener('click', onItemsClick);

function onItemsClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(event.target.dataset.source);

instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`)
  instance.show();

  window.addEventListener('keydown', onItemClose);
  
}
function onItemClose(event) {
  
  if (event.code !== "Escape") {
    return;
  }
  instance.close();
  window.removeEventListener('keydown', onItemClose);
}



