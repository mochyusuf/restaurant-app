import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/navigation-bar';
import './components/hero-image';
import './components/food-gallery';
import './components/footer-bar';
import './components/skip-content';
import './components/loading-indicator';
import './components/error-message';
import './components/favorite-message';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  content: document.querySelector('.conten'),
  menu: document.querySelector('#menu'),
  hero: document.querySelector('.hero'),
  main: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
