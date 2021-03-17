<template>
  <!-- Header Starts -->
  <header class="site-header d-none d-lg-block">
    <div class="container-fluid pl-lg--35 pr-lg--35">
      <div
        class="row justify-content-between align-items-center position-relative"
      >
        <div class="col-4 col-md-4 logo-safemilk">
          <a href="#">Leite Seguro</a>
        </div>
        <!-- Menu Block -->
        <div class="col-4 col-md-4">
          <div class="main-navigation">
            <ul class="main-menu">
              <li class="menu-item has-dropdown">
                <a href="#features">Demos</a>
                <ul class="menu-dropdown">
                  <li class="single-item">
                    <a href="#">
                      <h3>Mobile Application</h3>
                      <p>Best for Mobile App Presentation</p>
                    </a>
                  </li>
                  <li class="single-item">
                    <a href="#">
                      <h3>Web Application</h3>
                      <p>Best for Web Application</p>
                    </a>
                  </li>
                  <li class="single-item">
                    <a href="#">
                      <h3>SaaS Application</h3>
                      <p>Best for SaaS Application</p>
                    </a>
                  </li>
                  <li class="single-item">
                    <a href="#">
                      <h3>SaaS Subscription</h3>
                      <p>Best for SaaS Subscription</p>
                    </a>
                  </li>
                  <li class="single-item">
                    <a href="#">
                      <h3>Digital Service</h3>
                      <p>Best for Digital Services</p>
                    </a>
                  </li>
                  <li class="single-item">
                    <a href="#">
                      <h3>Online Course</h3>
                      <p>Best for Online Course</p>
                    </a>
                  </li>
                  <li class="single-item">
                    <a href="#">
                      <h3>Software</h3>
                      <p>Best for Software & Application</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item"><a href="#">Pricing</a></li>

              <li class="menu-item"><a href="#">Support</a></li>
            </ul>
          </div>
          <div class="mobile-menu"></div>
        </div>

        <!-- Button Block -->
        <div class="col-4 col-md-4">
          <div class="header-btns">
            <a href="#" class="btn btn--transparent">Sign in</a>
            <a href="#" class="btn btn--primary hvr-shine">Start free trial</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>