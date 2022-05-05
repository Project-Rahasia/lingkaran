document.querySelector(".menu").innerHTML = `
<div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
  <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-5 d-none d-sm-inline">Menu</span>
  </a>
  <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
    <li class="nav-item">
      <a href="./home.html" class="nav-link align-middle px-0">
        <i class="fas fa-home"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
      </a>
    </li>
    <li>
      <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
        <i class="fas fa-list-alt"></i> <span class="ms-1 d-none d-sm-inline">Daftar Nilai</span>
      </a>
      <ul class="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
        <li class="w-100">
          <a href="./kuis-1.html" class="nav-link px-0"> <span class="d-none d-sm-inline">Kuis</span> 1 </a>
        </li>
        <li>
          <a href="./kuis-2.html" class="nav-link px-0"> <span class="d-none d-sm-inline">Kuis</span> 2 </a>
        </li>
        <li>
          <a href="./kuis-3.html" class="nav-link px-0"> <span class="d-none d-sm-inline">Kuis</span> 3 </a>
        </li>
        <li>
          <a href="./latihan.html" class="nav-link px-0"> <span class="d-none d-sm-inline">Latihan </a>
        </li>
      </ul>
    </li>
  </ul>
  <hr>
  <div class="dropdown pb-4">
    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fas fa-user"></i>
      <span class="d-none d-sm-inline mx-1">Guru</span>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
      <li><a class="dropdown-item" href="#" id="logout">Sign out</a></li>
    </ul>
  </div>
</div>
`;

document.getElementById("logout").addEventListener("click", () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("pass");
  window.location = "../";
});
