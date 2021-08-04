class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <!-- Mobile Navbar -->
        <div class="menumob">
          <div class="iconmenu" id="menu"><button id="nav-drawwer">&#9776;</button></div>
          <div class="logomob">Restaurant Apps</div>
          <div class="logomob">&nbsp;</div>
        </div>
        <nav id="drawer" class="navmob">
          <ul class="navlistmob" id="nav-drawwer_mobile">
            <li class="navitemsmob"><a href="">Home</a></li>
            <li class="navitemsmob"><a href="#/Favorite">Favorite</a></li>
            <li class="navitemsmob"><a target="_blank" href="https://github.com/mochyusuf">About</a></li>
          </ul>
        </nav>
        <!-- Desktop Navbar -->
        <nav class="nav">
          <a class="logo" href="">Restaurant Apps</a>
          <ul class="navlist">
            <li class="navitems"><a href="">Home</a></li>
            <li class="navitemsmob"><a href="#/Favorite">Favorite</a></li>
            <li class="navitems"><a target="_blank" href="https://github.com/mochyusuf">About</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
