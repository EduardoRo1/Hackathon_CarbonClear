import { AuthButton } from "@bundly/ic-react"

function App() {



  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CarbonClear - Purificador de Agua</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.css" rel="stylesheet" />

      </head>
      <body>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">CarbonClear</a>
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Características</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Precios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Contacto</a>
                </li>
                <li class="nav-item">
                  <AuthButton />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100" alt="Wild Landscape" />
            </div>
            <div class="carousel-item">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Camera" />
            </div>
            <div class="carousel-item">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100" alt="Exotic Fruits" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="container my-5">
          <h2>Subir Datos de Calidad del Agua</h2>
          <form>
            <div class="mb-3">
              <label for="phFile" class="form-label">Archivo de pH</label>
              <input class="form-control" type="file" id="phFile" accept=".csv" />
            </div>
            <div class="mb-3">
              <label for="turbidityFile" class="form-label">Archivo de Turbidez</label>
              <input class="form-control" type="file" id="turbidityFile" accept=".csv" />
            </div>
            <button type="submit" class="btn btn-primary">Subir Archivos</button>
          </form>

          <div class="traffic-light mt-5">
            <div class="light red"></div>
            <div class="light yellow"></div>
            <div class="light green"></div>
          </div>
        </div>
        <div class="container my-5">
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="card">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Others/images/43.jpg" class="card-img-top" alt="Fissure in Sandstone" />
                <div class="card-body">
                  <h5 class="card-title">Purificación Avanzada</h5>
                  <p class="card-text">Nuestro purificador utiliza tecnología de carbón activado para eliminar impurezas del agua.</p>
                  <a href="#!" class="btn btn-primary">Más Información</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Others/images/44.jpg" class="card-img-top" alt="Storm Clouds" />
                <div class="card-body">
                  <h5 class="card-title">Monitoreo Continuo</h5>
                  <p class="card-text">Monitoree la calidad del agua en tiempo real con nuestra aplicación móvil.</p>
                  <a href="#!" class="btn btn-primary">Más Información</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Others/images/45.jpg" class="card-img-top" alt="Sunset in the Mountains" />
                <div class="card-body">
                  <h5 class="card-title">Eficiencia Energética</h5>
                  <p class="card-text">Nuestros sistemas están diseñados para ser energéticamente eficientes y ecológicos.</p>
                  <a href="#!" class="btn btn-primary">Más Información</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="bg-light text-center text-lg-start">
          <div class="container p-4">
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 class="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-dark">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">Link 4</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-0">Links</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#!" class="text-dark">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2024 Copyright:
            <a class="text-dark" href="#">MDBootstrap.com</a>
          </div>
        </footer>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.js"></script>
      </body>
    </html>

  );
}

export default App;
