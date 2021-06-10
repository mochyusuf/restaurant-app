/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import FavoriteRestaurantIdb from '../../data/database';
import { restoTemplate } from '../templates/template-html';

const favoriteResto = {
  async render() {
    return `
      <div class="latest">
          <h2>Favorite Restoran</h2>
          <div class="list" id="lis"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllResto();
    const restoranContainer = document.querySelector('#lis');
    let dataList = '';
    restaurants.forEach((resto) => {
      dataList += restoTemplate(resto);
    });
    restoranContainer.innerHTML = dataList;
  },
};

export default favoriteResto;
