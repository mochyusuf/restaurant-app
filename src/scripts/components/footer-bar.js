class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <div class="copyright">
          <p>Copyright © 2021 - Restaurant Apps</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
