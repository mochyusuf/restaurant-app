/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

const CONFIG = {
  KEY: 1524623,
  BASE_URL: `https://restaurant-api.dicoding.dev/`,
  SMALL_IMAGE_URL: (id) => `${CONFIG.BASE_URL}images/small/${id}`,
  MEDIUM_IMAGE_URL: (id) => `${CONFIG.BASE_URL}images/medium/${id}`,
  LARGE_IMAGE_URL: (id) => `${CONFIG.BASE_URL}images/large/${id}`,
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'Restaurant Apps',
  DATABASE_NAME: 'RestaurantAppsdb',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
