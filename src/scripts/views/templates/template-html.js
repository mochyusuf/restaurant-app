/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */

import CONFIG from '../../globals/config';

const restoTemplate = (resto) => {
  return `
    <article>  
      <div class="list_item">
        <h3 class="list_item_city">${resto.city}</h3>
        <img class="list_item_thumb lazyload" src="${CONFIG.SMALL_IMAGE_URL(
          resto.pictureId
        )}" alt="${resto.name}" title="${resto.name}">
        <div class="list_item_content">
          <div class="list_item_rating">
            <i class="fas fa-star"></i>
            <a href="#" class="list_item_rating_value">${
              resto.rating
            }</a>
          </div>
          <h1 class="list_item_title"><a href="#">${resto.name}</a></h1>
          <div class="list_item_desc">${resto.description.slice(0, 200)}...</div>
          <a class="btn_detail" href="${`/#/detail/${resto.id}`}" aria-label="click untuk melihat detail makanan">Detail</a>
        </div>
      </div>
    </article>
     `;
};

const RestoDetailTemplate = (resto) => {
  return `
  <article>  
    <div class="list_item">
      <h3 class="list_item_city">${resto.city}</h3>
      <img class="thumb lazyload" src="${CONFIG.SMALL_IMAGE_URL(
        resto.pictureId
      )}" alt="${resto.name}" title="${resto.name}">
      <div class="list_item_content">
        <div class="list_item_rating">
          <i class="fas fa-star"></i>
          <a href="#" class="list_item_rating_value">${
            resto.rating
          }</a>
        </div>
        <h1 class="list_item_title"><a href="#">${resto.name}</a></h1>
        <div class="list_item_desc">${resto.description}</div>
        <div class="list_item_address">
          <h6>Alamat Restoran</h6>
          <p>${resto.address}</p>
        </div>
        <div class="list_item_categories">
          <h6>Kategori Restoran</h6>
          <p>${resto.categories
            .map((item) => item.name)
            .join(' - ')}</p>
        </div>
        <div class="list_item_food">
          <h6>Menu Makanan</h6>
          <p>${resto.menus.foods
            .map((item) => item.name)
            .join(', ')}</p>
        </div>
        <div class="list_item_drink">
          <h6>Menu Minuman</h6>
          <p>${resto.menus.drinks
            .map((item) => `<small>${item.name}</small>`)
            .join(', ')}</p>
        </div>
        <div class="list_item_review">
          <h6>Review</h6>
          ${resto.customerReviews.map((customer) => {
            return `<h6>${customer.name}</h6><small>${customer.review}</small><p>${customer.date}</p>`;
          })}
        </div>
      </div>
    </div>
  </article>`;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  restoTemplate,
  RestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
