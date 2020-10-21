<<<<<<< HEAD
class napbarAtas extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
        <a class="navbar-brand" href="index.html">LOGO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link home" href="index.html">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ttg" href="#about">ABOUT US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ktk" href="#kontak">CONTACT US</a>
            </li>
          </ul>
          <li class="nav-item form-inline my-2 my-lg-0 login">
            <a class="nav-link" href="#">Kevin Sinaga</a>
          </li>
        </div>
      </nav>
    </header>

    <div class="jumbotron jumbotron-fluid bg-transparent img-fluid">
      <div class="jumbo-mid">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-12 float-left">
              <h5>Lorem ipsum dolor sit amet consectetur </h5>
              <h1 class="display-4">FREELANCE</h1>
              <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, quisquam?</h5>
              <a class="btn tombol btn-lg" href="#" role="button">GET STARTED</a>
            </div>
            <div class="col-md-6 col-12">
              <img class="float-left img-fluid mx-auto d-block" src="../../image/jumboatas.svg" width="100%" height="auto">
            </div>
          </div>
        </div>
      </div>
    </div>
        `;

    }
}

=======
class napbarAtas extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
        <a class="navbar-brand" href="index.html">LOGO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link home" href="index.html">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ttg" href="#about">ABOUT US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ktk" href="#kontak">CONTACT US</a>
            </li>
          </ul>
          <li class="nav-item form-inline my-2 my-lg-0 login">
            <a class="nav-link" href="#">Kevin Sinaga</a>
          </li>
        </div>
      </nav>
    </header>

    <div class="jumbotron jumbotron-fluid bg-transparent img-fluid">
      <div class="jumbo-mid">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-12 float-left">
              <h5>Lorem ipsum dolor sit amet consectetur </h5>
              <h1 class="display-4">FREELANCE</h1>
              <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, quisquam?</h5>
              <a class="btn tombol btn-lg" href="#" role="button">GET STARTED</a>
            </div>
            <div class="col-md-6 col-12">
              <img class="float-left img-fluid mx-auto d-block" src="../../image/jumboatas.svg" width="100%" height="auto">
            </div>
          </div>
        </div>
      </div>
    </div>
        `;

    }
}

>>>>>>> ee767b732b6b993deda2d23bcdc633253649ce5b
customElements.define("napbar-atas", napbarAtas);