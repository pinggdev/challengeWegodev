class awardKami extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="container">
      <h1 align="center" style="font-family: 'Raleway Medium', sans-serif;">Award</h1>
      <br>
      <div class="row">
        <div class="col-sm float-left">
          <div class="card card-award">
            <img src="/image/award.svg" class="card-img-top" alt="..." width="100%" height="auto">
            <div class="card-body">
              <h5 class="card-title" align="center">LOREM</h5>
              <p class="card-text" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                repellat rerum laborum incidunt in sapiente!</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card card-award">
            <img src="/image/award.svg" class="card-img-top" alt="..." width="100%" height="auto">
            <div class="card-body">
              <h5 class="card-title" align="center">LOREM</h5>
              <p class="card-text" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                repellat rerum laborum incidunt in sapiente!</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card card-award">
            <img src="/image/award.svg" class="card-img-top" alt="..." width="100%" height="auto">
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

customElements.define("award-kami", awardKami);