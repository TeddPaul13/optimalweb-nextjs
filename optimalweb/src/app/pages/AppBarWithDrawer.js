"use client"

import 'bootstrap/dist/css/bootstrap.min.css';

export default function DrawerAppBar(){
    return(
<nav class="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Optimal Handyman Services</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Services</a>
        <a class="nav-link" href="#">Project Gallery</a>
        <a class="nav-link" href="#">Testimonials</a>
      </div>
    </div>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
</div>
  </div>
</nav>
    );
}