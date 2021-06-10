/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import DumyDicodingSource from '../../data/dumy.-dicoding';
import { restoTemplate } from '../../views/templates/template-html';

const daftarResto = {
  async render() {
    return `
    <div class="latest">
        <h1>Restaurant</h1>
        <div class="list" id="lis"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await DumyDicodingSource.GetRestauranList();
    const restoranContainer = document.querySelector('#lis');
    let dataList = '';
    restaurant.forEach((resto) => {
      dataList += restoTemplate(resto);
    });
    restoranContainer.innerHTML = dataList;
  },
};

export default daftarResto;
