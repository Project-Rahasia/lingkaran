document.querySelector("#nav-bottom").innerHTML = `
<div class="container-fluid">
  <span class="navbar-brand text-white" href="#">Daftar Materi</span>
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Daftar Materi</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <!-- List course -->
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button ${getCollapsed(
              "materi-1"
            )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Bagian-Bagian Lingkaran
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse ${getChapClass(
            "materi-1"
          )}" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-1/0/" class="list-course-child ${getChapChild(
                  "materi-1/0/"
                )}">Pendahuluan</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-1/1/" class="list-course-child ${getChapChild(
                  "materi-1/1/"
                )}">Titik Pusat</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-1/2/" class="list-course-child ${getChapChild(
                  "materi-1/2/"
                )}">Diameter</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-1/3/" class="list-course-child ${getChapChild(
                  "materi-1/3/"
                )}">Jari-Jari</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-1/4/" class="list-course-child ${getChapChild(
                  "materi-1/4/"
                )}">Busur</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-1/5/" class="list-course-child ${getChapChild(
                  "materi-1/5/"
                )}">Tali Busur</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-1/6/" class="list-course-child ${getChapChild(
                  "materi-1/6/"
                )}">Apotema</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-1/7/" class="list-course-child ${getChapChild(
                  "materi-1/7/"
                )}">Tembereng</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-1/8/" class="list-course-child ${getChapChild(
                  "materi-1/8/"
                )}">Juring</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-1/9/" class="list-course-child ${getChapChild(
                  "materi-1/9/"
                )}">Latihan</a>
              </div>
              <div class="list-course-menu">
                <a href="/pages/materi-1/10/" class="list-course-child ${getChapChild(
                  "materi-1/10/"
                )}">Kuis</a>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button ${getCollapsed(
              "materi-2"
            )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Keliling Lingkaran
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse ${getChapClass(
            "materi-2"
          )}" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-2/0/" class="list-course-child ${getChapChild(
                  "materi-2/0/"
                )}">Pendahuluan</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-2/1/" class="list-course-child ${getChapChild(
                  "materi-2/1/"
                )}">Mengukur Keliling Suatu Lingkaran</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-2/2/" class="list-course-child ${getChapChild(
                  "materi-2/2/"
                )}">Menemukan Rumus Keliling Lingkaran</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-2/3/" class="list-course-child ${getChapChild(
                  "materi-2/3/"
                )}">Latihan</a>
              </div>
              <div class="list-course-menu">
                <a href="/pages/materi-2/4/" class="list-course-child ${getChapChild(
                  "materi-2/4/"
                )}">Kuis</a>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button ${getCollapsed(
              "materi-3"
            )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Luas Lingkaran
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse ${getChapClass(
            "materi-3"
          )}" aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-3/0/" class="list-course-child ${getChapChild(
                  "materi-3/0/"
                )}">Pendahuluan</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-3/1/" class="list-course-child ${getChapChild(
                  "materi-3/1/"
                )}">Menentukan Rumus Luas Lingkaran</a>
              </div>
              <div class="list-course-menu mb-3">
                <a href="/pages/materi-3/2/" class="list-course-child ${getChapChild(
                  "materi-3/2/"
                )}">Latihan</a>
              </div>
              <div class="list-course-menu">
                <a href="/pages/materi-3/3/" class="list-course-child ${getChapChild(
                  "materi-3/3/"
                )}">Kuis</a>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingFour">
            <button class="accordion-button ${getCollapsed(
              "latihan"
            )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Latihan
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse ${getChapClass(
            "latihan"
          )}" aria-labelledby="panelsStayOpen-headingFour">
            <div class="accordion-body">
              <div class="list-course-menu">
                <a href="/pages/latihan/" class="list-course-child ${getChapChild(
                  "latihan/"
                )}">Latihan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End List course -->
    </div>
  </div>
</div>
`;
