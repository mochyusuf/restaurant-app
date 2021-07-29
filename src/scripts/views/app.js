/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

import DrawerInitiator from '../utils/drawer-initiator.js';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

/* eslint-disable no-sequences */
class App {
  constructor({
    content, menu, hero, main, drawer,
  }) {
    this._content = content;
    this._menu = menu;
    this._hero = hero;
    this._main = main;
    this._drawer = drawer;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      content: this._content,
      menu: this._menu,
      hero: this._hero,
      main: this._main,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
