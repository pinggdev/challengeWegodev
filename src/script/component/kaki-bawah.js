class kakiBawah extends HTMLElement {
    connectedCallback() {
        this.render(); {
        }
    }
    render() {
        this.innerHTML = `
        <footer class="kaki">
            Tugas Wegodev ~by Kevin Sinaga
        </footer>
        `;
    }
}

customElements.define("kaki-bawah", kakiBawah);