import google from "../../../image/google.png";
import amazon from "../../../image/amazon.png";
import ibm from "../../../image/ibm.png";
import netflix from "../../../image/netflix.png";

class partKami extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="container">
            <div class="row partner">
                <div class="col"><img src="${google}" alt="" width="100%" height="auto"></div>
                <div class="col"><img src="${amazon}" alt="" width="100%" height="auto"></div>
                <div class="col"><img src="${ibm}" alt="" width="100%" height="auto"></div>
                <div class="col"><img src="${netflix}" alt="" width="100%" height="auto"></div>
            </div>
        </div>
        `;
    }
}

customElements.define("part-kami", partKami);