/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable import/named */
/* eslint-disable comma-dangle */
import UrlParser from '../../routes/url-parser';
import DumyDicodingSource from '../../data/dumy.-dicoding';
import LikeButtonInitiator from '../../globals/like-btn-initiator';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FormReviewInitiator from '../../utils/form-review-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

/* eslint-disable no-unused-vars */
const detailResto = {
  async render() {
    return `
    <div class="latest">
      <h1 class="title">Detail Restoran</h2>
      <loading-indicator></loading-indicator>
      <div class="detail-content"></div>
      <div class="detail-form">
        <h1 class="add-review-title">Tambahkan review</h1>
        <div id="formReviewContainer"></div>
      </div>
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('.detail-content');
    const detailForm = document.querySelector('.detail-form');
    const loading = document.querySelector('.loader');
    const addReviewTitle = document.querySelector('.add-review-title');

    try {
      const data = await RestaurantDbSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);
      console.log(data);
      loading.style.display = 'none';
      addReviewTitle.style.display = 'block';
      window.scrollTo(0, 0);

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: data.restaurant.id,
          name: data.restaurant.name,
          description: data.restaurant.description,
          pictureId: data.restaurant.pictureId,
          city: data.restaurant.city,
          rating: data.restaurant.rating,
        },
      });

      await FormReviewInitiator.init({
        formReviewContainer: document.querySelector('#formReviewContainer'),
        id: data.restaurant.id,
      });
    } catch (error) {
      console.log(error);
      loading.style.display = 'none';
      restaurantContainer.innerHTML = '<error-message></error-message>';
      detailForm.style.display = 'none';
    }
  },
};

export default detailResto;
