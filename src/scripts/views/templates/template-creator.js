import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="card card-restaurant-item">  
    <div class="list_item">
      <h3 class="list_item_city">${restaurant.city}</h3>
      <img class="thumb lazyload" src="${API_ENDPOINT.IMG_RESTAURANT}/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
      <div class="list_item_content">
        <div class="list_item_rating">
          <i class="fas fa-star"></i>
          <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
        </div>
        <h1 class="list_item_title"><a href="#">${restaurant.name}</a></h1>
        <div class="list_item_desc">${restaurant.description}</div>
        <div class="list_item_address">
          <h6>Alamat Restoran</h6>
          <p>${restaurant.address}</p>
        </div>
        <div class="list_item_categories">
          <h6>Kategori Restoran</h6>
          ${restaurant.categories.map((categori) => `
            <span class="category-name">${categori.name}</span>
          `).join('')}
        </div>
        <div class="list_item_food">
          <h6>Menu Makanan</h6>
          ${restaurant.menus.foods.map((food) => `
            <span class="food-name">${food.name}</span>
          `)}
        </div>
        <div class="list_item_drink">
          <h6>Menu Minuman</h6>
          ${restaurant.menus.drinks.map((drink) => `
            <span class="drink-name">${drink.name}</span>
          `)}
        </div>
        <div class="list_item_review">
          <h6>Review</h6>
          ${restaurant.customerReviews.map((review) => `
            <div class="review-card">
              <p class="review-name"><i class="fas fa-user"></i>  ${review.name}</p>
              <p class="review-date"><i class="fas fa-calendar-alt"></i> ${review.date}</p>
              <p class="review-comment">${review.review}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </article>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <article class="card card-restaurant-item">
        <div class="list_item">
          <h3 class="list_item_city">Lorem ipsum dolor sit.</h3>
          <img class="list_item_thumb lazyload" src="./placeholder.png" alt="skeleton" title="skeleton" crossorigin="anonymous">
          <div class="list_item_content">
            <div class="list_item_rating">
              <i class="fas fa-star"></i>
              <a href="#" class="list_item_rating_value">5</a>
            </div>
            <h1 class="list_item_title"><a href="#">Lorem ipsum dolor sit.</a></h1>
            <div class="list_item_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</div>
            <a class="btn_detail" aria-label="click untuk melihat detail makanan">Detail</a>
          </div>
        </div>
      </article>
    `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
  <article class="card card-restaurant-item">  
    <div class="list_item">
      <h3 class="list_item_city">${restaurant.city}</h3>
      <img class="list_item_thumb lazyload" src="${API_ENDPOINT.IMG_RESTAURANT}/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
      <div class="list_item_content">
        <div class="list_item_rating">
          <i class="fas fa-star"></i>
          <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
        </div>
        <h1 class="list_item_title card-title">
          <a href="/#/detail/${restaurant.id}" class="card-restaurant-link">
            ${restaurant.name}
          </a>
        </h1>
        <div class="list_item_desc">${restaurant.description.slice(0, 200)}...</div>
        <a class="btn_detail" href="${`/#/detail/${restaurant.id}`}" aria-label="click untuk melihat detail makanan">Detail</a>
      </div>
    </div>
  </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFormReviewTemplate = () => `
  <form class="review">
    <div class="input">
      <label for="inputName">Nama</label>
      <input type="text" name="nama" class="inputName" id="inputName" placeholder="Masukan nama">
    </div>
    <div class="input">
      <label for="inputReview">Review</label>
      <textarea name="review" class="inputReview" id="inputReview" placeholder="Masukan review"></textarea>
    </div>
    <button type="submit" class="btnSubmit">Kirim</button>
  </form>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createFormReviewTemplate,
  createSkeletonRestaurantTemplate,
};
