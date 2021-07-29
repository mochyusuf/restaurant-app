class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#maincontent" class="skip-link">Menuju ke konten</a>
    `;
  }
}

customElements.define('skip-content', SkipContent);
