<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/icon.jpg';
	import profilePic from '$lib/images/profile-picture.jpg';
	import { goto } from '$app/navigation';

 	

	
</script>


{#if $page.url.pathname != '/'}
<header>
	<nav class="navbar py-3 navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand p-0" href="/dashboard">
			<img src={logo} width="30" height="30" class="d-inline-block align-top" alt="">
			Sharepoint
		  </a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
		  <ul class="navbar-nav mr-auto">
			<li class="nav-item active">
			  <a class="nav-link" href="/albums"> Albums </a>
			</li>
			<li class="nav-item active">
			  <a class="nav-link" href="/social"> Social </a>
			</li>
			<li class="nav-item active">
			  <a class="nav-link" href="/feedback"> Feedback </a>
			</li>
		  </ul>

		  <a class="navbar-brand p-0" href="/profile">
			<img src={profilePic} width="50" height="50" class="d-inline-block align-top" alt="">
		  </a>
		  
		</div>
	  </nav>
</header>

<style>
	a img {
		border-radius: 50%; 	
	}
</style>


{/if}
