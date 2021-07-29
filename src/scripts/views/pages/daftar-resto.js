import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';

const daftarResto = {
  async render() {
    return `
      <div class="list-restaurant latest">
        <h1 class="title">Restaurant</h1>
        <loading-indicator></loading-indicator>
        <div class="list" id="lis">
          ${createSkeletonRestaurantTemplate(20)}
        </div>
      </div>
      <food-gallery></food-gallery>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#lis');
    const loading = document.querySelector('.loader');
    const gallery = document.querySelector('food-gallery');
    restaurantsContainer.innerHTML = '';
    gallery.style.display = 'none';

    try {
      const data = await RestaurantDbSource.listRestaurant();

      loading.style.display = 'none';
      gallery.style.display = 'block';

      data.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      loading.style.display = 'none';
      console.log(error);
      restaurantsContainer.innerHTML = '<error-message></error-message>';
    }
  },
};

export default daftarResto;
