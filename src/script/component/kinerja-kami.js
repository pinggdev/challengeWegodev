import card1 from "../../../image/card1.png";
import card2 from "../../../image/card2.png";
import card3 from "../../../image/card3.png";

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
                    <img src="${card1}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" align="center">LOREM</h5>
                    <p class="card-text" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                        repellat rerum laborum incidunt in sapiente!</p>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="card">
                    <img src="${card2}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" align="center">LOREM</h5>
                    <p class="card-text" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                        repellat rerum laborum incidunt in sapiente!</p>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="card">
                    <img src="${card3}" class="card-img-top" alt="...">
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

customElements.define("kinerja-kami", kinerjaKami);