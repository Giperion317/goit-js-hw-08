// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galery = document.querySelector('.gallery');

galery.insertAdjacentHTML('beforeend', galeryCreate(galleryItems));

function galeryCreate(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li>
  <a class="gallery__item" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
}

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
