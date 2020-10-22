import kontak from "../../../image/kontak.svg";
import map from "../../../image/map.svg";

class gabungKontak extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid bg-transparent img-fluid" id="kontak">
        <div class="jumbo-kontak">
            <div class="container">
                <div class="row">
                <div class="col-md-6 col-12 float-left">
                    <h1 class="how mt-5" align="center">HOW WE CAN HELP?</h1>
                </div>
                <div class="col-md-6 col-12 gambarKontak">
                    <img class="float-left img-fluid mx-auto d-block" src="${kontak}" width="100%" height="auto">
                </div>
                </div>
            </div>
            </div>
        </div>
  
      <div class="container">
        <div class="card-kontak">
          <div class="row">
            <div class="col">
              <div class="kiri-kontak">
                <h1>LOCATION</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit cumque eius ipsa beatae perspiciatis
                  accusantium. Nihil inventore natus tempora explicabo beatae, dolorum a perferendis perspiciatis
                  sapiente,
                  hic blanditiis ipsam quis.
                </p>
                <h5>PHONE NUMBER</h5>
                <p>0821 xxxx xxxx</p>
                <p>Mon - Friday, 8am - 4pm</p>
                <h5>PHONE NUMBER</h5>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div class="col">
              <img src="${map}" class="card-img-top" alt="..." width="100%" height="auto">
            </div>
          </div>
        </div>
      </div>
        `;
    }
}

customElements.define("gabung-kontak", gabungKontak);