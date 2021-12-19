const getUrlPage = (path) => {
  return this.location.pathname === path ? "active" : "";
};

document.querySelector(".navbar").innerHTML = `
<div class="container">
<a class="navbar-brand" href="/">
  <img src="/assets/img/circle-1.png" alt="" width="25" height="25" class="d-inline-block align-text-top">
  <span>Lingkaran</span>
</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ms-auto">
    <li class="nav-item">
      <a class="nav-link active" href="/">Beranda</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Tentang</a>
    </li>
  </ul>
</div>
`;
