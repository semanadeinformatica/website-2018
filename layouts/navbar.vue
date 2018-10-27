<template>
  <main>

  	<nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
  		<div class="container">

  			<a class="navbar-brand" href="/">
  				<img src="~/assets/img/logo.png" height="64px" width="64px" alt="semana de informatica logo">
  			</a>

  			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
  				<span class="navbar-toggler-icon"></span>
  			</button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto text-lowercase navbar-list">
            <li class="nav-item">
              <h4>
                <a class="nav-link" href="/#sobre">Sobre Nós</a> 
              </h4>
            </li>
             <li class="nav-item">
              <h4>
                <a class="nav-link" href="/#speakers">Speakers</a>
              </h4>
            </li>
            <li class="nav-item">
              <h4>
                <a class="nav-link" href="/programa">Programa</a>
              </h4>
            </li>
            <li class="nav-item">
              <h4>
                <a class="nav-link" href="/equipa">Equipa</a>
              </h4>
            </li>
            <li class="nav-item">
              <h4>
                <a class="nav-link" href="https://www.eventbrite.com/e/semana-de-informatica-tickets-50695985056">Bilhetes</a>
              </h4>
            </li>
            <li class="nav-item">
							<h4>
								<a class="nav-link" href="/competicao-programacao">Competição</a>
							</h4>
						</li>
            <li class="nav-item">
              <h4>
                <a class="nav-link" href="/#contactos">Contactos </a>
              </h4>
            </li>
          </ul>
        </div>
  		</div>
  	</nav>

    <nuxt class="mt-5" />

    <div class="pre-footer"></div>
    <footer class="mt-5 mb-3">
      <div class="py-4 white-anchors text-center">
          <span class="lead">copyright 2018 <a href="https://ni.fe.up.pt">niaefeup</a>, todos os direitos reservados</span>
      </div>
    </footer>
</main>
</template>

<style>

main {
  margin-top: 8em;
}

.section-header-divider {
  background-color: #DA291C;
  width: 100%;
  height: 1em;
}

.pre-footer {
  background-image: url('~/assets/img/animation.svg');
  background-size: 95% 100%;
  height: 100px;
}

@media (min-width: 961px) {
	.pre-footer {
		background-size: auto 100%;
		height: 200px;
	}
}

.white-anchors a {
  color: white;
}
</style>
