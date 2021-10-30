const getChapClass = (path) => {
  return this.location.pathname.substr(7, 8) === path ? "show" : "";
};

const getCollapsed = (path) => {
  return this.location.pathname.substr(7, 8) !== path ? "collapsed" : "";
};

const getChapChild = (path) => {
  return this.location.pathname.substring(7) === path ? "course-active" : "";
};

document.querySelector(".list-course").innerHTML = `
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
        <div class="list-course mb-3">
          <a href="/pages/materi-1/0/" class="list-course-child ${getChapChild(
            "materi-1/0/"
          )}">Pendahuluan</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-1/1/" class="list-course-child ${getChapChild(
            "materi-1/1/"
          )}">Titik Pusat</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-1/2/" class="list-course-child ${getChapChild(
            "materi-1/2/"
          )}">Diameter</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-1/3/" class="list-course-child ${getChapChild(
            "materi-1/3/"
          )}">Jari-Jari</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-1/4/" class="list-course-child ${getChapChild(
            "materi-1/4/"
          )}">Busur</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-1/5/" class="list-course-child ${getChapChild(
            "materi-1/5/"
          )}">Tali Busur</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-1/6/" class="list-course-child ${getChapChild(
            "materi-1/6/"
          )}">Apotema</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-1/7/" class="list-course-child ${getChapChild(
            "materi-1/7/"
          )}">Tembereng</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-1/8/" class="list-course-child ${getChapChild(
            "materi-1/8/"
          )}">Juring</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-1/9/" class="list-course-child ${getChapChild(
            "materi-1/9/"
          )}">Latihan</a>
        </div>
        <div class="list-course mb-3">
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
        <div class="list-course mb-3">
          <a href="/pages/materi-2/0/" class="list-course-child ${getChapChild(
            "materi-2/0/"
          )}">Pendahuluan</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-2/1/" class="list-course-child ${getChapChild(
            "materi-2/1/"
          )}">Mengukur Keliling Suatu Lingkaran</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-2/2/" class="list-course-child ${getChapChild(
            "materi-2/2/"
          )}">Menemukan Rumus Keliling Lingkaran</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-2/3/" class="list-course-child ${getChapChild(
            "materi-2/3/"
          )}">Latihan</a>
        </div>
        <div class="list-course mb-3">
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
        <div class="list-course mb-3">
          <a href="/pages/materi-3/0/" class="list-course-child ${getChapChild(
            "materi-3/0/"
          )}">Pendahuluan</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/materi-3/1/" class="list-course-child ${getChapChild(
            "materi-3/1/"
          )}">Menentukan Rumus Luas Lingkaran</a>
        </div>
        <div class="list-course mb-3">
          <a href="#" class="list-course-child">Latihan</a>
        </div>
        <div class="list-course mb-3">
          <a href="#" class="list-course-child">Kuis</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;
