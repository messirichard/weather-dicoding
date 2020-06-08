class ImageFigure extends HTMLElement {

    connectedCallback() {
        this.h2 = this.getAttribute("h2") || null;
        this.h3 = this.getAttribute("h3") || null;

        this.innerHTML = `
      <h2>Weather App Dicoding</h2>
              <h3>Search City name</h3>
    `;
    }
}

customElements.define("image-figure", ImageFigure);