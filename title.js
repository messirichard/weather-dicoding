class Title extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
      <h2>Weather App Dicoding</h2>
      <h3>Search City name</h3>
    `;
    }
}

customElements.define("title", Title);