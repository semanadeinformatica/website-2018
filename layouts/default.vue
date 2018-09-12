<template>
  <div>
    <nuxt/>

    <footer id="contact" class="mt-5 mb-3">
      <div class="pre-footer"></div>
      <h2 class="container text-lowercase">Contact Us</h2>
      <div class="section-header-divider"></div>

      <div class="container mt-3 d-flex flex-wrap contact-us">
        <div class="d-flex flex-column">
          <span class="lead my-2"><i class="fas fa-envelope-square mr-2 fa-lg"></i> <a href="mailto:sinf.feup@gmail.com"> sinf.feup@gmail.com</a></span>
          <span class="lead my-2"><i class="fab fa-facebook-square mr-2 fa-lg"></i><a href="https://www.facebook.com/semanainformaticaFEUP/"> semanainformaticaFEUP</a></span>
          <span class="lead my-2"><i class="fab fa-linkedin mr-2 fa-lg"></i><a href="https://www.linkedin.com/company/semanainformaticafeup/"> semanainformaticaFEUP</a></span>
        </div>
        <div class="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          <span class="lead my-2"><i class="fas fa-map-marker-alt mr-2 fa-lg"></i> faculdade de engenharia da universidade do porto</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.section-header-divider {
  background-color: #DA291C;
  width: 100%;
  height: 1em;
}

.pre-footer {
  background-image: url('~/assets/img/pre-footer.png');
  background-size: auto 100%;
  height: 300px;
}

.contact-us a {
  color: white;
}
</style>
