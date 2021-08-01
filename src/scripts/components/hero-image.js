class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <!-- Jumbotron -->
      <div class="hero lazyload" style="background-image: url('images/hero-image_1-small.jpg');">
        <div class="heroinner">
          <h1 class="herotitle">Restaurant Apps</h1>
          <p class="herosubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-image', HeroImage);
