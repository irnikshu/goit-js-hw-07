import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallaryEl = document.querySelector('.gallery');

gallaryEl.insertAdjacentHTML('beforeend', createGallery(galleryItems));

function createGallery(galleryItems) {
   
    return galleryItems
     
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
</div>`
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

    const gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        overlayOpacity: 0.8,
        closeText: '×',
        scrollZoom: false,

});
}

