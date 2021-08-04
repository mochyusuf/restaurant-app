class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <!-- Jumbotron -->
        <div class="hero">
          <div class="heroinner">
            <h1 class="herotitle">Restaurant Apps</h1>
            <p class="herosubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
    `;
  }
}

customElements.define('hero-image', HeroImage);
