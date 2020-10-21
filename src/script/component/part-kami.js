class partKami extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="container">
            <div class="row partner">
                <div class="col"><img src="/image/google.png" alt="" width="100%" height="auto"></div>
                <div class="col"><img src="/image/amazon.png" alt="" width="100%" height="auto"></div>
                <div class="col"><img src="/image/ibm.png" alt="" width="100%" height="auto"></div>
                <div class="col"><img src="/image/netflix.png" alt="" width="100%" height="auto"></div>
            </div>
        </div>
        `;
    }
}

customElements.define("part-kami", partKami);