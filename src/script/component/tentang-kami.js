import aboutUs from "../../../image/aboutUs.svg";
import aboutUs2 from "../../../image/aboutUs2.svg";


class tentangKami extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
                <div class="jumbotron jumbotron-fluid bg-transparent img-fluid" id="about">
                <div class="about">
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <div class="container">
                    <div class="row">
                    <div class="col-md-6 col-12 float-left">
                        <h1 style="font-family: 'Raleway Medium', sans-serif;">About Us</h1>
                        <p style="font-family: 'Raleway regular', sans-serif;">Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugit cumque eius ipsa beatae perspiciatis
                        accusantium. Nihil inventore natus tempora explicabo beatae, dolorum a perferendis perspiciatis
                        sapiente,
                        hic blanditiis ipsam quis.</p>
                        <p style="font-family: 'Raleway regular', sans-serif;">Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugit cumque eius ipsa beatae perspiciatis
                        accusantium. Nihil inventore natus tempora explicabo beatae, dolorum a perferendis perspiciatis
                        sapiente,
                        hic blanditiis ipsam quis.</p>
                    </div>
                    <div class="col-md-6 col-12">
                        <img class="float-left img-fluid mx-auto d-block" src="${aboutUs}" width="100%" height="auto">
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
            <br>
        
            <div class="history">
                <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12 float-left">
                    <img class="float-left img-fluid mx-auto d-block" src="${aboutUs2}" width="100%" height="auto">
                    </div>
                    <div class="col-md-6 col-12">
                    <h1 style="font-family: 'Raleway Medium', sans-serif;">History</h1>
                    <p style="font-family: 'Raleway regular', sans-serif;">Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugit cumque eius ipsa beatae perspiciatis
                        accusantium. Nihil inventore natus tempora explicabo beatae, dolorum a perferendis perspiciatis sapiente,
                        hic blanditiis ipsam quis.</p>
                    <p style="font-family: 'Raleway regular', sans-serif;">Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugit cumque eius ipsa beatae perspiciatis
                        accusantium. Nihil inventore natus tempora explicabo beatae, dolorum a perferendis perspiciatis sapiente,
                        hic blanditiis ipsam quis.</p>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                </div>
            </div>
        `;
    }
}

customElements.define("tentang-kami", tentangKami);