/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import FavoriteRestaurantIdb from '../../data/database';
import { restoTemplate } from '../templates/template-html';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const favoriteResto = {
  async render() {
    return `
      <div class="latest">
        <h2>Favorite Restoran</h2>
        <div class="list" id="lis"></div>
        <loading-indicator></loading-indicator>
        <div class="card-list"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.card-list');
    const loading = document.querySelector('.loader');

    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();

    if (restaurant.length === 0) {
      restaurantContainer.innerHTML = '<favorite-message></favorite-message>';
    }

    loading.style.display = 'none';

    restaurant.forEach((data) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(data);
    });
  },
};

export default favoriteResto;
