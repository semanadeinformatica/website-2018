<template>
  <div>

  	<nav class="navbar navbar-expand-sm navbar-light bg-light sticky">
  		<div class="container">

  			<a class="navbar-brand" href="#">
  				<img src="~/assets/img/logo.png" height="64px" width="64px" alt="semana de informatica logo">
  			</a>

  			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
  				<span class="navbar-toggler-icon"></span>
  			</button>

  			<div class="collapse navbar-collapse" id="navbarCollapse">
  				<ul class="navbar-nav ml-auto text-lowercase navbar-list">
  					<li class="nav-item">
  						<h4>
  							<a class="nav-link" href="#">About</a> 
  						</h4>
  					</li>
  					<li class="nav-item">
  						<h4>
  							<a class="nav-link" href="#">Program</a>
  						</h4>
  					</li>
  					<li class="nav-item">
  						<h4>
  							<a class="nav-link" href="#">Speakers</a>
  						</h4>
  					</li>
  					<li class="nav-item">
  						<h4>
  							<a class="nav-link" href="#">Tickets</a>
  						</h4>
  					</li>
  					<li class="nav-item">
  						<h4>
  							<a class="nav-link" href="#">Contact Us</a>
  						</h4>
  					</li>
  				</ul>
  			</div>
  		</div>
  	</nav>

    <nuxt/>

    <div class="pre-footer"></div>
    <footer class="mt-5 mb-3">
      <div class="my-4 white-anchors text-center">
          <span class="lead">copyright 2018 niafeup, all rights reserved</span>
      </div>
    </footer>
  </div>
</template>

<style>

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

.white-anchors a {
  color: white;
}
</style>
