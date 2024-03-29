import RestaurantDbSource from '../data/restaurantdb-source';
import { createFormReviewTemplate } from '../views/templates/template-creator';

const FormReviewInitiator = {
  async init({ formReviewContainer, id }) {
    this.formReviewContainer = formReviewContainer;
    this.id = id;

    await this._renderForm();
  },

  async _renderForm() {
    this.formReviewContainer.innerHTML = createFormReviewTemplate();

    const btnSubmit = document.querySelector('.btnSubmit');

    btnSubmit.addEventListener('click', async (e) => {
      e.preventDefault();

      const inputName = document.querySelector('.inputName');
      const inputReview = document.querySelector('.inputReview');
      const form = document.querySelector('form');

      const reviewData = {
        id: this.id,
        name: inputName.value,
        review: inputReview.value,
      };

      if (inputName.value === '') {
        // eslint-disable-next-line no-alert
        alert('Nama tidak boleh kosong!');
      } else if (inputReview.value === '') {
        // eslint-disable-next-line no-alert
        alert('Review tidak boleh kosong!');
      } else {
        await RestaurantDbSource.reviewRestaurant(reviewData);
        form.reset();
        this._renderReview(reviewData.name, reviewData.review);
      }
    });
  },

  // eslint-disable-next-line no-underscore-dangle
  _renderReview(name, review) {
    const reviewContainer = document.querySelector('.list_item_review');
    const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

    const dataReview = `
      <div class="review-card">
        <span class="material-icons">account_circle</span>
        <p class="review-name">${name}</p>
        <p class="review-date">${date}</p>
        <p class="review-comment">${review}</p>
      </div>
    `;

    reviewContainer.innerHTML += dataReview;
  },
};

export default FormReviewInitiator;
