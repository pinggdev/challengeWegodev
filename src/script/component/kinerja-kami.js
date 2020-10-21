<<<<<<< HEAD
class kinerjaKami extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col">
                <div class="card">
                    <img src="/image/card1.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" align="center">LOREM</h5>
                    <p class="card-text" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                        repellat rerum laborum incidunt in sapiente!</p>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="card">
                    <img src="/image/card2.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" align="center">LOREM</h5>
                    <p class="card-text" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                        repellat rerum laborum incidunt in sapiente!</p>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="card">
                    <img src="/image/card3.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" align="center">LOREM</h5>
                    <p class="card-text" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                        repellat rerum laborum incidunt in sapiente!</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `;
    }
}

=======
class kinerjaKami extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col">
                <div class="card">
                    <img src="/image/card1.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" align="center">LOREM</h5>
                    <p class="card-text" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                        repellat rerum laborum incidunt in sapiente!</p>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="card">
                    <img src="/image/card2.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" align="center">LOREM</h5>
                    <p class="card-text" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                        repellat rerum laborum incidunt in sapiente!</p>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="card">
                    <img src="/image/card3.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" align="center">LOREM</h5>
                    <p class="card-text" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                        repellat rerum laborum incidunt in sapiente!</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `;
    }
}

>>>>>>> ee767b732b6b993deda2d23bcdc633253649ce5b
customElements.define("kinerja-kami", kinerjaKami);