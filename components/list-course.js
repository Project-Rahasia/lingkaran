const getChapClass = (path) => {
  return this.location.pathname.substr(7, 8) === path ? "show" : "";
};

const getChapChild = (path) => {
  return this.location.pathname.substring(7) === path ? "course-active" : "";
};

document.querySelector(".list-course").innerHTML = `
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse ${getChapClass("materi-1")}" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <div class="list-course mb-3">
          <a href="#" class="list-course-child ${getChapChild("materi-1/index.html")}">Materi 1.1</a>
        </div>
        <div class="list-course mb-3">
          <a href="#" class="list-course-child">Materi 1.2</a>
        </div>
        <div class="list-course">
          <a href="#" class="list-course-child">Materi 1.3</a>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <div class="list-course mb-3">
          <a href="#" class="list-course-child">Materi 2.1</a>
        </div>
        <div class="list-course mb-3">
          <a href="#" class="list-course-child">Materi 2.2</a>
        </div>
        <div class="list-course">
          <a href="#" class="list-course-child">Materi 2.3</a>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <div class="list-course mb-3">
          <a href="#" class="list-course-child">Materi 3.1</a>
        </div>
        <div class="list-course mb-3">
          <a href="#" class="list-course-child">Materi 3.2</a>
        </div>
        <div class="list-course">
          <a href="#" class="list-course-child">Materi 3.3</a>
        </div>
      </div>
    </div>
  </div>
</div>
`