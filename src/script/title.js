class ImageFigure extends HTMLElement {

    connectedCallback() {
        this.h2 = 'Weather App Dicoding';
        this.h3 = 'Search City name';

        this.innerHTML = `
      <h2>${this.h2}</h2>
              <h3>${this.h3}</h3>
    `;
    }
}

customElements.define("image-figure", ImageFigure);